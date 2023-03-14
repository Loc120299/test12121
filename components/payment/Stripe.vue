<template>
  <div>
    <div v-if="isTrustedPayment">
      <iframe ref="iframe" :src="trustPaymentLink" height="70" frameBorder="0" style="width: 100%"></iframe>
    </div>
    <div v-else>
      <client-only>
        <stripe-element-card
          ref="elementRef"
          :pk="stripePublicKey"
          :hide-postal-code="true"
          @error="onErrorCredit"
          @loading="isLoadingStripe = $event"
          class="border rounded"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stripe",
  props: {
    trustDomain: String,
    stripePublicKey: String,
    shippingAddress: Object,
    discountCode: String,
    products: {
      type: Array,
      default() {
        return [];
      }
    }

  },
  data() {
    return {
      isLoadingStripe: false
    }
  },
  computed: {
    isTrustedPayment() {
      if (this.trustDomain && this.trustDomain.length > 0) {
        return true
      }
      return false
    },
    trustPaymentLink() {
      return `https://${this.trustDomain}/?mecom-stripe-get-payment-form=1`
    }
  },
  methods: {
    receiveMessageFromIframe(event){
      // if (event.data === "mecom-startSubmitPaymentStripe") {
      // }
      // if (event.data === "mecom-endSubmitPaymentStripe") {
      // }
      if (event.data === 'mecom-loadedPaymentFormStripe') {
        window.loadedPaymentFormStripe = true;
      }
      if (event.data === 'mecom-paymentFormCompletedStripe') {
        window.paymentFormCompletedStripe = true;
      }
      if (event.data === 'mecom-paymentFormFailStripe') {
        window.paymentFormCompletedStripe = false;
      }
      if ((typeof event.data === 'object') && event.data.name === 'mecom-errorSubmitPaymentStripe') {
        console.log(event.data);
        this.onFailure(new Error('Unfortunately, Your payment was not successful. Please try again with a different card or another payment option'))
      }
      if ((typeof event.data === 'object') && event.data.name === 'mecom-paymentMethodIdStripe') {
        const paymentMethodId = event.data.value;
        console.log('paymentMethodId', paymentMethodId)
        this.callPaymentIframe(paymentMethodId)
      }
    },
    callPaymentIframe(stripePaymentId) {
      this.$nuxt.$loading.start()
      this.$axios
        .$post('/order/stripe/purchase', {
          products: this.products,
          billingAddress: this.shippingAddress,
          coupon: this.discountCode,
          paymentMethodId: stripePaymentId,
          trustDomain: this.trustDomain
        })
        .then((resp) => {
          this.onSuccess(resp)
        }).catch((e) => {
        this.onFailure(e)
      })
    },
    onSuccess(resp){
      this.$emit("onPaymentSuccess", resp);
    },
    onFailure(error){
      this.$emit("onPaymentError", error);
    },
    onErrorCredit(error) {
      this.$toast.error(error.message)
      this.$nuxt.$loading.finish()
    },
    onPayStripe() {
      this.$nuxt.$loading.start()
      const stripe = this.$refs.elementRef.stripe
      const card = this.$refs.elementRef.element
      stripe
        .createPaymentMethod({
          type: 'card',
          card,
          billing_details: {
            email: this.shippingAddress.email,
          },
        })
        .then((resp) => {
          this.$axios
            .$post('/order/stripe/purchase', {
              products: this.products,
              billingAddress: this.shippingAddress,
              coupon: this.discountCode,
              paymentMethodId: resp.paymentMethod.id,
            })
            .then((resp) => {
              if (resp.requiresAction) {
                stripe
                  .handleCardAction(resp.clientSecret)
                  .then(({paymentIntent}) => {
                    if (paymentIntent) {
                      this.$axios
                        .$post('/order/stripe/3d-secure-confirm', {
                          paymentIntentId: paymentIntent.id,
                        })
                        .then((resp) => {
                          this.onSuccess(resp)
                        })
                        .catch((e) => {
                          this.onFailure(e)
                        })
                    } else {
                      this.onFailure(null)
                    }
                  })
                  .catch((e) => {
                    this.onFailure(e)
                  })
              } else {
                this.onSuccess(resp)
              }
            })
            .catch((e) => {
              this.onFailure(e)
            })
        })
        .catch((e) => {
          this.onFailure(e)
        })
    },
    onPayIframeStripe() {
      this.$refs.iframe.contentWindow.postMessage({
        name: 'mecom-submitFormStripe',
        value: {
          billing_details : {
            name: this.shippingAddress.fullName,
            email:this.shippingAddress.email,
            address: {
              city: this.shippingAddress.city,
              country: this.shippingAddress.country.code,
              line1: this.shippingAddress.address,
              line2: this.shippingAddress.address2,
              postal_code: this.shippingAddress.zipCode,
              state: this.shippingAddress.region,
            },
            phone: this.shippingAddress.phoneNumber,
          }
        }
      }, '*');
    },
    onSubmitStripe(){
      console.log('isTrustPayment', this.isTrustedPayment)
      if(this.isTrustedPayment){
        this.onPayIframeStripe()
      } else {
        this.onPayStripe()
      }
    }
  },
  beforeDestroy() {
    console.log('pk', this.stripePublicKey)
    window.removeEventListener('message', this.receiveMessageFromIframe)
  },
  mounted(){
    console.log('pk', this.stripePublicKey)
    console.log('isTrustPayment', this.isTrustedPayment)
    window.addEventListener('message', this.receiveMessageFromIframe);
  }
}
</script>

<style scoped>

</style>
