<template>
  <div>

    <div class='border rounded p-3 mt-5'>
      <p class='text-xl text-dark-purple underline mb-4'>Features</p>
      <div
        v-if='isShowHtmlDefault'

      >
        <div>
          <div v-if='isShowCustomDescription'>
            <span v-html='$store.state.store.customDescProduct'></span>
          </div>
          <div v-else>
            <p>
              <strong>30-DAY RETURN POLICY</strong><br />RECEIVE WRONG OR
              DAMAGED ITEMS? NO PROBLEM, WE WILL SEND YOU A NEW ITEM. WE DO
              JUST ABOUT ANYTHING TO MAKE THE CUSTOMERS HAPPY!
            </p>
            <p>
              <strong>DELIVERY</strong><br />T-shirt, Hoodie, Tanktop, Mugs
              are Printed And Shipped From The US. Your order will be
              printed exclusively for you within 3 - 5 days.<br />If you are
              in the US, you will receive your order within 4-7 business
              days after printing is complete.<br />For all other countries,
              please allow between 10-14 business days.
            </p>
            <p>
              All over T-shirt, Blanket, Shoes are printed out side US. Your
              order will be printed exclusively for you within 7 - 10 days.
              You will receive your order within 12 - 15 business days after
              printing is complete.
            </p>
            <p>
              <strong>FREE SHIPPING WORLDWIDE</strong><br />When you place
              an order over $100
            </p>
            <p>
              <strong>SECURE AND EASY CHECKOUT</strong><br />YOUR PAYMENT
              INFORMATION IS SECURED BY TRUSTED PAYMENT GATEWAYS! JUST USE
              YOUR CREDIT CARD TO PAY WITHOUT PAYMENT GATEWAYS ACCOUNTS!
            </p>
          </div>
        </div>
      </div>
      <div
        v-else

      >
        <div>
          <div>
            <span v-html='htmlBody'></span>
          </div>
        </div>
      </div>
    </div>
    <input id='size-guide-modal' type='checkbox' class='modal-toggle'>
    <label class='modal' for='size-guide-modal'>
      <label class='modal-box w-11/12 max-w-3xl relative'>
        <label for='size-guide-modal' class='btn btn-xs  btn-circle absolute right-2 top-2'>✕</label>
        <SizeGuide />
      </label>
    </label>
  </div>
</template>
<script>
import SizeGuide from '~/components/pages/detail/SizeGuide'

export default {
  components: {
    SizeGuide
  },
  props: {
    htmlBody: {
      type: String,
      default() {
        return ''
      }
    },
    productId: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      tabName: 'DESCRIPTION',
      isOnlyShirtSys: process.env.ONLY_SHIRT_SYS
    }
  },
  computed: {
    isShowHtmlDefault() {
      if (this.isOnlyShirtSys === '1' && !this.productId.startsWith('DR-')) {
        return true
      } else if (!this.htmlBody || this.htmlBody.length < 5) {
        return true
      } else {
        return false
      }
    },
    isShowCustomDescription() {
      if (
        this.$store.state.store.customDescProduct &&
        this.$store.state.store.customDescProduct.length >= 3
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
