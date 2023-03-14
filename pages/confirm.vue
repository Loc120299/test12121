<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class=' py-5'>

        <div class='w-full flex justify-center uppercase  md:text-xl font-bold text-gray-900'>
          <h3 class=''>
            <a href='/cart'>1. Shopping Cart</a>
          </h3>
          <h3 class='mx-5'>
            <a href='/checkout'>2. Checkout</a>
          </h3>
          <h3 class='text-blue-600'>
            <a href='/confirm'>3. Order Complete</a>
          </h3>
        </div>

        <div class=''>
          <div class='flex justify-center'
          >
            <div>
              <div class='text-3xl text-dark-purple my-5'>
                <h5 class='text-center'>
                  Thank You!
                </h5>
                <p class='text-center'>Your order has been received</p>
              </div>
            </div>
          </div>

          <div class='grid grid-cols-2 text-dark-purple' v-if='orderInfo'>
            <div class='mt-3 '>
              <div class='font-bold'>SUMMARY</div>
              <div class='font-700'>OrderID : # {{ orderInfo.orderId }}</div>
              <div class='font-700'>Order Date : {{ orderInfo.dateCreated }}</div>
              <div class='font-700'>
                Shipping Cost : ${{ shippingCost | number('0,0.00') }}
              </div>
              <div class='font-700'>
                Order Totals : ${{ totals | number('0,0.00') }}
              </div>
            </div>
            <div class='mt-3'>
              <div class='font-bold'>SHIPPING ADDRESS</div>
              <div class='font-700'>{{ orderInfo.billingAddress.fullName }}</div>
              <div class='font-700'>
                {{ orderInfo.billingAddress.phoneNumber }}
              </div>
              <div class='font-700'>{{ orderInfo.billingAddress.email }}</div>
              <div class='font-700'>
                <span>  {{ orderInfo.billingAddress.address }},</span>
                <span v-if="orderInfo.billingAddress.apartment">  {{ orderInfo.billingAddress.apartment }},</span>
                <span>  {{ orderInfo.billingAddress.city }},</span>
                <span>  {{ orderInfo.billingAddress.region }},</span>
                <span>  {{ orderInfo.billingAddress.zipCode }},</span>
                <span>  {{ orderInfo.billingAddress.countryName }}</span>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto">

            <table class='table mt-3' v-if='orderInfo'>
              <thead>
              <tr>
                <th></th>
                <th><span>Product</span></th>
                <th></th>
                <th><span>Price</span></th>
                <th><span>quantity</span></th>
                <th>Subtotal</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for='item in items' :key='item.id'>
                <th>

                </th>
                <td>
                  <div class='avatar'>
                    <div class='w-24 rounded'>
                      <img :src='item.image'/>
                    </div>
                  </div>
                </td>
                <td>
                  <div class='flex flex-col'>
                    <div class='truncate'>{{ item.title }}</div>
                    <span class='font-bold text-dark-purple' v-html='displaySku(item.valueList)'>
                          </span>
                  </div>
                </td>
                <td>
                  <span>${{ item.price | number('0,0.00') }}</span>
                </td>
                <td>
                  {{ item.quantity }}
                </td>
                <td>
                  <span>${{ item.price | number('0,0.00') }}</span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class='row' v-if='orderInfo'>
            <div class='text-dark-purple mt-3' style='text-align: end'>
              SUBTOTAL : ${{ subTotals | number('0,0.00') }}
            </div>
            <div class='text-dark-purple mt-3' style='text-align: end'>
              SHIPPING COST : ${{ shippingCost | number('0,0.00') }}
            </div>
            <div class='text-dark-purple mt-3' style='text-align: end'>
              TOTALS : ${{ totals | number('0,0.00') }}
            </div>
          </div>
        </div>

      </Container>
    </main>
  </div>
</template>
<script>


export default {
  head() {
    return {
      title: "Confirm",
    };
  },
  async asyncData({$axios, params, query, req, error}) {
    try {
      const {data} = await $axios.get('/order/info/' + query.orderId)
      return {
        orderInfo: data
      }
    } catch (e) {
      return {
        orderInfo: null
      }
    }
  },
  computed: {
    items() {
      if (this.orderInfo && this.orderInfo.items) {
        return this.orderInfo.items
      }
      return []
    },
    subTotals() {
      let totals = 0
      this._.forEachRight(this.items, (item) => {
        totals += item.price * item.quantity
      })
      return this._.round(totals, 2)
    },
    shippingCost() {
      if (this.orderInfo && this.orderInfo.fee) {
        return this.orderInfo.fee
      }
      return 0
    },
    discountCost() {
      if (this.orderInfo && this.orderInfo.discount) {
        return this._.round(
          (this.subTotals * this.orderInfo.discount) / 100.0,
          2
        )
      } else {
        return 0
      }
    },
    totals() {
      return this.subTotals + this.shippingCost - this.discountCost
    }
  },
  methods: {
    displaySku(value) {
      if (value) {
        const skus = value.split(",")
        const properties = []
        skus.forEach((prop) => {
          const values = prop.split(':')
          properties.push({
            name: values[0].trim(),
            value: values[1].trim()
          })
        })
        const text = []
        properties.forEach((prop) => {
          if (prop.name === 'Custom_Image') {
            text.push(prop.name + `: <a target='_blank' class='text-dark-purple underline font-bold' href="${prop.value}">view</a>`)
          } else {
            text.push(prop.name + ': ' + prop.value)
          }

        })
        return text.join(' / ')
      }
      return value
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('cart/clearCart')
    }, 500)
  }
}
</script>
<style lang='scss'>
.order-info-row {
  text-align: end !important;
  color: #222;
  font-weight: 700;
}
</style>
