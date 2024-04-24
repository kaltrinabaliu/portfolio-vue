<template>
  <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Work></Work>
    <Experience></Experience>
    <Contact></Contact>
    <Footer></Footer>

  </div>
</template>

<script>
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Experience from "./components/Experience.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Work from "./components/Work.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    About,
    Work,
    Experience,
    Contact,
    Footer
  },
};
</script>

<style></style>
