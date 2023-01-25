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
      <div class="md:columns-2 sm:columns-1 sm:ml-0 gap-20 ml-60">
        <h1
          class="font-bold md:text-5xl sm:text-4xl md:ml-20 sm:ml-5 leading-none mt-28"
        >
          Financial Infrastructure for the internet
        </h1>
        <div class="stripe-starts ml-72 scale-105 block sm:hidden">
          <img
            src="../stripeImages/stripe-starts-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div class="md:ml-80 sm:ml-5">
        <p class="max-w-lg text-xl py-2">
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe's software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button class="rounded-full text-white py-1 px-3 bg-gray-800">
          Start now
          <fa icon="chevron-right" class="h-3" />
        </button>
        <a href="#" class="text-gray-800 ml-4 py-1 px-3">
          Contact sales
          <fa icon="chevron-right" class="h-3" />
        </a>
      </div>

      <div class="flex flex-row">
        <div
          class="grid md:grid-cols-4 sm:grid-cols-2 md:gap-28 sm:gap-10 md:mt-20 sm:mt-28 md:ml-80 sm:ml-5"
        >
          <img
            src="../stripeImages/instacart-logo-removebg-preview.png"
            alt=""
            class="h-5 mt-5 max-w-5 md:ml-20 sm:ml-0"
          />
          <img
            src="../stripeImages/salesforce-logo-removebg-preview.png"
            alt=""
            class="md:max-w-5 md:h-14 sm:h-12 sm:max-w-5"
          />
          <img
            src="../stripeImages/amazon-removebg-preview.png"
            alt=""
            class="md:h-10 sm:max-w-5 sm:h-8 sm:max-w-10"
          />
          <img
            src="../stripeImages/slack-logo-removebg-preview.png"
            alt=""
            class="md:h-10 md:max-w-5 sm:h-8 sm:max-w-10"
          />
          <img
            src="../stripeImages/shopify-logo-removebg-preview.png"
            alt=""
            class="md:h-14 md:max-w-10 md:ml-20 sm:ml-0 sm:h-12 sm:max-w-10"
          />
          <img
            src="../stripeImages/google-logo-removebg-preview.png"
            alt=""
            class="md:h-20 md:max-w-10 sm:h-16 sm:max-w-10"
          />
          <img
            src="../stripeImages/lyft-logo-removebg-preview.png"
            alt=""
            class="md:h-20 md:max-w-5 sm:h-16 sm:max-w-5"
          />
          <img
            src="../stripeImages/zoom-logo-removebg-preview.png"
            alt=""
            class="md:h-10 md:max-w-5 sm:h-8 sm:max-w-5"
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
