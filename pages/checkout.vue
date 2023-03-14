<template>
  <div>
    <main class="font-roboto">
      <Container
        :padding="'px-4 2xl:px-10'"
        class="flex flex-col md:flex-row py-5"
      >
        <div class="w-full md:w-3/5 m-1">
          <div class="flex">
            <div class="w-1/2 form-control w-full pr-3">
              <label class="label">
                <span class="label-text">First Name *</span>
              </label>
              <input
                v-model="fristName"
                v-validate="'required'"
                type="text"
                placeholder="First Name"
                class="input w-full"
                name="fristName"
                :style="{
                  'border-color': errors.has('fristName') ? 'red' : '',
                }"
              />
              <span class="text-xs text-red-600">{{
                  errors.first('fristName')
                }}</span>
            </div>
            <div class="w-1/2 form-control w-full pl-3">
              <label class="label">
                <span class="label-text">Last Name *</span>
              </label>
              <input
                v-model="lastName"
                v-validate="'required'"
                type="text"
                placeholder="Last Name"
                class="input w-full"
                name="lastName"
                :style="{ 'border-color': errors.has('lastName') ? 'red' : '' }"
              />
              <span class="text-xs text-red-600">{{
                  errors.first('lastName')
                }}</span>
            </div>
          </div>
          <div class="flex form-control w-full">
            <label class="label">
              <span class="label-text">Country *</span>
            </label>
            <select
              v-model="countryCode"
              v-validate="'required'"
              class="select w-full"
              name="countryCode"
              :style="{
                'border-color': errors.has('countryCode') ? 'red' : '',
              }"
            >
              <option
                v-for="(item, index) in countries"
                :key="index"
                :value="item.code"
                :selected="countryCode === item.code ? true : false"
              >
                {{ item.name }} ({{ item.code }})
              </option>
            </select>
            <span class="text-xs text-red-600">{{
                errors.first('countryCode')
              }}</span>
          </div>
          <div class="flex form-control w-full">
            <label class="label">
              <span class="label-text">Street Address *</span>
            </label>
            <input
              v-model="address"
              v-validate="'required'"
              type="text"
              name="address"
              placeholder="Street Address"
              class="input w-full"
              :style="{ 'border-color': errors.has('address') ? 'red' : '' }"
            />
            <span class="text-xs text-red-600">{{
                errors.first('address')
              }}</span>
          </div>
          <div class="flex form-control w-full">
            <label class="label">
              <span class="label-text">Suite/apartment</span>
            </label>
            <input
              v-model="address2"
              type="text"
              name="address2"
              placeholder="Suite/apartment"
              class="input w-full"
            />

          </div>
          <div class="flex">
            <div class="w-1/2 form-control w-full pr-3">
              <label class="label">
                <span class="label-text">Town / City *</span>
              </label>
              <input
                v-model="city"
                v-validate="'required'"
                type="text"
                placeholder="Town / City"
                class="input w-full"
                name="city"
                :style="{ 'border-color': errors.has('city') ? 'red' : '' }"
              />
              <span class="text-xs text-red-600">{{
                  errors.first('zipCode')
                }}</span>
            </div>
            <div class="w-1/2 form-control w-full pl-3">
              <label class="label">
                <span class="label-text">State *</span>
              </label>
              <select
                v-model="region"
                v-validate="'required'"
                class="select w-full"
                name="region"
                :style="{ 'border-color': errors.has('region') ? 'red' : '' }"
              >
                <option
                  v-for="item in regions"
                  :key="item.shortCode + '-' + item.name"
                  :value="item.name"
                  :selected="region === item.name ? true : false"
                >
                  {{ item.name }}
                </option>
              </select>
              <span class="text-xs text-red-600">{{
                  errors.first('region')
                }}</span>
            </div>
          </div>
          <div class="flex">
            <div class="w-1/2 form-control w-full pr-3">
              <label class="label">
                <span class="label-text">Zip Code *</span>
              </label>
              <input
                v-model="zipCode"
                v-validate="'required'"
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                class="input w-full"
                :style="{ 'border-color': errors.has('zipCode') ? 'red' : '' }"
              />
              <span class="text-xs text-red-600">{{
                  errors.first('zipCode')
                }}</span>
            </div>
            <div class="w-1/2 form-control w-full pl-3">
              <label class="label">
                <span class="label-text">Phone *</span>
              </label>
              <input
                v-model="phoneNumber"
                v-validate="'required'"
                type="text"
                name="phoneNumber"
                placeholder="Phone"
                class="input w-full"
                :style="{
                  'border-color': errors.has('phoneNumber') ? 'red' : '',
                }"
              />
              <span class="text-xs text-red-600">{{
                  errors.first('phoneNumber')
                }}</span>
            </div>
          </div>
          <div class="flex form-control w-full">
            <label class="label">
              <span class="label-text">Email Address *</span>
            </label>
            <input
              v-model="email"
              v-validate="'required|email'"
              type="text"
              name="email"
              placeholder="Email Address"
              class="input w-full"
              :style="{ 'border-color': errors.has('email') ? 'red' : '' }"
            />
            <span class="text-xs text-red-600">{{
                errors.first('email')
              }}</span>
          </div>
        </div>
        <div class="w-full md:w-2/5 m-1">
          <div class="font-bold">
            <h3>Product</h3>
            <div
              v-for="item in $store.getters['cart/getProductsCart']"
              :key="item.id"
              class="flex items-center gap-2 py-3 border-b"
            >
              <!--              <img-->
              <!--                :src="item.image"-->
              <!--                alt="cart-item"-->
              <!--                class="w-1/4 flex-shrink-0"-->
              <!--              />-->
              <div class="avatar">
                <div class="w-24 rounded">
                  <img :src="item.image"/>
                </div>
              </div>
              <div class="w-3/4">
                <div class="flex justify-between">
                  <h2 class="font-medium text-sm">
                    {{ item.title }}
                  </h2>
                  <!-- x icon -->
                  <div
                    class="h-5 w-5 rounded-full border-2 flex-shrink-0 flex justify-center items-center cursor-pointer mt-2"
                    @click="
                      $store.commit('cart/removeCartItem', {
                        id: item.id,
                      })
                    "
                  >
                    <span
                      class="h-0.5 w-2.5 bg-black transform rotate-45 -mr-1"
                    ></span>
                    <span
                      class="h-0.5 w-2.5 bg-black transform -rotate-45 -ml-1.5"
                    ></span>
                  </div>
                </div>
                <div class="my-2.5">
                  <span
                    class="text-xs text-gray-400"
                    v-html="$options.filters.skuDisplay(item.properties)"
                  ></span>
                </div>
                <div class="text-gray-400 text-sm">
                  {{ item.quantity }} X
                  <span class="font-medium text-gray-600">
                    ${{ item.price | number('0,0.00') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="py-3 flex justify-between text-sm border-b px-1">
            <div class="font-bold">Subtotal:</div>
            <div class="font-medium">
              ${{ $store.getters['cart/subTotal'] | number('0,0.00') }}
            </div>
          </div>
          <div class="py-3 border-b">
            <h4 class="my-3 font-bold uppercase">
              Free shipping on orders over ${{
                $store.state.store.costOverShipping
              }}
            </h4>
            <ul v-if="shippingCost > 0">
              <li
                v-for="shippingMethod in shippingCountries"
                :key="shippingMethod.id"
                @click="shippingId = shippingMethod.id"
                class="cursor-pointer mb-2 text-gray-600"
              >
                <div>
                  <input
                    type="radio"
                    name="shipping"
                    :checked="shippingId === shippingMethod.id"
                  />
                  <label>
                    <span v-if="shippingMethod.cost > 0">
                      {{ shippingMethod.name }}
                    </span>
                    <span v-else>
                      Free shipping - ${{
                        shippingMethod.cost | number('0,0.00')
                      }}
                    </span>
                  </label>
                </div>
              </li>
            </ul>
            <ul v-else>
              <li>
                <div>
                  <input type="radio" name="shipping" checked/>
                  <label> Free shipping - $0.00 </label>
                </div>
              </li>
            </ul>
          </div>
          <div class="py-3">
            <label class="flex mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <span> Coupon</span>
            </label>
            <div class="flex flex-row">
              <label class="input-group">
                <input
                  type="text"
                  v-model="discountCode"
                  placeholder="Coupon code"
                  class="input input-md w-full"
                />
                <button class="btn bg-dark-purple" @click="onApplyDiscount">
                  Apply coupon
                </button>
              </label>
            </div>
          </div>
          <div class="py-3 flex justify-between text-sm border-b px-1">
            <div class="text-xl font-bold">Total:</div>
            <div class="font-bold text-2xl">
              ${{ totals | number('0,0.00') }}
            </div>
          </div>
          <div>
            <div class="font-bold my-3">Payment Methods</div>
            <div v-if="paymentInfo.stripePublicKey">
              <label class="flex items-center cursor-pointer">
                <input
                  v-model="paymentMethod"
                  type="radio"
                  name="radio-6"
                  value="VISA"
                  class="radio checked:bg-red-500"
                  checked
                />
                <span class="ml-3">Credit Card</span>
              </label>
              <div v-show="paymentMethod === 'VISA'" class="my-5">
                <Stripe
                  ref="paymentStripe"
                  :trust-domain="this.trustDomain"
                  :products="convertToPaymentProduct"
                  :shipping-address="shippingAddress"
                  :discount-code="discountCode"
                  :stripe-public-key="paymentInfo.stripePublicKey"
                  @onPaymentSuccess="onSuccess"
                  @onPaymentError="onFailure"
                />
              </div>
            </div>
            <div v-if='paymentInfo.paypalClientId'>
              <label class="flex items-center my-5 cursor-pointer">
                <input
                  v-model="paymentMethod"
                  type="radio"
                  name="radio-6"
                  value="PAYPAL"
                  class="radio checked:bg-red-500"
                  checked
                />
                <span class="ml-3">Paypal</span>
              </label>
              <div v-show="paymentMethod === 'PAYPAL'">
                <client-only>
                  <Paypal
                    :products="convertToPaymentProduct"
                    :shippingAddress="shippingAddress"
                    :discount-code="discountCode"
                    :paypal-client-id="paymentInfo.paypalClientId"
                    @onPaymentSuccess="onSuccess"
                    @onPaymentError="onFailure"
                  />
                </client-only>
              </div>
            </div>
          </div>

          <div v-if="isStripe">
            <button
              v-show="paymentMethod === 'VISA'"
              :disabled="isLoadingStripe"
              class="btn-md btn-active uppercase text-sm text-white font-normal rounded w-full bg-dark-purple"
              @click="onSubmit"
            >
              place order
            </button>

          </div>

        </div>
      </Container>
    </main>
  </div>
</template>

<script>
import {mapFields} from 'vuex-map-fields'
import Paypal from '@/components/payment/PaypalV2.vue'
import Stripe from "~/components/payment/Stripe";
import {validateEmail, isEmpty} from '@/common/AppUtils.js'


export default {
  components: {
    Paypal,
    Stripe
  },
  async asyncData({$axios, $cacheFetch, store}) {
    const countries = await $cacheFetch(
      {key: 'countries', expire: 60 * 60 * 10},
      () => {
        return $axios.$get('/common/country-list')
      }
    )

    const countryRegions = await $cacheFetch(
      {key: 'country_regions', expire: 60 * 60 * 10},
      () => {
        return $axios.$get('/common/country-region-data')
      }
    )
    const paymentInfo = await $axios.$get('/payment/payment-info')
    let paymentMethod = "PAYPAL";
    if (paymentInfo && paymentInfo.stripePublicKey) {
      paymentMethod = "VISA"
    }
    return {
      countryRegions,
      countries,
      paymentInfo,
      paymentMethod
    }
  },
  data() {
    return {
      discountCode: '',
      discountPercent: 0,
      shippings: [],
      isShowCoupon: false,
      isLoadingStripe: false,
      trustDomain: this.$store.state.store.trustDomain
    }
  },
  head() {
    return {
      title: "Checkout",
      script: [{src: 'https://js.stripe.com/v3'}],
    }
  },
  computed: {
    ...mapFields('shipping', [
      'email',
      'fristName',
      'lastName',
      'phoneNumber',
      'address',
      'address2',
      'region',
      'city',
      'zipCode',
      'apartment',
      'countryCode',
      'shippingId',
    ]),
    regions() {
      if (this.countryCode) {
        const coun = this._.find(this.countryRegions, (country) => {
          return country.countryShortCode === this.countryCode
        })
        if (coun !== undefined) {
          return coun.regions
        }
      }
      return []
    },
    products() {
      const results = this.$store.getters['cart/getProductsCart']
      return results
    },
    countryActive() {
      const coun = this._.find(this.countries, (country) => {
        return country.code === this.countryCode
      })
      return coun
    },
    shippingAddress() {
      const shippingAddress = {
        email: this.email,
        fullName: this.fristName + ' ' + this.lastName,
        phoneNumber: this.phoneNumber,
        address: this.address,
        address2: this.address2,
        city: this.city,
        country: {
          code: this.countryCode,
          name: this.countryActive.name,
        },
        region: this.region,
        zipCode: this.zipCode,
        shippingId: this.shippingId,
      }
      return shippingAddress
    },
    shippingCountries() {
      const shippingMethods = []
      if (this.countryCode === 'US') {
        this._.forEach(this.shippings, (info) => {
          const quantity = this.$store.getters['cart/countItems']
          const additionalCost =
            quantity > 1 ? (quantity - 1) * info.additionalCost : 0
          const cost = info.costInUS + additionalCost
          shippingMethods.push({
            id: info.id,
            name:
              info.name +
              ' Shipping - $' +
              this.$options.filters.number(cost, '0,0.00'),
            cost,
            additionalCost,
          })
        })
      } else {
        this._.forEach(this.shippings, (info) => {
          const quantity = this.$store.getters['cart/countItems']
          const additionalCost =
            quantity > 1 ? (quantity - 1) * info.additionalCost : 0
          const cost = info.costOutUS + additionalCost
          const item = {
            id: info.id,
            name:
              info.name +
              ' Shipping - $' +
              this.$options.filters.number(cost, '0,0.00'),
            cost,
            additionalCost,
          }
          shippingMethods.push(item)
        })
      }
      return shippingMethods
    },
    subtotal() {
      return this.$store.getters['cart/subTotal']
    },
    discount() {
      return this._.round((this.subtotal * this.discountPercent) / 100.0, 2)
    },
    shippingCost() {
      if (this.subtotal < this.$store.state.store.costOverShipping) {
        const info = this._.find(this.shippingCountries, (info) => {
          return info.id === this.shippingId
        })
        if (info) {
          return info.cost
        }
      }

      return 0
    },
    totals() {
      return this._.round(this.subtotal + this.shippingCost - this.discount, 2)
    },
    isTrustedPayment() {
      if (this.$store.state.store.trustDomain && this.$store.state.store.trustDomain.length > 0) {
        return true
      }
      return false
    },
    isStripe(){
      if(this.paymentInfo && this.paymentInfo.stripePublicKey){
        return true
      }
      if (this.trustDomain && this.trustDomain.length > 0) {
        return  true
      }
      return false
    },
    isValidBillingAddress() {
      if (
        validateEmail(this.email) &&
        !isEmpty(this.fristName) &&
        !isEmpty(this.lastName) &&
        !isEmpty(this.address) &&
        !isEmpty(this.region) &&
        !isEmpty(this.city) &&
        !isEmpty(this.zipCode) &&
        !isEmpty(this.countryCode)
      ) {
        return true
      }
      return false
    },
    convertToPaymentProduct() {
      const productRequest = []
      this._.forEach(this.products, (product) => {
        const item = {
          productId: product.productId,
          quantity: product.quantity,
          variantId: product.variantId,
          title: product.title,
          price: product.price,
          image: product.image,
          properties: this.displayProperties(product.properties),
        }
        productRequest.push(item)
      })
      return productRequest
    },
  },
  mounted() {
    this.initPaymentMethod()
    this.getShippingInfo()

    try {
      this.$tracking.onInitCheckout();
      if (this.$store.state.store.isFakeCheckout) {
        this.$tracking.onPinCheckout()
      }
    } catch (e) {
      console.error(e)
    }


  },
  methods: {
    onSubmit() {
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$refs.paymentStripe.onSubmitStripe()
        } else {
          this.$toast.error('Please enter your shipping address')
        }
      })
    },
    displayProperties(proterties) {
      const text = []
      this._.forEach(proterties, (prop) => {
        text.push(prop.name + ': ' + prop.value)
      })
      return this._.join(text, ' ,')
    },
    onPaymentPaypalSuccess(data) {
      this.onSuccess(data)
    },
    onPaymentPaypalError(e) {
      this.onFailure(e)
    },
    findCountry(countryCode) {
      const coun = this._.find(this.countries, (country) => {
        return country.code === countryCode
      })
      return coun
    },
    getShippingInfo() {
      this.$axios.$get('/store/shipping/info').then((resp) => {
        this.shippings = resp
        this.shippingId = this.shippings[0].id
      })
    },
    onApplyDiscount() {
      this.$axios
        .$post('/order/discount/code', {
          discountCode: this.discountCode,
        })
        .then((resp) => {
          if (resp.discount) {
            this.discountPercent = resp.discount
          } else {
            this.discountPercent = 0
          }
        })
    },
    onSuccess(data) {
      try {
        this.$tracking.onPurchase({
          transaction_id: data.orderId,
          shipping: this.shippingCost,
          value: this.totals,
        })
      } catch (e) {
        console.error(e)
      }
      this.$store.commit('cart/clearCart')
      this.$nuxt.$loading.finish()
      this.$router.push({
        path: '/confirm',
        query: {
          key: 'wc_order',
          orderId: data.orderId,
          domain: this.$store.state.cart.domain,
        },
      })
    },
    onFailure(e) {
      this.$nuxt.$loading.finish()
      this.$toast.error(
        'Unfortunately, Your payment was not successful. Please try again with a different card or another payment option'
      )
      // setTimeout(() => {
      //   window.location.reload()
      // }, 2 * 1000)
    },
    initPaymentMethod() {
      if (
        this.$store.state.store.stripePublicKey &&
        this.$store.state.store.stripePublicKey.length > 0
      ) {
        this.paymentMethod = 'VISA'
      } else if (
        this.$store.state.store.paypalEnv &&
        this.$store.state.store.paypalEnv.length > 0
      ) {
        this.paymentMethod = 'PAYPAL'
      }
    },
  },
}
</script>
<style>
#stripe-element-errors {
  font-size: 14px;
  color: #fa755a;
}
</style>
