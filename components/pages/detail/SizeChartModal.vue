<template>
    <div>
        <div class="fixed top-0 left-0 h-full w-screen overflow-y-scroll flex justify-center items-center z-20">
            <div class="fixed top-0 left-0 h-full w-screen bg-gray-700 bg-opacity-60 cursor-pointer"
                @click="$emit('close')" />
            <div class="height-width popup-animation relative w-full bg-white rounded-xl px-6 py-4 overflow-y-scroll">
                <div class="absolute top-1 right-0 bg-gray-300 pb-0.5 px-2 rounded-md text-black cursor-pointer"
                    @click="$emit('close')">x</div>
                <img src="@/assets/img/pages/product_detail/size-chart-1.png" alt="size-chart" />
                <img src="@/assets/img/pages/product_detail/size-chart-2.png" alt="size-chart" />
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.height-width {
    height: 70%;
    max-width: 34rem;
}
</style>