<template>
  <main>
    <Container>
      <div class="flex flex-col md:flex-row rounded px-2 pt-2">
        <div class="w-full md:w-3/5">
          <GalleryImages :images="galleryImages" :init-index="indexImage" @onIndex="indexImage = $event"/>
        </div>
        <div class="w-full md:w-2/5 xl:-ml-28 lg:-ml-20" itemprop="offers" itemscope
             itemtype="https://schema.org/Offer">
          <meta itemprop="name" :content="productDetail.title"/>
          <meta itemprop="url" :content="seoUrl"/>
          <meta itemprop="priceCurrency" content="USD"/>
          <meta itemprop="availability" itemtype="https://schema.org/ItemAvailability"
                content="https://schema.org/InStock"/>
          <h1 class="text-dark-purple text-2xl font-medium product-detail-title">{{ productDetail.title }}</h1>
          <div class="my-2">
            <span itemprop="price" class="text-3xl font-medium product-detail-price">${{
                price | number('0,0.00')
              }}</span>
          </div>
          <div class="flex items-center gap-2 mt-3 mb-6">
            <div class="flex items-center">
              <svg aria-hidden="true" class="w-5 h-5 text-dark-purple" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-dark-purple" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-dark-purple" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-dark-purple" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="w-5 h-5 text-dark-purple" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>

            </div>
            <p class="text-gray-600">69 reviews</p>
          </div>
          <SkuShopify v-if="!isRenderMockup" class="mb-3" :options="productDetail.options"
                      :variants="productDetail.variants" :select-variant="variantSelect"
                      @onChangeVariant="onChangeVariant"/>
          <SkuMockup v-else :styles="stylesData" :json-data="productDetail.json_data" :init-data="{
            selectPrint: selectPrint,
            selectStyle: selectStyle,
            selectSize: selectSize,
            selectColor: selectColor,
          }" @onChangeStyle="onChangeStyle" @onSelectPrint="onSelectPrint" @onSelectColor="onSelectColor"
                     @onSelectSize="onSelectSize"/>
          <div v-if="isShowCustomProduct" class="my-2">
            <span>Custom Text <i class="text-sm">(Optional)</i>: {{ customText }}
            </span>
            <input v-model="customText" type="text" name="customText" placeholder="Custom Text"
                   class="input w-full rounded-none"/>
          </div>
          <div v-if="isShowCustomProduct" class="my-2">
            <span>Custom Image <i class="text-sm">(Optional: png, jpg, gif)</i>:
              <a v-if="customImage" :href="customImage" target="_blank"
                 class="uppercase underline ml-3 font-bold text-sm text-green-400">View Image</a>
            </span>
            <input id="fileCustomImage" accept="image/*"
                   class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                   type="file" @change="onChangeCustomImage"/>
          </div>
          <div class='relative flex items-center justify-between gap-1 mt-5'>
            <div>
              <p class="text-sm absolute top-1 left-2 text-gray-400">Qty</p>
            </div>
            <div>
              <select class="border pl-8 pr-5 pb-4 pt-5 shadow-sm outline-none" @change="onChange($event)">
                <option v-for="n in 50" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="w-10/12">
              <button
                class="text-white justify-center bg-mg-secondary rounded w-full  py-4 text-xl font-semibold tracking-wider flex flex-row hover:bg-opacity-70 addToCartBtn"
                @click="onAddToCart">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>
