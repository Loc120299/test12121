<template>
  <div class="hero bg-base-200 rounded-lg">
    <div class="hero-content flex-col lg:flex-row">
      <img :src="$store.state.store.homeAboutUsImage" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">About Us</h1>
        <p class="py-6">
          <span v-html="$store.state.store.homeAboutUs"></span>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home_about_us"
}
</script>

<style scoped>

</style>
