<template>
  <div>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <About></About>
    <Work></Work>
    <Experience></Experience>
    <MyEducation></MyEducation>
    <Contact></Contact>
    <Footer></Footer>

  </div>
</template>

<script>
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Experience from "./components/Experience.vue";
import Footer from "./components/Footer.vue";
import HeroSection from "./components/HeroSection.vue";
import Work from "./components/Work.vue";
import NavBar from "./components/NavBar.vue";
import MyEducation from "./components/MyEducation.vue";
export default {
  name: "App",
  components: {
    NavBar,
    HeroSection,
    About,
    Work,
    Experience,
    MyEducation,
    Contact,
    Footer
  },
};
</script>

<style></style>
