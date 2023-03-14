<template>
    <section class='bg-white text-mg-dark'>
        <div class="py-12">
            <Container>
                <div class="grid grid-cols-12 gap-y-8 xl:gap-y-0 sm:gap-x-8">
                    <div class="col-span-12 xl:col-span-5 sm:mr-28">
                        <div class="flex flex-col">
                            <div class="max-w-max">
                                <nuxt-link to='/'>
                                    <img v-if='$store.state.store.logo' :src='$store.state.store.logo' alt='logo'
                                        class='w-60' />
                                    <img v-else src='@/assets/img/logo.svg' alt='logo' class='w-60' />
                                </nuxt-link>
                            </div>
                            <div class="mt-4">
                                <p>
                                    <b>{{$store.state.store.storeName}}</b> is the world's leading expert for procuring the trendiest items for
                                    everyone all in
                                    one
                                    place
                                    at everyday low prices.<br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-4 xl:col-span-3">
                        <p class='text-sm uppercase font-medium border-bottom mb-4'>Contact us</p>
                        <ul class='flex flex-col gap-2'>
                            <li>
                                <span class="block opacity-50 uppercase text-xs">Address:</span>
                                <span class="block opacity-75 max-w-max">{{ $store.state.store.address }}</span>
                            </li>
                            <li>
                                <span class="block opacity-50 uppercase text-xs">Working days / hours:</span>
                                <span class="block opacity-75 max-w-max">Mon - Sun / 9:00 AM - 5:00 PM</span>
                            </li>
                            <li>
                                <span class="block opacity-50 uppercase text-xs">Email:</span>
                                <span class="block opacity-75 hover:opacity-100 cursor-pointer max-w-max">
                                    <a :href="`mailto:${$store.state.store.email}`">{{ $store.state.store.email }}</a>
                                </span>
                            </li>
                            <li v-if="$store.state.store.phone != ''">
                                <span class="block opacity-50 uppercase text-xs">Phone:</span>
                                <span class="block opacity-75 hover:opacity-100 cursor-pointer max-w-max">
                                    <a :href="`tel:${$store.state.store.email}`">{{ $store.state.store.phone }}</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-span-12 md:col-span-4 xl:col-span-2">
                        <p class='text-sm uppercase font-medium border-bottom mb-4'>Our Company</p>
                        <ul class='flex flex-col gap-2'>
                            <li>
                                <nuxt-link to='/terms-of-service'
                                    class="text-sm opacity-75 hover:opacity-100 cursor-pointer">
                                    Terms of Service
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to='/privacy-policy'
                                    class="text-sm opacity-75 hover:opacity-100 cursor-pointer">Privacy
                                    Policy</nuxt-link>
                            </li>

                            <li>
                                <nuxt-link to='/shipping-policy'
                                    class="text-sm opacity-75 hover:opacity-100 cursor-pointer">
                                    Shipping Policy
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to='/returns-refunds'
                                    class="text-sm opacity-75 hover:opacity-100 cursor-pointer">
                                    Return And Refund Policy
                                </nuxt-link>
                            </li>

                            <li>
                                <nuxt-link to='/disclaimer-policy'
                                    class="text-sm opacity-75 hover:opacity-100 cursor-pointer">
                                    Disclaimer Policy
                                </nuxt-link>

                            </li>
                            <li>
                                <nuxt-link to='/billing-terms-and-conditions'
                                    class="text-sm opacity-75 hover:opacity-100 cursor-pointer">
                                    Billing and Term conditions
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-span-12 md:col-span-4 xl:col-span-2">
                        <p class='text-sm uppercase font-medium border-bottom mb-4'>Customer Support
                        </p>
                        <ul class='flex flex-col gap-2'>
                            <li>
                                <nuxt-link to='/about-us' class="text-sm opacity-75 hover:opacity-100 cursor-pointer">
                                    About Us
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to='/contact-us' class="text-sm opacity-75 hover:opacity-100 cursor-pointer">
                                    Contact Us
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to='/faq-s' class="text-sm opacity-75 hover:opacity-100 cursor-pointer">
                                    FAQ&#39;S
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to='/track-orders'
                                    class="text-sm opacity-75 hover:opacity-100 cursor-pointer">Order
                                    Tracking</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
        <div class="bg-white text-mg-dark flex items-center justify-between pt-3 pb-20 sm:pb-3">
            <Container>
                <div class="flex flex-col sm:flex-row">
                    <div class='text-sm flex items-center justify-center'>
                        &copy; {{ $store.state.store.storeName }}. All Rights Reserved
                    </div>
                    <div class='flex-1 flex gap-2 justify-center sm:justify-end mt-4 sm:mt-0'>
                        <img src='@/assets/img/american-express.svg' alt='payment' class='w-8 sm:w-12' />
                        <img src='@/assets/img/mastercard.svg' alt='payment' class='w-8 sm:w-12' />
                        <img src='@/assets/img/visa.svg' alt='payment' class='w-8 sm:w-12' />
                        <img src='@/assets/img/paypal.svg' alt='payment' class='w-8 sm:w-12' />
                    </div>
                </div>
            </Container>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>

</style>