<!--          <div class="flex mt-12 ml-2 text-purple-900 hover:text-purple-700 cursor-pointer">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"-->
<!--                 stroke="currentColor" class="w-5 h-5">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round"-->
<!--                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>-->
<!--            </svg>-->
<!--            <p class="font-medium ml-1">ADD TO WISHLIST(0)</p>-->
<!--          </div>-->

          <div class='border-t mt-3 py-3'>
            <span v-if="$store.state.store.customFeatureProduct" v-html='$store.state.store.customFeatureProduct'></span>
            <img v-else class='object-fill w-full' src='@/assets/img/product_detail_feature.svg'>

          </div>

        </div>
      </div>
      <section class="my-8">
        <div class="mt-8">
          <div>
            <div class="pb-2 my-2 flex items-center justify-between cursor-pointer" @click="sizeChart = !sizeChart">
              <p class="font-bold text-lg uppercase underline">Size Chart</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5"
                   stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
              </svg>
            </div>
            <div v-if="sizeChart" class="transition-all border-t-2 border-black leading-relaxed">
              <div class="flex flex-col gap-4 my-4">
                <SizeGuide/>
              </div>
            </div>
          </div>
          <div>
            <div class="pb-2 flex items-center justify-between cursor-pointer" @click="description = !description">
              <p class="font-bold text-lg uppercase underline">Description</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5"
                   stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
              </svg>
            </div>
            <div v-if="description" class="transition-all border-t-2 border-black leading-relaxed">
              <Features
                :html-body="productDetail.body_html"
                :product-id="productDetail.productId"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="my-8">
        <div :class="isWriteReview ? 'border-b pb-4' : ''">
          <h2 class="text-2xl text-center font-medium mb-6 tracking-wider">Customer Reviews</h2>
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <div class="lg:ml-20">
              <div class="flex">
                <div class="flex items-center">
                  <client-only>
                    <star-rating :rating="5" :star-size="16" read-only :show-rating="false"
                                 active-color="#303086"></star-rating>
                  </client-only>
                </div>
                <a class="text-dark-purple underline hover:no-underline cursor-pointer ml-1">4.8 out of 5</a>
              </div>
              <p>Based on 69 reviews</p>
            </div>
            <div class="flex flex-col gap-y-1 lg:px-20 lg:border-r-2 lg:border-l-2 lg:h-32 my-5 lg:my-0 lg:mt-2"
                 style="width: 37%;">
              <div class="flex items-center gap-5">
                <div class="flex items-center">
                  <client-only>
                    <star-rating :rating="5" :star-size="16" :padding="4" read-only :show-rating="false"
                                 active-color="#303086"></star-rating>
                  </client-only>
                </div>
                <div class="w-full bg-gray-200 h-3.5 dark:bg-gray-700">
                  <div class="bg-dark-purple h-3.5  dark:bg-blue-500" style="width: 90%"></div>
                </div>
                <div>
                  <p class="text-sm text-gray-500">62</p>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <div class="flex items-center">
                  <client-only>
                    <star-rating :rating="4" :star-size="16" :padding="4" read-only :show-rating="false"
                                 active-color="#303086"></star-rating>
                  </client-only>
                </div>
                <div class="w-full bg-gray-200 h-3.5 dark:bg-gray-700">
                  <div class="bg-dark-purple h-3.5  dark:bg-blue-500" style="width: 10%"></div>
                </div>
                <div>
                  <p class="text-sm text-gray-500">6</p>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <div class="flex items-center">
                  <client-only>
                    <star-rating :rating="3" :star-size="16" :padding="4" read-only :show-rating="false"
                                 active-color="#303086"></star-rating>
                  </client-only>
                </div>
                <div class="w-full bg-gray-200 h-3.5 dark:bg-gray-700">
                  <div class="bg-dark-purple h-3.5  dark:bg-blue-500" style="width: 2%"></div>
                </div>
                <div>
                  <p class="text-sm text-gray-500">1</p>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <div class="flex items-center">
                  <client-only>
                    <star-rating :rating="2" :star-size="16" :padding="4" read-only :show-rating="false"
                                 active-color="#303086"></star-rating>
                  </client-only>
                </div>
                <div class="w-full bg-gray-200 h-3.5 dark:bg-gray-700">
                  <div class="bg-dark-purple h-3.5  dark:bg-blue-500" style="width: 0%"></div>
                </div>
                <div>
                  <p class="text-sm text-gray-500">0</p>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <div class="flex items-center">
                  <client-only>
                    <star-rating :rating="1" :star-size="16" :padding="4" read-only :show-rating="false"
                                 active-color="#303086"></star-rating>
                  </client-only>
                </div>
                <div class="w-full bg-gray-200 h-3.5 dark:bg-gray-700">
                  <div class="bg-dark-purple h-3.5  dark:bg-blue-500" style="width: 0%"></div>
                </div>
                <div>
                  <p class="text-sm text-gray-500">0</p>
                </div>
              </div>
            </div>
            <div class="flex justify-start">
              <button class="bg-dark-purple py-2 px-16 font-semibold text-white lg:mr-20"
                      @click="isWriteReview = !isWriteReview">
                {{ isWriteReview ? "Cancel review" : "Write a review" }}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="my-8">
        <div v-if="isWriteReview" class="flex items-center justify-center transition-all">
          <div class="my-7 w-full md:w-6/12">
            <h2 class="text-2xl font-bold text-center">Write a review</h2>
            <p class="font-bold my-3">Rating</p>
            <div class="flex justify-center items-center">
              <client-only>
                <star-rating :star-size="24" :show-rating="false" active-color="#303086"></star-rating>
              </client-only>
            </div>
            <form class="flex flex-col items-center justify-center">
              <label for="title" class="font-bold text-sm mb-2 mt-7">Review Title</label>
              <input id="title" placeholder="Give your review a title" class="border p-2 w-full outline-none"/>
              <label for="review" class="font-bold text-sm mb-2 mt-7 ">Review</label>
              <textarea placeholder="Write your comments here" class="border p-2 w-full outline-none"/>
              <label for="upload" class="font-bold text-sm mb-2 mt-7">Picture (optional)</label>
              <label for="file" class="flex justify-center border p-8 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                     stroke="currentColor" class="w-10 h-10 text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                </svg>
              </label>
              <input id="file" type="file" class="hidden"/>
              <label for="name" class="font-bold text-sm mb-2 mt-7">Name (displayed publicly like
                <select class="text-dark-purple">
                  <option value="johnSmith">John Smith</option>
                  <option value="johnS">John S.</option>
                  <option value="js">J. S.</option>
                  <option value="anonymous">Anonymous</option>
                </select> )
              </label>
              <input id="name" placeholder="Enter your name (public)" class="border p-2 w-full outline-none"/>
              <label for="email" class="font-bold text-sm mb-2 mt-7">Email</label>
              <input id="email" placeholder="Enter your email (private)" class="border p-2 w-full outline-none"/>
              <div class="flex flex-col-reverse gap-2 lg:flex-row items-center justify-center mt-5">
                <button class="text-dark-purple py-2 px-10 font-semibold bg-white border border-dark-purple"
                        @click="isWriteReview = !isWriteReview">Cancel
                  Review
                </button>
                <button type="submit" class="bg-dark-purple py-2 px-10 font-semibold text-white">Submit
                  Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section class="my-8">
        <div class="border-t-2 border-b-2 py-4 mt-3">
          <select v-model="sortReviewParam" class="text-mg-primary bg-white outline-none py-1" @change="loadReviews">
            <option value="pictures_first">Pictures First</option>
            <option value="most_recent">Most Recent</option>
            <option value="highest_rating">Highest Rating</option>
            <option value="lowest_rating">Lowest Rating</option>
            <option value="only_pictures">Only Pictures</option>
            <option value="videos_first">Videos First</option>
            <option value="most_helpful">Most Helpful</option>
          </select>
        </div>
        <div v-for="(review, idx) in reviews" :key="idx" class="flex flex-col gap-y-2 border-b border-mg-gray py-4">
          <div class="flex items-center justify-between">
            <div>
              <client-only>
                <star-rating v-model="review.rating" read-only :star-size="16" :show-rating="false"
                             active-color="#303086"></star-rating>
              </client-only>
            </div>
            <div>
              <p class="text-mg-dark text-opacity-50 text-sm">{{review.updated_at_str}}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="bg-mg-white flex justify-center items-center relative w-8 h-8">
              <div>
                <img src="@/assets/img/pages/product_detail/user.png"/>
              </div>
              <div class="absolute bottom-0 right-0">
                <svg v-if="review.isVerified" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="10px" height="10px">
                  <g id="surface131677989">
                    <rect x="0" y="0" width="24" height="24"
                          style="fill:rgb(18.82353%,18.82353%,52.549022%);fill-opacity:1;stroke:none;"/>
                    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                          d="M 20.292969 5.292969 L 9 16.585938 L 4.707031 12.292969 L 3.292969 13.707031 L 9 19.414062 L 21.707031 6.707031 Z M 20.292969 5.292969 "/>
                  </g>
                </svg>
              </div>
            </div>
            <div class="text-mg-primary">{{ review.reviewer_name }}</div>
            <div v-if="review.isVerified" class="bg-mg-primary text-mg-white px-2 text-xs">Verified</div>
          </div>
