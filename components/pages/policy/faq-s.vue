<template>
  <div>
    <p><strong>1.&nbsp;<strong>How do I know the status of my order?</strong><strong>&nbsp;&nbsp;</strong></strong></p>

    <ul>
      <li>You can see your current order status and history by visiting the&nbsp;<strong>Order Tracking Page&nbsp;</strong>when you logged in on our website.</li>
    </ul>

    <p><strong>2. Can I cancel or change/ exchange my order any time?</strong></p>

    <ul>
      <li>Sometimes!&nbsp;<strong>Contact our Support</strong>&nbsp;to request a cancellation or change order and we will do our best to try and catch the order before our fulfillment team gets to work. Due to our rapid shipping process, we are not always able to make the changes requested but we are here to help with no hassle returns and will work with you to see the refund completed in a Safmotor.</li>
    </ul>

    <p><strong>3. Your page is not working, what&#39;s happening?&nbsp;</strong></p>

    <ul>
      <li>Please&nbsp;<strong>Contac our Support&nbsp;</strong>and tell us about the issues what are you facing. For this, we will know about the issues and solve it as soon as possible.</li>
    </ul>

    <p><strong>4. Now&nbsp;<strong>I noticed that I chose the wrong item by mistake, can you swap my product?</strong></strong></p>

    <ul>
      <li>Please&nbsp;<strong>Contact Us</strong>&nbsp;as soon as you find out that you have made an mistake. If we catch the issue before the item goes into production, we can make the change. Remember, we strive to send out your product&nbsp;as soon as possible, so act fast!</li>
    </ul>

    <p><strong>5. Can I Exchange my order directly?&nbsp;</strong></p>

    <ul>
      <li>We are not able to provide direct exchanges we are always happy to help with returns and finding the right items for you.&nbsp;You may enter a return request on our&nbsp;<strong>Contact Us</strong>&nbsp;page for quick and easy returns and proceed with placing a new order for the items what you wanted.</li>
    </ul>

    <p>&nbsp;</p>

    <p><strong>6. When I receive my order, w</strong><strong>hat happens if my item is damaged?</strong></p>

    <ul>
      <li>If your item has any defects or errors on our part, we will replace the item and we don&#39;t need any additional cost for this. The damaged product does not need to be returned. If we are unable to replace the product due to inventory issues, we will refund you or send you a comparable item of your related&nbsp;niche choice.</li>
    </ul>

    <p><strong>7. What&#39;s the process of returning an order?&nbsp;</strong></p>

    <ul>
      <li>You can return any unused items within 30 days of purchase using our fast and simple process. Visit our&nbsp;<strong>Contact Us Page&nbsp;</strong>to submit your return request and we will send you a&nbsp;process and by following this you can return a item easily and also&nbsp;you don&#39;t need to pay return&nbsp;cost because it&#39;s free.&nbsp;</li>
    </ul>

    <p><strong>8.&nbsp;&nbsp;</strong><strong>What do I do if I received the wrong items?</strong></p>

    <ul>
      <li>If it happens with you, we are truly sorry. Please email us at&nbsp;{{$store.state.store.email}} and tell us your order number and how we messed up. We will take care of you and cover all costs of getting you the right shipping. We will make sure to correct the issue&nbsp;as soon as possible.</li>
    </ul>

    <p><strong>9. What payment methods do you accept in your store?&nbsp;</strong></p>

    <ul>
      <li>We accept Paypal payments.&nbsp;We also accept Visa, MasterCard, Discover, and American Express.</li>
    </ul>

    <p class="my-3"><strong>For Any need Contact our support</strong></p>

    <ul class="font-bold">
      <li>Address: {{ $store.state.store.address }}</li>
      <li>Phone: {{ $store.state.store.phone }}</li>
      <li>Email: {{ $store.state.store.email }}</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: "faq-s",
  computed:{
    storeName(){
      return this.$store.state.store.storeName
    }
  }
}
</script>

<style scoped>

</style>
