<template>
  <section class="hero">
    <div class="canvas-container">
      <canvas
        id="canv"
        width="32"
        height="32"
        class="canvas"
        ref="canvas"
      ></canvas>
    </div>
    <Navbar />
    <div class="mt-8">
      <div class="columns-2 gap-20 ml-60">
        <h1 class="font-bold text-5xl ml-20 leading-none mt-28">
          Financial Infrastructure for the internet
        </h1>
        <div class="stripe-starts ml-72 scale-105">
          <img
            src="../stripeImages/stripe-starts-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div class="ml-80">
        <p class="max-w-lg text-xl py-2">
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe's software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button class="rounded-full text-white py-1 px-3 bg-gray-800">
          Start now
        </button>
        <a href="#" class="text-gray-800 ml-4 py-1 px-3">Contact sales</a>
      </div>

      <div class="flex flex-row">
        <div class="grid grid-cols-4 gap-28 mt-20 ml-80">
          <img
            src="../stripeImages/instacart-logo-removebg-preview.png"
            alt=""
            class="h-5 mt-5 max-w-5 ml-20"
          />
          <img
            src="../stripeImages/salesforce-logo-removebg-preview.png"
            alt=""
            class="max-w-5 h-14"
          />
          <img
            src="../stripeImages/amazon-removebg-preview.png"
            alt=""
            class="h-10 max-w-5"
          />
          <img
            src="../stripeImages/slack-logo-removebg-preview.png"
            alt=""
            class="h-10 max-w-5"
          />
          <img
            src="../stripeImages/shopify-logo-removebg-preview.png"
            alt=""
            class="h-14 max-w-10 ml-20"
          />
          <img
            src="../stripeImages/google-logo-removebg-preview.png"
            alt=""
            class="h-20 max-w-10"
          />
          <img
            src="../stripeImages/lyft-logo-removebg-preview.png"
            alt=""
            class="h-20 max-w-5"
          />
          <img
            src="../stripeImages/zoom-logo-removebg-preview.png"
            alt=""
            class="h-10 max-w-5"
          />
        </div>
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
  data() {
    return {
      t: 0,
    };
  },
  mounted() {
    this.run();
  },
  methods: {
    col(x, y, r, g, b) {
      this.$refs.canvas.getContext("2d").fillStyle = `rgb(${r}, ${g}, ${b})`;
      this.$refs.canvas.getContext("2d").fillRect(x, y, 1, 1);
    },
    R(x, y, t) {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    },
    G(x, y, t) {
      return Math.floor(
        192 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    },
    B(x, y, t) {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    },
    run() {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          this.col(
            x,
            y,
            this.R(x, y, this.t),
            this.G(x, y, this.t),
            this.B(x, y, this.t)
          );
        }
      }
      this.t += 0.01;
      requestAnimationFrame(this.run);
    },
  },
};
</script>
<style></style>