<!--          <div class="font-bold">-->
<!--            {{ review.reviewer_name }}-->
<!--          </div>-->
          <div>{{ review.body }}</div>
        </div>
        <div class="flex justify-center">
          <MGPagination :num-page="filter.numPage" :total-pages="pagination.totalPages" @changePage='changePage'/>
        </div>
      </section>
      <section v-if="trendingProducts && trendingProducts.length" class="my-8">
        <h5 class='text-mg-dark text-xl sm:text-2xl font-medium text-center mb-8'>More Items to Consider</h5>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4 my-3">
          <MGProductBox v-for="(product, idx) in trendingProducts" :key="idx" :product="product" :show-reviews="true"/>
        </div>
      </section>
    </Container>
    <!-- Modals -->
    <SizeChartModal v-if="openSizeChartModal" @close="openSizeChartModal = false"/>
  </main>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import GalleryImages from '@/components/pages/detail/GalleryImages.vue'
import SkuShopify from '~/components/pages/detail/SkuShopify'
import SkuMockup from '~/components/pages/detail/SkuMockup'
import MGProductBox from '~/components/pages/home/MGProductBox.vue'
import SizeChartModal from '@/components/pages/detail/SizeChartModal.vue'
import {seoProduct} from '@/common/AppUtils.js'
import {GENERATED_JSON} from '~/common/Constants'
import Features from '~/components/pages/detail/Features'
import SizeGuide from "~/components/pages/detail/SizeGuide";

