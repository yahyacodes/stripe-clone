<template>
  <main>
    <Hero />
    <Features />
    <Devs />
    <Why />
    <Globe />
    <Ready />
    <Footer />
  </main>
</template>

<script>
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Devs from "./components/Devs.vue";
import Why from "./components/Why.vue";
import Globe from "./components/Globe.vue";
import Ready from "./components/Ready.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Hero,
    Features,
    Devs,
    Why,
    Globe,
    Ready,
    Footer,
  },
};
</script>
