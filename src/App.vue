<template>
  <main>
    <Hero class="px-6 sm:px-12 md:px-28 py-6 sm:py-12 md:py-10" />
  </main>
</template>

<script>
import Hero from "./components/Hero.vue";
export default {
  name: "App",
  components: {
    Hero,
  },
};
</script>
