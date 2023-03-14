<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div >
          <div
          >
            <h1 class='text-center uppercase font-bold text-xl'>
              FAQ’S
            </h1>
          </div>
          <div class="mt-10">
            <FaqS/>
          </div>
        </div>
      </Container>
    </main>
  </div>

</template>

<script>
import FaqS from "~/components/pages/policy/faq-s";
export default {
  name: "faq-s",
  components:{
    FaqS
  },
  head() {
    return {
      title: "FAQ’S",
    };
  },
}
</script>

<style scoped>

</style>
