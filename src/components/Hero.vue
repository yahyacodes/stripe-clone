<template>
  <section class="hero-bg">
    <Navbar />
    <div class="py-20 mt-20 px-3 container">
      <div class="columns-2 gap-8">
        <h1 class="font-bold text-5xl ml-60">
          Financial <br />
          Infrastructure <br />
          for the internet
        </h1>
        <img src="../stripeImages/stripe-payment-removebg-preview.png" alt="" />
      </div>
    </div>
  </section>
</template>
<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style></style>
