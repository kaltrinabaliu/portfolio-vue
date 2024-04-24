<template>
    <div>
      <div class="my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center" id="home">
        <div class="flex-col my-auto mx-auto md:mx-0">
          <p class="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">Hi! I am Ariana</p>
          <h1 class="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <span>{{ currentText }}</span>
          </h1>
          <div class="flex justify-center items-center">
            <p class="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">with a 5+ years experience</p>
          </div>
          <div class="text-5xl flex justify-start gap-16 my-7 text-purple-600">
            <!-- <AiFillLinkedin/>
            <AiFillGithub/>
            <AiFillInstagram/> -->
          </div>
          <div class="relative inline-flex group my-3">
            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF675E] to-[#FF676E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            <a href="/" title="Download CV" role="button" class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Download CV</a>
          </div>
        </div>
        <div class="my-auto">
          <img class="w-[300px] sm:w-[550px] mx-auto h-auto" :src="profilepic" alt="profile pic" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'oh-vue-icons/icons';
  import profilepic from "../assets/profilepic5.png";
  
  export default {
    name: 'TheHero',
    data() {
      return {
        texts: [
          "Frontend Dev",
          "Webdesigner",
          "Consultant"
        ],
        currentIndex: 0,
        currentText: "",
        profilepic: profilepic

      };
    },
    mounted() {
      this.updateText();
    },
    methods: {
      updateText() {
        setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          this.currentText = this.texts[this.currentIndex];
        }, 1000);
      }
    },
    components: {
      // AiFillLinkedin,
      // AiFillGithub,
      // AiFillInstagram
    },
   
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  