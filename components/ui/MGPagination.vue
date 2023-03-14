<template>
    <section>
        <div class="flex justify-between">
            <div class="m-3 flex items-center gap-6">
                <div v-if="numPage > 1" class="flex justify-center items-center gap-4 cursor-pointer"
                    :class="numPage === 1 ? 'pointer-events-none' : 'pointer-events-auto'">
                    <div class="flex justify-center items-center w-10 h-10 rounded-full"
                        :class="numPage === 1 ? 'bg-gray-500' : 'bg-white'" @click="$emit('changePage', 0)">
                        <font-awesome-icon :icon="['fas', 'angles-left']" />
                    </div>
                    <div class="flex justify-center items-center bg-white w-10 h-10 rounded-full"
                        :class="numPage === 1 ? 'bg-gray-500' : 'bg-white'" @click="$emit('changePage', -1)">
                        <font-awesome-icon :icon="['fas', 'chevron-left']" />
                    </div>
                </div>
                <div class="text-darkBlue">{{ numPage }} of {{ totalPages }}</div>
                <div v-if="numPage < totalPages" class="flex items-center gap-4 cursor-pointer"
                    :class="numPage === totalPages ? 'pointer-events-none' : 'pointer-events-auto'">
                    <div class="flex justify-center items-center  w-10 h-10 rounded-full"
                        :class="numPage === totalPages ? 'bg-gray-500' : 'bg-white'" @click="$emit('changePage', 1)">
                        <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    </div>
                    <div class="flex justify-center items-center w-10 h-10 rounded-full"
                        :class="numPage === totalPages ? 'bg-gray-500' : 'bg-white'"
                        @click="$emit('changePage', totalPages)">
                        <font-awesome-icon :icon="['fas', 'angles-right']" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        totalPages: {
            type: Number,
            default: () => 0
        },
        numPage: {
            type: Number,
            default: () => 0
        }
    },
}
</script>