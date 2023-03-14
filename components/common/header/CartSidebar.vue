<template>
    <div>
        <div class='drawer drawer-end z-30'>
            <input id='cart-drawer' v-model="isDrawerOpen" type='checkbox' class='border-none drawer-toggle'
                @input="toggleDrawer" />
            <div class='flex flex-col items-start justify-center drawer-content shadow-none'>
                <label for='cart-drawer' class='z-20 overflow-hidden'>
                    <div class='relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2"
                            stroke="currentColor" class="w-5 h-5 sm:h-7  mr-3 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        <span
                            class='absolute top-0 right-0 text-2xl leading-none rounded-lg px-1 py-0.5 text-center numCart'
                            style='font-size: 12px'>
                            {{
                                    $store.getters['cart/cartSize']
                            }}
                        </span>
                    </div>

                </label>
            </div>
            <div class='drawer-side bg-white p-4 shadow-none'>
                <label for='cart-drawer' class='fixed top-0 left-0 h-full w-full drawer-overlay z-10'></label>
                <div class='bg-white fixed top-0 right-0 h-full w-80 overflow-y-scroll scrollbar-none p-4'>
                    <div class='flex justify-between items-center border-b pb-2'>
                        <h2 class='uppercase font-semibold text-dark-purple'>Shopping Cart</h2>
                        <label for='cart-drawer' class='cursor-pointer'>
                            <div class='uppercase flex items-center gap-2 text-gray-400 text-xs cursor-pointer'>
                                Close
                                <div class='flex justify-center items-center'>
                                    <span class='bg-gray-400 h-px w-3 -mr-px'></span>
                                    <div class='flex justify-center items-center transform -rotate-90 -ml-1.5'>
                                        <p class='bg-gray-400 h-px w-1.5 transform rotate-45 -mr-px'></p>
                                        <p class='bg-gray-400 h-px w-1.5 transform -rotate-45 -ml-px'></p>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div v-for="item in $store.getters['cart/getProductsCart']" :key='item.id'
                        class='flex items-center gap-2 py-3 border-b'>
                        <div class='avatar'>
                            <div class='w-24 rounded'>
                                <img :src='item.image' />
                            </div>
                        </div>
                        <div class='w-3/4'>
                            <div class='flex justify-between'>
                                <h2 class='font-medium text-sm'>
                                    {{ item.title }}
                                </h2>
                                <div class='h-5 w-5 rounded-full border-2 flex-shrink-0 flex justify-center items-center cursor-pointer mt-2'
                                    @click="
                                        $store.commit('cart/removeCartItem', {
                                            id: item.id,
                                        })
                                    ">
                                    <span class='h-0.5 w-2.5 bg-black transform rotate-45 -mr-1'></span>
                                    <span class='h-0.5 w-2.5 bg-black transform -rotate-45 -ml-1.5'></span>
                                </div>
                            </div>
                            <div class='my-2.5'>
                                <span class='text-xs text-gray-400'
                                    v-html='$options.filters.skuDisplay(item.properties)'>
                                </span>

                            </div>
                            <div class='text-gray-400 text-sm'>
                                {{ item.quantity }} X
                                <span class='font-medium text-gray-600'>
                                    ${{ item.price | number('0,0.00') }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class='py-3 flex justify-between text-sm border-b px-1'>
                        <div>Subtotal:</div>
                        <div>${{
                                $store.getters['cart/subTotal'] | number('0,0.00')
                        }}
                        </div>
                    </div>
                    <div class='flex flex-col items-center gap-3'>
                        <a href='/cart' class='border-b-2 border-blue-700 pb-px w-max mx-auto text-sm mt-4'>View
                            Cart</a>
                        <button
                            class='btn-active btn-md uppercase text-sm text-white font-normal rounded w-full bg-dark-purple'
                            @click='onNavCheckout'>
                            Go to checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    data: () => ({
        isDrawerOpen: false,
    }),
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
        },
        toggleDrawer($event) {
            this.$emit('toggleDrawer', this.isDrawerOpen)
        },
    }
}
</script>