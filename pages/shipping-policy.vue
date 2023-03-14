<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div >
          <div
          >
            <h1 class='text-center uppercase font-bold text-xl'>
              Shipping & Delivery
            </h1>
          </div>
          <div class="mt-10">
            <section class="pb-10">
              <div>
                <div v-if="isShowDefault" >
                  <p><strong>Delivery Times</strong></p>
                  <p>
                    Estimated delivery 5 - 10 business days for delivery within the
                    United States.&nbsp;All of our products are dispatched&nbsp; 2 - 4
                    business days. However, during peak times such as holiday seasons
                    and public holidays, this may&nbsp;be delayed&nbsp;slightly.
                  </p>
                  <p>
                    We will email you a tracking number, usually after we have shipped
                    your order.
                  </p>
                  <p>
                    Most of our items shipped to the United Kingdom, Canada, Australia
                    and the rest of the World will take 7 - 15 business days as we
                    select a balance of the fastest and cost effective shipping
                    offered.
                  </p>
                  <p>
                    If your items have not arrived within 30 business days, please
                    contact us&nbsp;at {{ $store.state.store.email }} so we may assist you regarding the
                    status of your order..
                  </p>
                  <p>
                    Orders depending on the destination in the world might take longer
                    because of couriers and customs inspection. So please&nbsp;take
                    this into consideration should your order not arrive within 30
                    days.
                  </p>
                  <p>Thank you for understanding.</p>
                </div>
                <div v-else >
                  <span v-html="content"></span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  </div>

</template>
<script>
export default {
  head() {
    return {
      title: "Shipping Policy"
    }
  },
  async asyncData({ $axios, app, error }) {
    try {
      const pageResp = await $axios.post("/page/type", {
        pageType: "SHIPPING_POLICY",
      });
      if (pageResp) {
        return {
          content: pageResp.data.content,
        };
      }
    } catch (error) {
      error({ statusCode: 404, message: "Post not found" });
    }
  },
  data() {
    return {
      content: "",
    };
  },
  computed: {
    isShowDefault() {
      return !(this.content && this.content.length > 0);
    },
  },
};
</script>
