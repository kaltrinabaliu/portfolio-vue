<script setup>
import profilepic from "../assets/profileImage.png";

const text = ["Software Engineer"];



</script>

<template>
  <div>
    <div class="flex flex-col-reverse md:flex-row justify-center items-center lg:justify-between" id="home">
      <div class="flex-col my-auto mx-auto md:mx-0">
        <p class="md:text-3xl xl:text-5xl text-xl font-bold text-gray-200">Hi!</p>
        <p class="md:text-3xl xl:text-5xl text-xl font-bold text-gray-200">I am Kaltrinë Baliu</p>
        <h1 class="md:text-3xl xl:text-5xl text-xl font-bold md:py-6">
          <span>{{ text[0] }}</span>
        </h1>
        <div class="relative inline-flex group my-3">
          <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF675E] to-[#FF676E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
          <a href="/CV.pdf" download="/CV.pdf" title="Download CV" role="button" class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300">Download CV</a>
        </div>
      </div>
      <div class="flex justify-center items-center my-auto">
        <img class="w-[500px] md:w-[500px] xl:w-[800px]" :src="profilepic" alt="profile pic" />
      </div>
    </div>
  </div>
</template>
