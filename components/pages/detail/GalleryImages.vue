<template>
  <div>
    <div v-if="images.length > 0" class="flex flex-col-reverse">
      <div class="w-full md:w-3/5 md:pr-3 pt-3 md:pt-0">
        <VueSlickCarousel v-if="isLoaded" ref="refSlider" v-bind="leftOptions" :as-nav-for="$refs.mainImage"
          :style="{ 'max-height': '560px' }">
          <div v-for="(item, idx) in images" :key="idx" class="py-0.5 md:my-0.5 px-1" :class="getClassSlider(item)"
            @click="onChangeIndexSlider(idx)">
            <v-lazy-image :src="item.src" :src-placeholder="require('@/assets/img/gray-bg.png')" alt=""
              class="pointer-events-none h-24" />
          </div>
        </VueSlickCarousel>
        <div v-else class="grid grid-cols-4 md:grid-rows-4 md:grid-flow-col gap-4">
          <div v-for='i in 4' :key='i' class='main-image w-24 h-24 md:w-36 md:h-36 bg-gray-100 rounded'></div>
        </div>
      </div>
      <div class="w-full md:w-4/5 relative">
        <VueSlickCarousel v-if="isLoaded" ref="mainImage" v-bind="productsOptions" :style="{ 'max-height': '560px' }"
          @beforeChange="onChangeMainImage">
          <div v-for="(item, idx) in images" :key="idx" class="mt-1 cursor-pointer">
            <v-lazy-image :src="item.src" :src-placeholder="require('@/assets/img/gray-bg.png')" alt=""
              class="pointer-events-none object-contain w-full" :style="{ 'max-height': '560px' }" />
          </div>
        </VueSlickCarousel>
        <div v-else class="main-image w-full h-96 md:h-full bg-gray-100 rounded"></div>
        <button
          class="absolute border flex justify-center items-center top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md -mt-4"
          @click="$refs.mainImage.next()">
          <div class="flex transform -rotate-90">
            <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
            <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
          </div>
        </button>
        <button
          class="absolute border flex justify-center items-center top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 shadow-md rounded-full bg-white -mt-4"
          @click="$refs.mainImage.prev()">
          <div class="flex transform rotate-90">
            <span class="h-px w-2.5 bg-black transform rotate-45 -mr-px"></span>
            <span class="h-px w-2.5 bg-black transform -rotate-45 -ml-0.5"></span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryImages',
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    initIndex: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    index: 0,
    isLoaded: true,
    productsOptions: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      rows: 1,
      infinite: false,
      swipe: false,
    },
    leftOptions: {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      rows: 1,
      verticalSwiping: true,
      infinite: false,
      swipe: false,
      vertical: false,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            vertical: false,
            arrows: false,
            verticalSwiping: false,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            vertical: false,
            arrows: false,
            verticalSwiping: true,
          },
        },
      ],
    },
  }),
  computed: {
    activeImage() {
      return this.images[this.index]
    },
  },
  watch: {
    initIndex(newIndex) {
      this.index = newIndex
    },
    index(newIndex) {
      this.$refs.mainImage.goTo(newIndex)
      this.$refs.refSlider.goTo(newIndex)
    },
  },
  mounted() {
    this.isLoaded = true
  },
  methods: {
    onChangeMainImage(oldIndex, newIndex) {
      if (newIndex >= 0 && newIndex < this.images.length) {
        this.index = newIndex
        this.$emit('onIndex', this.index)
      }
    },
    onChangeIndexSlider(index) {
      if (index >= 0 && index < this.images.length) {
        this.index = index
        this.$emit('onIndex', this.index)
      }
    },
    getClassSlider(item) {
      if (item && item.src && item.src === this.activeImage.src) {
        return 'mt-1 border-2 border-blue-light product-detail-border-slider'
      }
      return 'mt-1'
    },
  },
}
</script>

<style lang="scss" scoped>
.main-image {
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30%;
    background: linear-gradient(to right, #f3f4f6, rgb(250, 253, 255), #f3f4f6);
    animation: gradient 0.9s infinite;
  }
}

@keyframes gradient {
  0% {
    transform: translateX(-20%);
  }

  100% {
    transform: translateX(330%);
  }
}
</style>
