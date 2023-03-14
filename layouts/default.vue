<template>
  <div>
    <MGHeader />
    <Nuxt />
    <MGFooter />
  </div>
</template>

<script>
import MGHeader from '~/components/common/header/MGHeader.vue'
import MGFooter from '@/components/common/MGFooter.vue'
import { initScripts3rd } from '~/common/AppUtils'

export default {
  components: {
    MGHeader,
    MGFooter
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: initScripts3rd(this.$store.state.store, this.$route.path),
      link: this.cssLinks
    };
  },
  computed: {
    cssLinks() {
      const records = []
      if (this.$store.state.store.favicon) {
        records.push({
          hid: 'icon',
          rel: 'icon',
          type: 'image/x-icon',
          href: this.$store.state.store.favicon
        })
      }
      if (this.$store.state.store.linkCustomCss) {
        records.push({ rel: "stylesheet", href: this.$store.state.store.linkCustomCss })
      }
      // records.push({rel: "stylesheet", href: "/css/custom.css"})
      return records
    }
  }

}
</script>

<style>

</style>
