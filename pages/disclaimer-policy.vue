<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div>
          <div
          >
            <h1 class='text-center uppercase font-bold text-xl'>
              Disclaimer Policy
            </h1>
          </div>
          <div class='pt-10'>
            <div>
              <p>The information contained in this website is for general information purposes only. The information is provided
                by&nbsp;<strong>{{ $store.state.store.domain }}</strong>, a property of&nbsp;<strong>{{ $store.state.store.domain }}.</strong>&nbsp;While we endeavor to
                keep the information up to date and correct, we make no&nbsp;<strong>representations or warranties</strong>&nbsp;of
                any kind, express or implied, about the&nbsp;<strong>completeness, accuracy, reliability, suitability or
                  availability</strong>&nbsp;with respect to the website or the information,&nbsp;<strong>products, services, or
                  related graphics</strong>&nbsp;contained on the website for any purpose. Any reliance you place on such
                information is therefore strictly at your own risk.</p>

              <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss
                or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection
                with, the use of this website. Through this website you are able to link to other websites which are not under the
                control of&nbsp;<strong>{{ $store.state.store.domain }}</strong>. We have no control over the nature, content and availability of
                those sites. The inclusion of any links does not&nbsp;<strong>necessarily imply a recommendation or
                  endorse</strong>&nbsp;the views expressed within them. Every effort is made to keep the website up and running
                smoothly. However,&nbsp;<strong>{{ $store.state.store.domain }}</strong>&nbsp;takes no responsibility for, and will not be liable
                for, the website being temporarily&nbsp;<strong>unavailable due to technical issues beyond our control.</strong>
              </p>
              <p class="my-3"><strong>Get 24/7 support</strong></p>
              <ul class="font-bold">
                <li>Address: {{ $store.state.store.address }}</li>
                <li>Phone: {{ $store.state.store.phone }}</li>
                <li>Email: {{ $store.state.store.email }}</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </main>
  </div>

</template>

<script>
export default {
  name: "disclaimer-policy",
  head() {
    return {
      title: "Disclaimer Policy",
    };
  },
}
</script>

<style scoped>

</style>
