<template>
    <div class="hidden md:block px-4">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-2">&nbsp;</div>
            <div class="col-span-8">
                <nav class='hidden md:flex relative h-full items-center justify-center'>
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
                                <a href='/track-order'>
                                    <p class='font-medium '>Order Tracking</p>
                                </a>
                            </span>
                        </li>
                        <li class="group text-mg-dark hover:text-mg-primary px-4 py-1">
                            <span>
                                <a href='/about-us'>
                                    <p class='font-medium '>Contact</p>
                                </a>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-span-2">
                <div class="relative h-full flex items-center">
                    <input v-model='keyword' type='text' placeholder='Search'
                        class='w-full border border-mg-dark outline-none text-sm py-2 pl-2 pr-10'
                        @keyup.enter='onSearch' />
                    <div class="absolute right-2 top-0 h-full flex items-center">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data: () => ({
        keyword: ''
    }),
    computed: {
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
        onSearch() {
            window.location.href = `/wholesale?keyword=${this.keyword}`
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
