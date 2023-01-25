<template>
  <section class="bg-blue-50 mt-20 relative">
    <div class="container md:ml-52 sm:ml-5 py-40">
      <h1 class="text-purple-700 text-xl text-bold">Unified platform</h1>
      <p
        class="md:text-4xl sm:text-3xl font-bold md:mt-20 sm:mt-5 md:max-w-xl sm:w-80"
      >
        A fully integrated suite of payments products
      </p>

      <div class="flex flex-row">
        <div class="md:columns-2 md:gap-28 sm:columns-1 mt-10">
          <p class="text-xl text-bold md:max-w-lg sm:w-80">
            We bring together everything that's required to build websites and
            apps that accept payments and send payouts globally. Stripe's
            products power payments for
            <span class="text-purple-700"
              >online and in-person retailers, subscriptions businesses,
              software platforms and marketplaces,</span
            >
            and everything in between.
          </p>

          <p class="text-xl text-bold max-w-lg sm:mt-5 sm:mb-4">
            We also help companies
            <span class="text-purple-700"
              >beat fraud, send invoices, issue virtual and physical cards,
              reduce friction at checkout, get financing, manage business
              spend,</span
            >
          </p>
        </div>
      </div>

      <button class="rounded-full text-white py-1 px-3 bg-purple-700">
        Start with payments
        <fa icon="chevron-right" class="h-3" />
      </button>

      <div class="flex flex-row">
        <div
          class="grid md:grid-cols-3 sm:grid-cols-2 gap-20 mt-20 md:ml-20 sm:ml-5"
        >
          <img
            src="../stripeImages/stripe--payments-card.png"
            alt=""
            class="rounded md:scale-150 sm:scale-125 md:ml-48 sm:ml-5"
          />
          <img
            src="../stripeImages/stripe-company-card.png"
            alt=""
            class="md:mr-20 md:scale-110 sm:scale-150"
          />
          <img
            src="../stripeImages/stripe-mobile-removebg-preview.png"
            alt=""
            class="scale-150 block sm:hidden"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="grid grid-cols-2 gap-20 md:ml-20 sm:ml-5 mt-20">
          <img
            src="../stripeImages/stripe-warby.png"
            alt=""
            class="md:ml-20 sm:ml-5 rounded-3xl"
          />
          <img
            src="../stripeImages/stripe-fraud_risk-removebg-preview.png"
            alt=""
            class="md:scale-150 md:mt-64 sm:mt-20 sm:scale-150"
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
