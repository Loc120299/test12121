<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <h1 class='text-center font-bold my-3 text-xl'>About Us</h1>
        <div>
          <section>
            <div>
              <div v-if='isShowDefault'>
                <p>
                  {{ $store.state.store.storeName }} is the world's leading expert
                  for procuring the trendiest items for everyone all in one place at
                  everyday low prices.
                </p>
                <p>
                  We work around the clock to find, create, manufacture, and ship
                  you the most innovative products. This way you know you are
                  guaranteed to have the coolest things money can buy without
                  spending days researching on your own.
                </p>
                <p>
                  Trust our team of experts to help you stay ahead of the curve, and
                  always be on the cutting edge of technology. Join our product
                  revolution as we continuously challenge what is possible in your
                  life and help bring awesomeness worldwide.
                </p>
                <p class='py-3'>
                  <span class='font-bold'>Email:</span>
                  {{ $store.state.store.email }}
                </p>
                <p v-if="$store.state.store.phone != ''" class='py-3'>
                  <span class='font-bold'>Phone Number:</span>
                  {{ $store.state.store.phone }}
                </p>
                <p v-if="$store.state.store.address != ''" class='py-3'>
                  <span class='font-bold'>Address:</span>
                  {{ $store.state.store.address }}
                </p>
                <p class='py-3'>
                  <span class='font-bold'>Office Hours:</span> Mon-Fri, 9am-1:30pm -
                  2:30pm-6pm Eastern time
                </p>
              </div>
              <div v-else>
                <span v-html='content'></span>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  </div>

</template>
<script>
export default {
  head() {
    return {
      title: "About Us",
    };
  },
  async asyncData({ $axios, app, error }) {
    try {
      const pageResp = await $axios.post('/page/type', {
        pageType: 'CONTACT_US'
      })
      if (pageResp) {
        return {
          content: pageResp.data.content
        }
      }
    } catch (error) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  data() {
    return {
      content: ''
    }
  },
  computed: {
    isShowDefault() {
      return !(this.content && this.content.length > 0)
    }
  }
}
</script>
