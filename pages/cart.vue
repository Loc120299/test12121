<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col md:flex-row py-5'>
        <div class='w-full md:w-2/3 m-1'>
          <div class='overflow-x-auto w-full'>
            <table class='table  border rounded w-full'>
              <!-- head -->
              <thead>
              <tr>
                <th></th>
                <th class='text-center'>product</th>
                <th class='text-center'>price</th>
                <th class='text-center'>Quantity</th>
                <th class='text-center'>subtotal</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <!-- row 1 -->
              <tr
                v-for="item in $store.getters['cart/getProductsCart']"
                :key='item.id'
              >
                <th></th>
                <td>
                  <div class='flex items-center space-x-3'>
                    <div class='avatar'>
                      <div class='rounded w-24'>
                        <img :src='item.image' />
                      </div>
                    </div>
                    <div class='overflow-hidden'>
                      <p class='font-bold truncate w-96'>{{ item.title }}</p>
                      <span class='text-xs text-gray-400' v-html='$options.filters.skuDisplay(item.properties)'>
                          </span>
                    </div>
                  </div>
                </td>
                <td>
                    <span class='badge badge-ghost badge-sm'>
                      ${{ item.price | number('0,0.00') }}
                    </span>
                </td>
                <td>
                  <div class='flex items-center'>
                    <button
                      class='border border-gray-100 rounded-full w-8 h-8 flex justify-center items-center'
                      @click="
                          $store.commit('cart/quantityMinus', {
                            id: item.id,
                          })
                        "
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </button>
                    <div class='mx-3'>{{ item.quantity }}</div>
                    <button
                      class='border border-gray-100 rounded-full w-8 h-8 flex justify-center items-center'
                      @click="
                          $store.commit('cart/quantityPlus', {
                            id: item.id,
                          })
                        "
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M12 4v16m8-8H4'
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td>
                  <button class='btn btn-ghost btn-xs'>
                    ${{ (item.price * item.quantity) | number('0,0.00') }}
                  </button>
                </td>
                <td>
                  <div
                    @click="
                            $store.commit('cart/removeCartItem', {
                              id: item.id,
                            })
                          "
                    class='h-5 w-5 rounded-full border-2 flex-shrink-0 flex justify-center items-center cursor-pointer mt-2'
                  >
                            <span
                              class='h-0.5 w-2.5 bg-black transform rotate-45 -mr-1'
                            ></span>
                    <span
                      class='h-0.5 w-2.5 bg-black transform -rotate-45 -ml-1.5'
                    ></span>
                  </div>
                </td>

              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class='w-full md:w-1/3 m-1'>
          <div class='border border-gray-200 rounded-t p-3 font-bold'>
            CART TOTALS
          </div>
          <div class='flex flex-row justify-between border border-gray-200 p-3'>
            <div>Subtotal</div>
            <div>${{ $store.getters['cart/subTotal'] | number('0,0.00') }}</div>
          </div>
          <div class='flex flex-row justify-between border border-gray-200 p-3'>
            <div>Total</div>
            <div>${{ $store.getters['cart/subTotal'] | number('0,0.00') }}</div>
          </div>
          <div class='flex flex-col border border-gray-200 rounded-b p-3'>
            <p>Calculate Shipping</p>
            <label class='label cursor-pointer'>
              <input
                type='radio'
                name='radio-6'
                class='radio checked:bg-blue-500'
                checked
              />
              <span class='label-text'>Calculated at next step</span>
            </label>
          </div>
          <div class='mt-3'>
            <button
              @click='onNavCheckout'
              class='btn-active btn-md uppercase text-sm text-white font-normal rounded w-full bg-dark-purple'
            >
              Go to checkout
            </button>
          </div>
        </div>
      </Container>
    </main>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  head() {
    return {
      title: "Cart"
    }
  },
  methods: {
    onNavCheckout() {
      if (this.$device.isMobile && this.$store.state.store.isCustomPayment) {
        const productRequest = this.$store.getters['cart/getCarts']
        if (productRequest.length === 0) {
          return
        }
        this.$nuxt.$loading.start()
        this.$axios.$post('/products/cart-store/save', {
          'products': productRequest
        }).then(resp => {
          this.$nuxt.$loading.finish()
          if (resp && resp.id && resp.id.length > 0) {
            window.location.href = `https://${this.$store.state.store.customPaymentDomain}/init-checkout?id=${resp.id}&test_id=layout`
          }
        }).catch(() => {
          this.$nuxt.$loading.finish()
        })
      } else {
        this.$nuxt.$loading.finish()
        window.location.href = '/checkout'
      }
    }
  }
}
</script>

<style scoped></style>
