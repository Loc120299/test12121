<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div >
          <div
          >
            <h1 class='text-center uppercase font-bold text-xl'>
              RETURNS & REFUNDS
            </h1>
          </div>
          <div class='pt-10'>
            <section class='pb-10'>
              <div >
                <div v-if='isShowDefault'>
                  <h2 >RETURN & REFUND</h2>
                  <div >
                    <h4>
                      <b>1 – Exchange Or Cancellation</b>
                    </h4>
                    <p>
                      All of our products are custom-made. If you wish to amend your
                      order, please contact us as soon as possible. We will not be
                      responsible for any information wrong if you don’t provide us
                      within 12 hours. After 12 hours, your order has already been
                      placed in production and can no longer be modified. Buyers
                      assume all risks when choosing the wrong style and size of their
                      purchase, no return or refund is accepted in this case.
                    </p>
                    <h5>
                      <b>Lost Orders</b>
                    </h5>
                    <p>
                      If an order is lost in transit, we will dispatch a replacement
                      to you at our expense. You will be provided a tracking number
                      and this is what we use to determine if an order has been lost
                      in transit or delivered.
                    </p>
                    <h5>
                      <strong
                      >Mistakes in the missing address or wrong delivery
                        address</strong
                      >
                    </h5>
                    <p>
                      If there are any errors in the missing address or you provide us
                      with the wrong shipping address leading to unsuccessful delivery
                      and return it to us, please contact us and we will solve the
                      problem for you.
                    </p>
                    <h4>
                      <strong>2 – Return Policy Or Replacement</strong>
                    </h4>
                    <p>
                      All products go through a quality control check before being
                      sent to you – But just in case read below!
                    </p>
                    <p>
                      If the product encounters one of the problems below when you
                      open the package, let us know by taking a picture and email us
                      directly with your order number.
                    </p>
                    <p>+ The printed image is not clear.</p>
                    <p>+ The printed image is not in the center of the shirt.</p>
                    <p>+ Package received wrongly against the order.</p>
                    <p>+ Damaged due to delivery: torn, dirty…</p>
                    <p>
                      + The order is not in the right size, color or style compared to
                      the order.
                    </p>
                    <p>+ Other mistakes caused by us…</p>
                    <p>
                      If the product you received has any of the above issues, please
                      contact us via email or website with pictures of errors and your
                      order number. We will refund or replace an item when the issue
                      is verified to be correct.
                    </p>
                    <p>
                      <strong>Note</strong>: * Returns are only accepted when the item
                      has not been used or washed and in the same condition that you
                      received it.
                    </p>
                    <p>
                      * &nbsp;We will not take any responsibility about the size if we
                      made it as your request. In case of shipping the wrong size in
                      comparison with the order we will follow the above policy.
                    </p>
                    <h4>
                      <b>3 – Refunds Policy</b>
                    </h4>
                    <p>
                      Your refund will be issued to the same credit card or original
                      method of payment that you used to order. As the refund is a
                      reversal of your payment, we can only send it back in the same
                      way it was received. Reversing a payment in this way is the
                      fastest and most secure way to get the refund on its way back to
                      you.
                    </p>
                    <p>
                      Shipping costs are non-refundable. If you receive a refund, the
                      cost of return shipping will be deducted from your refund.
                    </p>
                    <h5>
                      <strong>* Refund issues:&nbsp;</strong>Below is few reasons you
                      will get full refund :
                    </h5>
                    <h5>Duplicate order, we will cancel and refund one for you.</h5>

                    <h5>
                      Your item(s) has not received within 30 days or you received a
                      damaged/faulty item (see conditions in RETURN POLICY), we will
                      priorly solve for replacement orders and you do not need to
                      return item(s). But if you still want to refund, we will process
                      the store credit or refund once we receive the return item(s)
                      from you.
                    </h5>
                    <h5>
                      If you need to return, or refund your order, please read the
                      following instructions carefully
                    </h5>
                    <h5 class='col-inner'>
                      <strong>* How do return your item(s)?</strong>
                    </h5>
                    <p>
                      <strong>Step 1: How to return?</strong>
                    </p>
                    <p>
                      – Returns must be shipped back to us within 30 days (???) from
                      the date your package is delivered.
                    </p>
                    <p>
                      – To be eligible for a return, your item must be unused and in
                      the same condition that you received it. It must also be in the
                      original packaging, that is unworn, not-used, and has not been
                      washed or damaged in any other way. All original sewn in or hang
                      tags must still be intact.
                    </p>
                    <p>
                      – To complete your return, we require a receipt or proof of
                      purchase. You will be responsible for paying for your own
                      shipping costs for returning your item(s).
                    </p>
                    <p>
                      <strong>Step 2: Our check processing.</strong>
                    </p>
                    <p>
                      – Once we received your return item(s), we will send you an
                      email to notify you that we have received it. We will also
                      notify you of the approval or rejection of your refund as
                      quickly as possible. The check processing will takes a time to
                      compare and to discuss with our partner.
                    </p>
                    <p>
                      Then your refund will be processed. It takes up
                      3-5&nbsp;business days to process once we have issued them.
                    </p>
                    <p>
                      – If you haven’t received a refund yet, first check your bank
                      account again. Then contact your credit card company. It may
                      take some time before your refund is officially posted.
                    </p>
                    <p>
                      – Next contact your bank. There is often some processing time
                      before a refund is posted. If you’ve done all of this and you
                      still have not received your refund yet, please contact us at
                      <strong>{{ $store.state.store.email }}</strong>
                    </p>
                  </div>
                </div>
                <div v-else>
                  <span v-html='content'></span>
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
       title: "Returns & Refunds"

    }
  },
  async asyncData({ $axios, app, error }) {
    try {
      const pageResp = await $axios.post('/page/type', {
        pageType: 'RETURN_POLICY'
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
