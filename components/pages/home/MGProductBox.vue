<template>
	<div class="bg-white">
		<a v-if="product.title" :href="product | alias">
			<v-lazy-image :src="product.imageUrl" :src-placeholder="require('@/assets/img/gray-bg.png')" alt="Product" class="w-full" />
			<div v-if="product.discount && !isSearching"
				class="absolute top-2 right-2 rounded-full md:h-12 h-10 md:w-12 w-10 bg-orange text-white flex justify-center items-center">
				<span class="w-min text-right md:text-sm text-xs md:leading-4 leading-3">
					{{ parseInt(product.discount) }}% OFF</span>
			</div>
			<div class="p-3">
				<p class="text-base font-medium text-mg-primary truncate block capitalize">{{ product.title }}</p>
				<div v-if="showReviews">
					<div>
						<client-only>
							<star-rating :rating="getRandomInt(1, 5)" :star-size="16" read-only :show-rating="false"
								active-color="#303086"></star-rating>
						</client-only>
					</div>
					<div>
						<p>
							{{ getRandomInt(10, 200) }} Reviews
						</p>
					</div>
				</div>
				<div class="flex items-center">
					<div class="text-base font-normal text-mg-primary cursor-auto my-2">
						<div v-if="product.discount" class="flex items-center">
							<p class="text-mg-primary ">${{ product.discount }}</p>
							<span class="text-maroon line-through font-light text-sm ml-3">${{ product.price |
									number('0,0.00')
							}}</span>
						</div>
						<p v-else class="text-mg-primary">
							${{ product.price | number('0,0.00') }}
						</p>
					</div>
				</div>
			</div>
		</a>
	</div>
</template>
<script>
export default {
	name: 'MGProductBox',
	props: {
		product: {
			type: Object,
			default: () => {
			},
		},
		showReviews: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		}
	}
}
</script>
<style lang="scss">

</style>
