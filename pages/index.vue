<template>
  <main class="bg-white pb-8 md:mt-4">
    <Container>
      <section class='mb-4 sm:mb-8'>
        <div class="flex mx-auto">
          <div class="w-full border border-mg-gray shadow-sm">
            <img :src="bgBanner" alt="banner">
          </div>
        </div>
      </section>
      <section class="my-8">
        <p class='text-mg-dark text-xl font-semibold text-center uppercase mb-4'>
          Our Categories
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for='(category, index) in categories' :key='index'>
            <MGCategory :category="category" />
          </div>
        </div>
      </section>
      <section class="my-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            class="bg-bestSellerPoster bg-blend-darken col-span-1 flex flex-col pt-32 gap-4 items-center bg-cover bg-no-repeat bg-center h-96 my-3">
            <div>
              <p class="text-5xl font-bold text-mg-white">
                Best Sellers
              </p>
            </div>
            <div>
              <nuxt-link to="/" class="text-mg-dark bg-mg-white py-2 px-4 rounded font-bold">
                Explore Now
              </nuxt-link>
            </div>
          </div>
          <div
            class="bg-bestSellerPoster bg-blend-darken col-span-1 flex flex-col pt-32 gap-4 items-center bg-cover bg-no-repeat bg-center h-96 my-3">
            <div>
              <p class="text-5xl font-bold text-mg-white">
                New Arrivals
              </p>
            </div>
            <div>
              <nuxt-link to="/" class="text-mg-dark bg-mg-white py-2 px-3 rounded font-bold">
                Explore Now
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section class="my-4 sm:my-8">
        <div class="px-6 py-4">
          <nuxt-link to="/">
            <h2 class="text-lg font-medium text-center">
              Featured Products
            </h2>
          </nuxt-link>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div v-for="(product, idx) in featuredProducts" :key="idx">
            <MGProductBox :product="product" />
          </div>
        </div>
      </section>
      <section class="my-4 sm:my-8">
        <div class="px-6 py-4">
          <nuxt-link to="/">
            <h2 class="text-lg font-medium text-center">
              New Arrival
            </h2>
          </nuxt-link>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div v-for="(product, idx) in newArrivals" :key="idx">
            <MGProductBox :product="product" />
          </div>
        </div>
      </section>
      <section class="mt-4 sm:mt-8">
        <div class="px-6 py-4">
          <nuxt-link to="/">
            <h2 class="text-lg font-medium text-center">
              Trending Products
            </h2>
          </nuxt-link>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div v-for="(product, idx) in trendingProducts" :key="idx">
            <MGProductBox :product="product" />
          </div>
        </div>
      </section>
    </Container>
  </main>
</template>

<script>
import MGCategory from "@/components/pages/home/MGCategory";
import MGProductBox from '@/components/pages/home/MGProductBox.vue';
import { metaNameCustom, metaContentCustom } from '@/common/AppUtils.js'

export default {
  components: {
    MGCategory,
    MGProductBox
  },
  async asyncData({ $axios, $productApi, $cacheFetch, req, error }) {
    try {
      let host = req.headers.host;

      if (host.startsWith('www.')) {
        host = host.substring(4, host.length);
      }
      const { data : trendingProducts}  = await $productApi.get(`/v3/get-product-home-page/isTrendingProduct/${host}`)
      const { data : newArrivals} = await $productApi.get(`/v3/get-product-home-page/isNewArrivals/${host}`);
      const {data : featuredProducts} = await $productApi.get(`/v3/get-product-home-page/isFeaturedProducts/${host}`);
      return {
        trendingProducts,
        newArrivals,
        featuredProducts
      }
    } catch (err) {
      console.error('index', err)
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  data: () => ({
  }),
  head() {
    return {
      title: this.$store.state.store.storeName,
      meta: [
        {
          hid: 'msvalidate.01',
          name: 'msvalidate.01',
          content: this.$store.state.store.bingSiteVerification
        },
        {
          hid: 'google-site-verification',
          name: 'google-site-verification',
          content: this.$store.state.store.googleSiteVerification
        },
        {
          hid: 'custom-tag',
          name: metaNameCustom(this.$store.state.store.customMeta),
          content: metaContentCustom(this.$store.state.store.customMeta)
        }
      ]
    }
  },
  computed: {
    categories() {
      return this.$store.getters['store/getCategories']
    },
    bgBanner() {
      return this.$store.state.store.banner;
    }
  },
}
</script>

<style lang='scss' scoped>

</style>
