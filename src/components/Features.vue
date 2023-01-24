<template>
  <section class="bg-blue-50 mt-20 relative">
    <div class="container ml-80 py-40">
      <h1 class="text-purple-700 text-xl text-bold">Unified platform</h1>
      <p class="text-4xl text-bold mt-20 max-w-xl">
        A fully integrated suite of payments products
      </p>

      <div class="flex flex-row">
        <div class="columns-2 gap-28 mt-10">
          <p class="text-xl text-bold max-w-lg">
            We bring together everything that's required to build websites and
            apps that accept payments and send payouts globally. Stripe's
            products power payments for
            <span class="text-purple-700"
              >online and in-person retailers, subscriptions businesses,
              software platforms and marketplaces,</span
            >
            and everything in between.
          </p>

          <p class="text-xl text-bold max-w-lg">
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
        <div class="grid grid-cols-3 gap-20 mt-20 ml-20">
          <img
            src="../stripeImages/stripe--payments-card.png"
            alt=""
            class="rounded scale-150 ml-48"
          />
          <img
            src="../stripeImages/stripe-company-card.png"
            alt=""
            class="mr-20 scale-110"
          />
          <img
            src="../stripeImages/stripe-mobile-removebg-preview.png"
            alt=""
            class="scale-150"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="grid grid-cols-2 gap-20 ml-20 mt-20">
          <img
            src="../stripeImages/stripe-warby.png"
            alt=""
            class="ml-20 rounded-3xl"
          />
          <img
            src="../stripeImages/stripe-fraud_risk-removebg-preview.png"
            alt=""
            class="scale-150 mt-64"
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
