<template>
    <div class="bg-black fixed top-0 left-0 bg-opacity-50 z-30 w-screen h-screen">
        <div class="bg-white fixed top-0 left-0 w-screen h-2/3 p-4">
            <div class="relative flex items-start">
                <div class="absolute left-2 top-0 h-full flex items-center">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </div>
                <input type='text' placeholder='Search'
                    class='w-full border-b border-mg-gray outline-none text-sm py-2 px-10' />
                <div class="absolute right-2 top-0 h-full flex items-center cursor-pointer" @click="$emit('close')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)" />
                        <path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>