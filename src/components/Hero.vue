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
      <div class="xl:columns-2 sm:columns-1 sm:ml-0 gap-20 ml-60">
        <h1
          class="font-bold 2xl:text-5xl sm:text-4xl md:ml-20 lg:ml-0 md:w-96 2xl:w-8/12 xl:ml-20 2xl:ml-80 sm:ml-5 leading-none 2xl:mt-52 xl:mt-56 md:mt-32"
        >
          Financial Infrastructure for the internet
        </h1>
        <div
          class="stripe-starts 2xl:ml-96 lg:ml-0 scale-105 lg:block sm:hidden"
        >
          <img
            src="../stripeImages/stripe-starts-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div class="2xl:ml-80 xl:ml-20 lg:ml-0 md:ml-20 sm:ml-5">
        <p class="2xl:max-w-lg lg:max-w-xs xl:max-w-md text-xl py-2">
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
          class="grid lg:grid-cols-4 sm:grid-cols-2 2xl:gap-28 xl:gap-10 sm:gap-10 xl:mt-20 sm:mt-28 2xl:ml-80 sm:ml-5"
        >
          <img
            src="../stripeImages/instacart-logo-removebg-preview.png"
            alt=""
            class="xl:h-5 xl:mt-5 xl:max-w-5 2xl:ml-20 xl:ml-10 lg:h-5 lg:mt-5 lg:max-w-5 lg:ml-0 sm:ml-0 md:ml-10 md:h-6 md:mt-6 md:max-w-10"
          />
          <img
            src="../stripeImages/salesforce-logo-removebg-preview.png"
            alt=""
            class="xl:max-w-5 xl:h-14 lg:h-10 lg:mt-5 lg:max-w-5 lg:ml-0 sm:h-12 sm:max-w-5 md:ml-10 md:h-14 md:mt-4 md:max-w-10"
          />
          <img
            src="../stripeImages/amazon-removebg-preview.png"
            alt=""
            class="xl:h-10 lg:h-10 lg:mt-5 lg:max-w-5 lg:ml-0 sm:max-w-5 sm:h-8 sm:max-w-10 md:ml-10 md:h-12 md:mt-4 md:max-w-10"
          />
          <img
            src="../stripeImages/slack-logo-removebg-preview.png"
            alt=""
            class="xl:h-10 xl:max-w-5 lg:h-8 lg:mt-5 lg:max-w-5 lg:ml-0 sm:h-8 sm:max-w-10 md:ml-10 md:h-10 md:mt-4 md:max-w-10"
          />
          <img
            src="../stripeImages/shopify-logo-removebg-preview.png"
            alt=""
            class="xl:h-14 xl:max-w-10 2xl:ml-20 xl:ml-10 lg:h-12 lg:mt-5 lg:max-w-5 lg:ml-0 sm:ml-0 sm:h-12 sm:max-w-10 md:ml-10 md:h-12 md:max-w-10"
          />
          <img
            src="../stripeImages/google-logo-removebg-preview.png"
            alt=""
            class="xl:h-20 xl:max-w-10 lg:h-18 lg:mt-5 lg:max-w-5 lg:ml-0 sm:h-16 sm:max-w-10 md:ml-10 md:h-14 md:max-w-10"
          />
          <img
            src="../stripeImages/lyft-logo-removebg-preview.png"
            alt=""
            class="xl:h-20 xl:max-w-5 lg:h-18 lg:mt-5 lg:max-w-5 lg:ml-0 sm:h-16 sm:max-w-5 md:ml-20 md:h-18 md:max-w-10"
          />
          <img
            src="../stripeImages/zoom-logo-removebg-preview.png"
            alt=""
            class="xl:h-10 xl:max-w-5 lg:h-8 2xl:mt-10 lg:mt-5 lg:max-w-5 lg:ml-0 sm:h-8 sm:max-w-5 md:ml-10 md:h-8 md:max-w-10"
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
