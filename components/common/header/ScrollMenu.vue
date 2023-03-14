<template>
    <div class="fixed top-0 bg-white hidden md:block p-4 z-10 w-full border-b-2 border-mg-gray">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-2">
                <div>
                    <a href="/">
                        <img :src='logo' alt='logo' class='lg:w-40 sm:w-32 w-28' />
                    </a>
                </div>
            </div>
            <div class="col-span-8">
                <nav class='flex relative h-full items-center justify-center'>
                    <ul class='flex flex-wrap items-center justify-center'>
                        <li class="text-mg-dark hover:text-mg-primary px-4 py-1">
                            <span>
                                <a href='/'>
                                    <p class='font-medium '>Home</p>
                                </a>
                            </span>
                        </li>
                        <li v-for='(item, index) in menu' :key='index'
                            class="text-mg-dark hover:text-mg-primary group flex relative gap-1 px-4 py-1">
                            <span class="block">
                                <a :href='item.path'>
                                    <p class='font-medium '>{{ item.name }}</p>
                                </a>
                            </span>
                            <span v-if="item.subMenu && item.subMenu.length" class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="12" height="12"
                                    shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                    viewBox="0 0 512 298.04"
                                    class="text-mg-dark group-hover:text-mg-primary fill-current">
                                    <path fill-rule="nonzero"
                                        d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z" />
                                </svg>
                            </span>
                            <div
                                class="absolute top-8 left-0 hidden group-hover:block text-mg-dark text-sm shadow-md bg-white z-10">
                                <ul>
                                    <li v-for='(subItem, idx) in item.subMenu' :key='idx' class="px-8 py-2 w-40">
                                        <span class="block">
                                            <a :href="`/wholesale?keyword=${subItem.tags}`">
                                                {{ subItem.name }}
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="text-mg-dark hover:text-mg-primary px-4 py-1">
                            <span>
                                <nuxt-link to='/track-order'>
                                    <p class='font-medium '>Order Tracking</p>
                                </nuxt-link>
                            </span>
                        </li>
                        <li class="group text-mg-dark hover:text-mg-primary px-4 py-1">
                            <span>
                                <nuxt-link to='/about-us'>
                                    <p class='font-medium '>Contact</p>
                                </nuxt-link>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-span-2">
                <div class="flex gap-4 h-full justify-end items-center">
                    <div class="flex items-center cursor-pointer">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </div>
                    <div class="flex items-center justify-end">
                        <CartSidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CartSidebar from './CartSidebar.vue'
export default {
    components: {
        CartSidebar,
    },
    data: () => ({
    }),
    computed: {
        logo() {
            return this.$store.state.store.logo ? this.$store.state.store.logo : require("@/assets/img/logo.svg");
        },
        menu() {
            const menus = []
            this.$store.state.store.menus.forEach(item => {
                if (item.name.toLowerCase() === 'shipping & delivery') {
                    const m = {
                        name: item.name,
                        path: '/shipping-policy'
                    }
                    menus.push(m)
                } else if (item.name.toLowerCase() === 'privacy policy') {
                    const m = {
                        name: item.name,
                        path: '/privacy-policy'
                    }
                    menus.push(m)
                } else if (item.name.toLowerCase() === 'refund & exchange') {
                    const m = {
                        name: item.name,
                        path: '/return-policy'
                    }
                    menus.push(m)
                } else if (item.name.toLowerCase() === 'payment policy') {
                    const m = {
                        name: item.name,
                        path: '/payment-policy',
                    }
                    menus.push(m)
                } else {
                    const m = {
                        name: item.name,
                        path: `/wholesale?keyword=${item.tags}`,
                        subMenu: item.subMenu
                    }
                    menus.push(m)
                }
            })
            return menus;
        }
    },
    methods: {
    }
}
</script>

<style lang='scss' scoped>

</style>
