<template>
  <div
    v-if="isLoaded"
    :class="!isSearching && 'product_effect rounded'"
    class="group transition-all duration-300 ease-linear cursor-pointer mx-1 overflow-hidden"
  >
    <a v-if="product.title" :href="product | alias">
      <div class="relative overflow-hidden">
        <v-lazy-image id="product-image" :src="product.imageUrl" :src-placeholder="require('@/assets/img/gray-bg.png')" alt="Product" />
        <!-- discount tag -->
        <div
          v-if="product.discount && !isSearching"
          class="absolute top-2 right-2 rounded-full md:h-12 h-10 md:w-12 w-10 bg-orange text-white flex justify-center items-center"
        >
        <span class="w-min text-right md:text-sm text-xs md:leading-4 leading-3">
          {{ parseInt(product.discount) }}% OFF</span
        >
        </div>
        <!-- hot deal tag -->
<!--        <div-->
<!--          v-if="isTrending"-->
<!--          class="absolute top-2 left-2 transform -translate-x-2 md:-translate-y-8 -translate-y-7"-->
<!--        >-->
<!--          <img-->
<!--            src="@/assets/img/hot-icon.png"-->
<!--            alt="hot deal"-->
<!--            class="md:w-24 w-20"-->
<!--          />-->
<!--        </div>-->
      </div>
      <div class="p-2">
        <div class="flex w-full h-5 overflow-hidden">
          <h2
            :class="isSearching && 'group-hover:text-error'"
            class="text-sm font-medium text-dark-purple transition-all duration-300 ease-linear product-title"
          >
            {{ product.title }}
          </h2>
          <span :class="isSearching && 'group-hover:text-error'" class="mr-1"
          >...</span
          >
        </div>
        <div
          v-if="product.discount"
          :class="isSearching ? 'mt-px' : 'mt-3'"
          class="flex items-center"
        >
          <p class="text-maroon">$ {{ product.discount }}</p>
          <span class="line-through font-light text-sm ml-3"
          >$ {{ price | number('0,0.00') }}</span
          >
        </div>
        <p v-else :class="isSearching ? 'mt-px' : 'mt-3'" class="text-maroon product-price">
          $ {{ price | number('0,0.00') }}
        </p>
      </div>
    </a>
  </div>


</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {
      },
    },
    isSearching: {
      type: Boolean,
      default: false,
    },
    isTrending: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isLoaded: false
  }),
  computed: {
    price() {
      if (this.$store.state.store.storeDiscount) {
        return this.product.price + this.$store.state.store.storeDiscount;
      }
      return this.product.price;
    }
  },
  mounted() {
    this.isLoaded = true
    console.log(this.product)
  }
}
</script>

<style lang="scss" scoped>
.product_effect {
  img#product-image {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    box-shadow: 0 0 1px 3px #aa97d6;

    img#product-image {
      transform: scale(1.5);
    }
  }
}

img#product-image {
  min-height: 242px !important;
}

@media screen and (max-width: 640px) {
  img#product-image {
    max-height: 200px !important;
  }
}


</style>
