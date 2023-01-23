<template>
  <main>
    <Hero />
    <Features />
  </main>
</template>

<script>
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
export default {
  name: "App",
  components: {
    Hero,
    Features,
  },
};
</script>