export default {
  name: 'ProductDetail',
  components: {
    GalleryImages,
    SkuShopify,
    SkuMockup,
    MGProductBox,
    SizeChartModal,
    Features,
    SizeGuide
  },
  async asyncData({
                    $axios,
                    $productApi,
                    $cacheFetch,
                    store,
                    params,
                    query,
                    req,
                    error,
                  }) {
    try {
      let host = req.headers.host
      if (host.startsWith('www.')) {
        host = host.substring(4, host.length)
      }
      const {data: productIam} = await $productApi
        .get(
          `/v3/check-product-in-iam/${store.state.store.iam}/${params.id}`
        )

      if ('status' in productIam && !productIam.status) {
        return error({statusCode: 404, message: 'Post not found'})
      }
      const {data: productDetail} = await $productApi
        .get('/v3/get-product-detail/' + params.id)

      const {data : trendingProducts} = await $productApi.get(`/v3/get-product-home-page/isTrendingProduct/${host}`);

      if (productDetail.json_data === GENERATED_JSON) {
        let variantSelect = productDetail.variants[0]
        if (query.variant) {
          const variantId = Number.parseInt(query.variant)
          const index = productDetail.variants.findIndex((variant) => {
            return variant.id === variantId
          })
          if (index >= 0) {
            variantSelect = productDetail.variants[index]
          }
        }
        return {
          productDetail,
          variantSelect,
          productIam,
          trendingProducts,
        }
      } else {
        const stylesStr = await $cacheFetch(
          {
            key: 'gearment-styles',
            expire: parseInt(process.env.CACHE_STYLES),
          },
          () => {
            return $productApi.get('/v3/greament/products').then((resp) => {
              return JSON.stringify(resp.data)
            })
          }
        )
        const stylesData = JSON.parse(stylesStr)
        let selectStyle = null
        if (query.styleId) {
          selectStyle = Vue._.find(stylesData, (style) => {
            return style.styleId === query.styleId
          })
        }
        if (!selectStyle) {
          selectStyle = stylesData[0]
        }
        let selectPrint = null
        if (query.print) {
          selectPrint = Vue._.find(selectStyle.print, (print) => {
            return print === query.print
          })
        }
        if (!selectPrint) {
          selectPrint = selectStyle.print[0]
        }
        let selectColor = null
        if (query.color) {
          selectColor = Vue._.find(selectStyle.colors, (color) => {
            return color.code === query.color
          })
        }
        if (!selectColor) {
          selectColor = selectStyle.colors[0]
        }

        let selectSize = null
        if (query.size) {
          selectSize = Vue._.find(selectColor.sizes, (size) => {
            return size === query.size
          })
        }
        if (!selectSize) {
          if (selectColor.sizes.length >= 3) {
            selectSize = selectColor.sizes[2]
          } else {
            selectSize = selectColor.sizes[0]
          }
        }

        return {
          productDetail,
          stylesData,
          selectPrint,
          selectStyle,
          selectColor,
          selectSize,
          productIam,
          trendingProducts
        }
      }
    } catch (e) {
      error({statusCode: 404, message: 'Post not found'})
    }
  },
  data: () => ({
    isWriteReview: false,
    shippingDetails: false,
    description: true,
    sizeChart: false,
    variantSelect: null,
    customText: '',
    customImage: '',
    quantity: 1,
    indexImage: 0,
    fbLink: '',
    twitterLink: '',
    pinLink: '',
    imageServer: process.env.CLOUDFRONT_IMAGE_API,
    relateProducts: [],
    reviews: [],
    sortReviewParam: 'pictures_first',
    filter: {
      numPage: 1
    },
    pagination: {
      totalPages: 4
    },
    openSizeChartModal: false
  }),
  head() {
    return {
      title: this.productDetail.title,
      meta: seoProduct(this.productDetail, this.$store.state.store.storeName),
      link: [
        {
          rel: 'canonical',
          href: this.seoUrl,
        },
      ],
    }
  },
  computed: {
    isShowCustomProduct() {
      if (
        !this.isRenderMockup &&
        this.productDetail &&
        this.productDetail.title &&
        (this.productDetail.title.toLowerCase().includes('personalized') ||
          this.productDetail.title.toLowerCase().includes('custom'))
      ) {
        return true
      }
      return false
    },
    seoUrl() {
      return `https://${this.$store.state.store.domain}${this.$route.path}`
    },
    variantId() {
      if (!this.isRenderMockup) {
        return this.variantSelect.id.toString()
      } else {
        const _variantId =
          this.productDetail.productId +
          "-" +
          this.selectStyle.styleId +
          "-" +
          this.selectColor.code +
          "-" +
          this.selectSize.name +
          "-" +
          this.selectPrint;
        return _variantId;
      }
    },
    galleryImages() {
      const items = []
      if (this.isRenderMockup) {
        const bucketName = this.productDetail.bucketName
        const serverImage = this.imageServer
        const productId = this.productDetail.productId
        this._.forEach(this.selectStyle.colors, (color) => {
          const styleId = this.selectStyle.styleId
          const colorSelect = color.code
          const rect = this.selectStyle.rect[this.selectPrint]
          const printLocation = this.selectPrint.toUpperCase()
          const bgImage = `${styleId}-${colorSelect}-${rect}-${printLocation}`
          const s3ImageLink = `${process.env.S3_BUCKET_LINK}/api/images/${bucketName}/${productId}/${bgImage}/large.jpg`
          if (
            this.productDetail.gen_images &&
            this.productDetail.gen_images.includes(s3ImageLink)
          ) {
            items.push({
              id: `${styleId}-${colorSelect}`,
              src: s3ImageLink,
            })
          } else {
            items.push({
              id: `${styleId}-${colorSelect}`,
              src: `${serverImage}/images/${bucketName}/${productId}/${bgImage}/large.jpg`,
            })
          }
        })
      } else {
        this._.forEach(this.productDetail.images, (item) => {
          items.push(item)
        })
      }
      return items
    },
    price() {
      let value = 0;
      if (!this.isRenderMockup) {
        value = this.variantSelect.price
      } else {
        value = this.selectStyle.price + this.selectSize.price
      }
      return value
    },
    activeImage() {
      return this.galleryImages[this.indexImage]
    },
    isRenderMockup() {
      return this.productDetail.json_data !== GENERATED_JSON
    },
  },
  watch: {
    quantity(value) {
      if (value <= 1) {
        this.quantity = 1
      } else if (
        value >= 5 &&
        this.productDetail &&
        this.productDetail.title.toLowerCase().includes('binax')
      ) {
        this.quantity = 5
      } else if (value >= 7) {
        this.quantity = 7
      } else {
        this.quantity = value
      }
    },
  },
  mounted() {
    try {
      this.initView()
      this.initSocials()
      this.onLoadRelateProducts()
      this.onLoadReview()
    }catch (e) {
      console.error(e)
    }
    console.log('ver-24/02/23');
  },
  methods: {
    onLoadReview(){
      this.$productApi
        .$get(
          `/v3/get-review-product-by-store/${this.$store.state.store.iam}`,
          {
            params :{
              offset : this.filter.numPage - 1
            }
          }
        )
        .then((resp) => {
          this.reviews = resp;
        })
        .catch(() => {
        })
    },
    onChange(e) {
      this.quantity = e.target.value
    },
    initView() {
      const item = {
        productId: this.productDetail.productId,
        title: this.productDetail.title,
        imageUrl: this.activeImage.src,
        price: this.price,
        rateNum: this.productDetail.rateNum,
        soldNum: this.productDetail.soldNum,
        styleId: this.productDetail.styleId,
        color: this.productDetail.color,
      }
      this.$store.commit('view/addProductView', item)
      this.$tracking.onViewItem({
        id: this.productDetail.productId,
        name: this.productDetail.title,
        price: this.price,
      })
    },
    initSocials() {
      this.fbLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
      this.twitterLink = `https://twitter.com/intent/tweet?url=${window.location.href}&text=Great Product !!!`
      this.pinLink = `https://pinterest.com/pin/create/button/?url=${window.location.href}&media=&description=Great Product !!!`
    },
    onLoadRelateProducts() {
      let limit = 5;
      if (this.$device.isMobile) {
        limit = 4;
      }
      this.$productApi
        .$get(
          `/v3/get-product-related/${this.$store.state.store.iam}/${this.productDetail.productId}`,
          {
            params: {
              limit
            },
          }
        )
        .then((resp) => {
          this.relateProducts = resp;
        })
        .catch(() => {
        })
    },
    onAddToCart() {
      this.storeOnCart()
      document.querySelector('#cart-drawer').checked = true
    },
    storeOnCart() {
      const properties = []
      if (!this.isRenderMockup) {
        if (this.productDetail.variants.length > 1) {
          for (let i = 0; i < this.productDetail.options.length; i++) {
            properties.push({
              name: this.productDetail.options[i],
              value: this.variantSelect.options[i],
            })
          }
        }
      } else {
        properties.push({
          name: 'Style',
          value: this.selectStyle.name,
        })
        properties.push({
          name: 'Print Location',
          value: this.selectPrint,
        })
        properties.push({
          name: 'Color',
          value: this.selectColor.name,
        })
        properties.push({
          name: 'Size',
          value: this.selectSize.name,
        })
      }
      if (this.customText.trim().length > 0) {
        properties.push({
          name: 'Custom_Text',
          value: this.customText,
        })
      }
      if (this.customImage.trim().length > 0) {
        properties.push({
          name: 'Custom_Image',
          value: this.customImage,
        })
      }

      const item = {
        id: this.productDetail.productId + '_' + this.variantId,
        productId: this.productDetail.productId,
        title: this.productDetail.title,
        alias: this.productDetail.alias,
        image: this.activeImage.src,
        price: this.price,
        variantId: this.variantId,
        properties,
        quantity: this.quantity,
        path: this.$route.path,
      }
      this.$store.commit('cart/addToCart', item)
      this.$tracking.onAddToCart({
        id: item.productId,
        name: item.title,
        price: item.price,
        quantity: item.quantity,
      })
    },
    onChangeCustomImage(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      const file = files[0]
      const formData = new FormData()
      formData.append('custom_file', file)
      formData.append('custom_file_ajax', true)
      this.$nuxt.$loading.start()
      axios
        .post('https://img.bizticket.net/upload.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((resp) => {
          this.customImage = resp.data.file_url
          this.$nuxt.$loading.finish()
        })
        .catch(() => {
          this.$nuxt.$loading.finish()
        })
    },
    onChangeVariant(variant) {
      this.variantSelect = variant
      const index = this._.findIndex(this.galleryImages, (image) => {
        return (
          this.variantSelect.image_id &&
          image.id.toString() === this.variantSelect.image_id.toString()
        )
      })
      if (index >= 0) {
        this.indexImage = index
      }
      this.$router.replace({
        query: {
          variant: this.variantSelect.id,
        },
      })
    },
    getPathMockupImage() {
      const bucketName = this.productDetail.bucketName
      const productId = this.productDetail.productId
      const styleId = this.selectStyle.styleId
      const colorSelect = this.selectColor.code
      const rect = this.selectStyle.rect[this.selectPrint]
      const printLocation = this.selectPrint.toUpperCase()
      const bgImage = `${styleId}-${colorSelect}-${rect}-${printLocation}`
      const imageUrl = `/images/${bucketName}/${productId}/${bgImage}/large.jpg`
      return imageUrl
    },
    onBindMainImage() {
      const index = this._.findIndex(this.galleryImages, (item) => {
        return item.src.endsWith(this.getPathMockupImage())
      })
      if (index >= 0) {
        this.indexImage = index
        this.$router.replace({
          query: {
            styleId: this.selectStyle.styleId,
            print: this.selectPrint,
            color: this.selectColor.code,
          },
        })
      }
    },
    onSelectPrint(value) {
      this.selectPrint = value
      this.onBindMainImage()
    },
    onSelectSize(value) {
      this.selectSize = value
    },
    onSelectColor(value) {
      this.selectColor = value
      this.onBindMainImage()
    },
    onChangeStyle(value) {
      this.selectStyle = value
    },
    loadReviews() {
      // Call api here
    },
    changePage(val) {
      switch (val) {
        case 0: this.filter.numPage = 1; break;
        case -1: this.filter.numPage = this.filter.numPage > 1 ? this.filter.numPage - 1 : this.filter.numPage; break;
        case 1: this.filter.numPage = this.filter.numPage < this.pagination.totalPages ? this.filter.numPage + 1 : this.filter.numPage; break;
        case this.pagination.totalPages: this.filter.numPage = this.pagination.totalPages; break;
      }
      this.onLoadReview()
    },
  },
}
</script>

<style scoped>
li {
  list-style-type: circle;
  padding: 5px 0px;
}
</style>
