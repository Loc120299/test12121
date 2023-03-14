<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div>
          <div
          >
            <h1 class='text-xl font-bold text-center'>PRIVACY POLICY</h1>
          </div>
          <div class='mt-10'>
            <section class='pb-10'>
              <div class=''>
                <div v-if='isShowDefault' class=''>
                  <ul>
                    <li>
                      <strong>WHAT DO WE DO WITH YOUR INFORMATION?</strong>
                      <ul>
                        <li>
                          When you purchase something from our store, as part of the
                          buying and selling process, we collect the personal
                          information you give us such as your name, address and email
                          address.
                        </li>
                        <li>
                          When you browse our store, we also automatically receive
                          your computer&rsquo;s internet protocol (IP) address in
                          order to provide us with information that helps us learn
                          about your browser and operating system. Email marketing (if
                          applicable): With your permission, we may send you emails
                          about our store, new products and other updates.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>CONSENT</strong>
                      <ul>
                        <li>How do you get my consent?</li>
                        <li>
                          When you provide us with personal information to complete a
                          transaction, verify your credit card, place an order,
                          arrange for a delivery or return a purchase, we imply that
                          you consent to our collecting it and using it for that
                          specific reason only.
                        </li>
                        <li>
                          If we ask for your personal information for a secondary
                          reason, like marketing, we will either ask you directly for
                          your expressed consent, or provide you with an opportunity
                          to say no.
                        </li>
                        <li>How do I withdraw my consent?</li>
                        <li>
                          If after you opt-in, you change your mind, you may withdraw
                          your consent for us to contact you, for the continued
                          collection, use or disclosure of your information, at
                          anytime
                        </li>
                        <li>
                          <strong
                          >{{ $store.state.store.storeName }} STORE</strong
                          >
                          <ul>
                            <li>{{ $store.state.store.address }}</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>DISCLOSURE</strong>
                      <ul>
                        <li>
                          We may disclose your personal information if we are required
                          by law to do so or if you violate our Terms of Service.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>THIRD-PARTY SERVICES</strong>
                      <ul>
                        <li>
                          In general, the third-party providers used by us will only
                          collect, use and disclose your information to the extent
                          necessary to allow them to perform the services they provide
                          to us.
                        </li>
                        <li>
                          However, certain third-party service providers, such as
                          payment gateways and other payment transaction processors,
                          have their own privacy policies in respect to the
                          information we are required to provide to them for your
                          purchase-related transactions. For these providers, we
                          recommend that you read their privacy policies so you can
                          understand the manner in which your personal information
                          will be handled by these providers.
                        </li>
                        <li>
                          In particular, remember that certain providers may be
                          located in or have facilities that are located a different
                          jurisdiction than either you or us. So if you elect to
                          proceed with a transaction that involves the services of a
                          third-party service provider, then your information may
                          become subject to the laws of the jurisdiction(s) in which
                          that service provider or its facilities are located.
                        </li>
                        <li>
                          As an example, if you are located in Canada and your
                          transaction is processed by a payment gateway located in the
                          United States, then your personal information used in
                          completing that transaction may be subject to disclosure
                          under United States legislation, including the Patriot Act.
                          Once you leave our store&rsquo;s website or are redirected
                          to a third-party website or application, you are no longer
                          governed by this Privacy Policy or our
                          website&rsquo;s&nbsp;Terms of Service.
                        </li>
                        <li>
                          <strong>Links</strong>
                          <ul >
                            <li>
                              When you click on links on our store, they may direct
                              you away from our site. We are not responsible for the
                              privacy practices of other sites and encourage you to
                              read their privacy statements.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>SECURITY</strong>
                      <ul>
                        <li>
                          To protect your personal information, we take reasonable
                          precautions and follow industry best practices to make sure
                          it is not inappropriately lost, misused, accessed,
                          disclosed, altered or destroyed.
                        </li>
                        <li>
                          If you provide us with your credit card information, the
                          information is encrypted using secure socket layer
                          technology (SSL) and stored with a AES-256 encryption.
                          Although no method of transmission over the Internet or
                          electronic storage is secure, we follow all PCI-DSS
                          requirements and implement additional generally accepted
                          industry standards.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>COOKIES</strong>
                      <ul>
                        <li>
                          Here is a list of cookies that we use. We&rsquo;ve listed
                          them here so you that you can choose if you want to opt-out
                          of cookies or not.
                        </li>
                        <li>
                          _session_id, unique token, sessional, Allows to store
                          information about your session (referrer, landing page,
                          etc).
                        </li>
                        <li>
                          No data held, Persistent for 30 minutes from the last visit,
                          Used by our website provider&rsquo;s internal stats tracker
                          to record the number of visits<br />no data held, expires
                          midnight (relative to the visitor) of the next day, Counts
                          the number of visits to a store by a single customer.
                        </li>
                        <li>
                          Cart, unique token, persistent for 2 weeks, Stores
                          information about the contents of your cart.
                        </li>
                        <li>_secure_session_id, unique token, sessional</li>
                        <li>
                          Storefront_digest, unique token, indefinite If the shop has
                          a password, this is used to determine if the current visitor
                          has access.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>AGE OF CONSENT</strong>
                      <ul>
                        <li>
                          By using&nbsp;this site, you represent that you are at least
                          the age of majority in your state or province of residence,
                          or that you are the age of majority in your state or
                          province of residence and you have given us your consent to
                          allow any of your minor dependents to use this site.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>CHANGES TO THIS PRIVACY POLICY</strong>
                      <ul >
                        <li>
                          We reserve the right to modify this privacy policy at any
                          time, so please review it frequently. Changes and
                          clarifications will take effect immediately upon their
                          posting on the website. If we make material changes to this
                          policy, we will notify you here that it has been updated, so
                          that you are aware of what information we collect, how we
                          use it, and under what circumstances, if any, we use and/or
                          disclose it.
                        </li>
                        <li>
                          If&nbsp;our store&nbsp;is acquired or merged with another
                          company, your information may be transferred to the new
                          owners so that we may continue to sell products to you.
                        </li>
                      </ul>
                    </li>
                  </ul>
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
      title: "Privacy Policy"
    }
  },
  async asyncData({ $axios, app, error }) {
    try {
      const pageResp = await $axios.post('/page/type', {
        pageType: 'PRIVACY_POLICY'
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
