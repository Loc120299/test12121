<template>
    <nuxt-link :to="`/wholesale?tags=${category.tags}`">
        <div class="bg-mg-primary flex items-center content-center gap-3 rounded p-2">
            <div class="w-12 bg-white rounded">
                <img :src="category.image" :alt="category.name" class="w-full" />
            </div>
            <div>
                <p class="text-base xl:text-xl font-semibold leading-5 pr-3.5  text-white">
                    {{ category.name }}
                </p>
            </div>
        </div>
    </nuxt-link>
</template>
<script>
export default {
    name: 'MGCategory',
    props: {
        category: {
            type: Object,
            default: () => { },
        }
    },
}
</script>
<style lang="scss">

</style>