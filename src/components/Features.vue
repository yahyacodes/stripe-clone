<template>
  <section class="bg-blue-50 mt-20 relative">
    <div class="container 2xl:ml-52 sm:ml-5 py-40">
      <h1 class="text-purple-700 text-xl text-bold">Unified platform</h1>
      <p
        class="2xl:text-4xl sm:text-3xl font-bold xl:mt-20 sm:mt-5 xl:w-5/12 sm:w-80"
      >
        A fully integrated suite of payments products
      </p>

      <div class="flex flex-row">
        <div class="lg:columns-2 xl:gap-10 sm:columns-1 mt-10">
          <p class="text-xl text-bold xl:w-11/12 sm:w-80 lg:mb-20">
            We bring together everything that's required to build websites and
            apps that accept payments and send payouts globally. Stripe's
            products power payments for
            <span class="text-purple-700"
              >online and in-person retailers, subscriptions businesses,
              software platforms and marketplaces,</span
            >
            and everything in between.
          </p>

          <p
            class="text-xl text-bold 2xl:max-w-lg xl:w-11/12 sm:mt-5 lg:w-80 sm:mb-4"
          >
            We also help companies
            <span class="text-purple-700"
              >beat fraud, send invoices, issue virtual and physical cards,
              reduce friction at checkout, get financing, manage business
              spend,</span
            >
          </p>
        </div>
      </div>

      <button class="rounded-full text-white py-1 px-3 bg-purple-700 lg:mt-5">
        Start with payments
        <fa icon="chevron-right" class="h-3" />
      </button>

      <div class="flex flex-row">
        <div
          class="grid 2xl:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-20 mt-20 xl:ml-20 lg:ml-0 sm:ml-0"
        >
          <img
            src="../stripeImages/stripe--payments-card.png"
            alt=""
            class="rounded xl:scale-150 lg:scale-110 sm:scale-125 2xl:ml-48 sm:ml-5"
          />
          <img
            src="../stripeImages/stripe-company-card.png"
            alt=""
            class="2xl:mr-20 2xl:scale-110 xl:scale-90 lg:scale-150 sm:mr-0 sm:scale-90"
          />
          <img
            src="../stripeImages/stripe-mobile-removebg-preview.png"
            alt=""
            class="xl:scale-150 lg:block 2xl:block lg:scale-100 sm:hidden xl:hidden"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div
          class="grid lg:grid-cols-2 2xl:gap-20 xl:gap-0 sm:grid-cols-1 2xl:ml-20 xl:ml-0 sm:ml-5 mt-20"
        >
          <img
            src="../stripeImages/stripe-warby.png"
            alt=""
            class="xl:ml-20 sm:ml-5 rounded-3xl"
          />
          <img
            src="../stripeImages/stripe-fraud_risk-removebg-preview.png"
            alt=""
            class="2xl:scale-150 xl:scale-100 xl:mt-64 lg:mt-64 lg:scale-75 sm:mt-20 sm:scale-90"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
