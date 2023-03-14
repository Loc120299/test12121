<template>
  <div :class="padding" class="container mx-auto">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      default: 'px-4 lg:px-8 2xl:px-0',
    },
  },
}
</script>
