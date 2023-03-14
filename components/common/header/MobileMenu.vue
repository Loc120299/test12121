<template>
    <div class="bg-black fixed top-0 left-0 bg-opacity-50 z-30 w-screen h-screen">
        <div class="bg-white fixed top-0 left-0 w-screen p-4">
            <div>
                <div class="flex justify-between">
                    <div class="md:hidden flex items-center">
                        <div class="flex items-center cursor-pointer" @click="$emit('close')">
                            <div class='flex flex-col'>
                                <div class='h-5 w-5 flex justify-center items-center cursor-pointer'>
                                    <span class='h-0.5 w-5 bg-black transform rotate-45 -mr-2'></span>
                                    <span class='h-0.5 w-5 bg-black transform -rotate-45 -ml-3'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:hidden flex-1 flex justify-center">
                        <a href="/">
                            <img :src='logo' alt='logo' class='lg:w-40 sm:w-32 w-28' />
                        </a>
                    </div>
                    <div class="md:w-full md:flex md:justify-end">
                        <div class="grid grid-cols-2 gap-1 sm:gap-4 md:gap-0 h-full">
                            <div class="col-span-1 flex md:hidden items-center cursor-pointer"
                                @click="$emit('showSearch')">
                                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                            </div>
                            <div class="col-span-1 flex items-center justify-end">
                                <CartSidebar />
                            </div>
                        </div>
                    </div>
                </div>
                <ul class='flex flex-col gap-y-8 mt-4'>
                    <li class="text-mg-dark hover:text-mg-primary px-4">
                        <span>
                            <a href='/'>
                                <p class='font-medium '>Home</p>
                            </a>
                        </span>
                    </li>
                    <li v-for='(item, index) in menu' :key='index'
                        class="text-mg-dark hover:text-mg-primary flex relative gap-1 group px-4">
                        <template v-if="item.subMenu && item.subMenu.length">
                            <div class="flex flex-col w-full">
                                <div class="flex justify-between w-full">
                                    <span class="block">
                                        <p class='font-medium '>{{ item.name }}</p>
                                    </span>
                                    <span v-if="activeSubMenus[index]" class="flex items-center cursor-pointer"
                                        @click="closeSubMenu(index)">
                                        <div class='h-5 w-5 flex justify-center items-center'>
                                            <span class='h-0.5 w-4 bg-black transform rotate-45 -mr-2'></span>
                                            <span class='h-0.5 w-4 bg-black transform -rotate-45 -ml-2'></span>
                                        </div>
                                    </span>
                                    <span v-else class="flex items-center cursor-pointer" @click="openSubMenu(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="12"
                                            height="12" shape-rendering="geometricPrecision"
                                            text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                                            fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 298.04"
                                            class="text-mg-dark group-hover:text-mg-primary fill-current">
                                            <path fill-rule="nonzero"
                                                d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z" />
                                        </svg>
                                    </span>
                                </div>
                                <div v-if="activeSubMenus[index]" class="w-full text-mg-dark text-sm mt-2">
                                    <ul>
                                        <li v-for='(subItem, idx) in item.subMenu' :key='idx' class="py-2">
                                            <span class="block">
                                                <a :href="`/wholesale?keyword=${subItem.tags}`">
                                                    {{ subItem.name }}
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <span>
                                <a :href='item.path'>
                                    <p class='font-medium '>{{ item.name }}</p>
                                </a>
                            </span>
                        </template>
                    </li>
                    <li class="text-mg-dark hover:text-mg-primary px-4">
                        <span>
                            <a href='/track-order'>
                                <p class='font-medium '>Order Tracking</p>
                            </a>
                        </span>
                    </li>
                    <li class="group text-mg-dark hover:text-mg-primary px-4">
                        <span>
                            <a href='/about-us'>
                                <p class='font-medium '>Contact</p>
                            </a>
                        </span>
                    </li>
                </ul>
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
        activeSubMenus: []
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
    mounted() {
        this.menu.forEach(element => {
            this.activeSubMenus.push(false)
        });
    },
    methods: {
        openSubMenu(index) {
            this.$set(this.activeSubMenus, index, true);
        },
        closeSubMenu(index) {
            this.$set(this.activeSubMenus, index, false);
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
