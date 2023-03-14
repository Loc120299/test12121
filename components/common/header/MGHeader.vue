<template>
    <div>
      <div
        v-if="$store.state.store.topBarText"
        class="top-sale md:block hidden bg-primary text-center text-sm p-2 text-orange topBarNotify"
      >
        {{ $store.state.store.topBarText }}
      </div>
      <div
        v-if="$store.state.store.topBarText"
        class="top-sale md:hidden block bg-white text-orange text-center text-sm overflow-x-scroll scrollbar-none py-2 px-3 topBarNotify"
      >
        {{ $store.state.store.topBarText }}
      </div>
        <div class="px-4 py-2 md:py-0">
            <div class="flex justify-between">
                <div class="md:hidden flex items-center">
                    <div class="flex items-center cursor-pointer" @click="showMobileMenu = true">
                        <div class='flex flex-col gap-1.5 mr-2'>
                            <span class='h-0.5 w-6 bg-mg-dark'></span>
                            <span class='h-0.5 w-6 bg-mg-dark'></span>
                            <span class='h-0.5 w-6 bg-mg-dark'></span>
                        </div>
                        <div>
                            <span class="text-sm">Menu</span>
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
                            @click="showFullSearchbar = true">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </div>
                        <div class="col-span-1 hidden md:flex items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                            <div class="ml-1">
                                <p class="text-sm">Login</p>
                            </div>
                        </div>
                        <div class="col-span-1 flex items-center justify-end">
                            <CartSidebar @toggleDrawer="toggleDrawer" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden md:flex justify-center items-end">
                <a href="/">
                    <img :src='logo' alt='logo' class='lg:w-40 sm:w-32 w-28' />
                </a>
            </div>
        </div>
        <DesktopMenu />
        <FullSearchbar v-if="showFullSearchbar" @close="showFullSearchbar = false" />
        <MobileMenu v-if="showMobileMenu" @close="showMobileMenu = false" @showSearch="showSearch" />
        <ScrollMenu v-if="scrollpx > 200" />
    </div>
</template>

<script>
import CartSidebar from './CartSidebar.vue'
import DesktopMenu from './DesktopMenu.vue'
import FullSearchbar from './FullSearchbar.vue'
import MobileMenu from './MobileMenu.vue'
import ScrollMenu from './ScrollMenu.vue'
export default {
    components: {
        CartSidebar,
        DesktopMenu,
        FullSearchbar,
        MobileMenu,
        ScrollMenu
    },
    data: () => ({
        keyword: '',
        showFullSearchbar: false,
        showMobileMenu: false,
        scrollpx: 0
    }),
    computed: {
        logo() {
            return this.$store.state.store.logo ? this.$store.state.store.logo : require("@/assets/img/logo.svg");
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        onSearch() {
            window.location.href = `/wholesale?keyword=${this.keyword}`
        },
        showSearch() {
            this.showMobileMenu = false;
            this.showFullSearchbar = true;
        },
        toggleDrawer(isDrawerOpened) {
            if (!isDrawerOpened) {
                this.showMobileMenu = false;
            }
        },
        handleScroll(event) {
            this.scrollpx = window.scrollY;
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
