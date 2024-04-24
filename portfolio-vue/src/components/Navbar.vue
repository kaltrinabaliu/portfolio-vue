<template>
    <div class="z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 class="text-3xl font-bold primary-color ml-4">A.PARK</h1>
      <ul class="hidden md:flex">
        <li class="p-5"><a href="#home">Home</a></li>
        <li class="p-5"><a href="#about">About</a></li>
        <li class="p-5"><a href="#work">Work</a></li>
        <li class="p-5"><a href="#experience">Experience</a></li>
        <li class="p-5"><a href="#contact">Contact</a></li>
      </ul>
      <div @click="handleNav" class="block md:hidden">
        <template v-if="nav">
          <!-- <AiOutlineClose size="20" /> -->
        </template>
        <template v-else>
          <!-- <AiOutlineMenu size="20" /> Ensure FcMenu is imported and used correctly here -->
        </template>
      </div>
      <div :class="nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'">
        <h1 class="text-3xl font-bold primary-color m-4">A.PARK</h1>
        <ul class="p-8 text-2xl">
          <li class="p-2"><a href="#home">Home</a></li>
          <li class="p-2"><a href="#about">About</a></li>
          <li class="p-2"><a href="#work">Work</a></li>
          <li class="p-2"><a href="#experience">Experience</a></li>
          <li class="p-2"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </template>

<script>
// import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

export default {
  name: "TheNavbar",
  components: {
    // AiOutlineClose,
    // AiOutlineMenu
  },
  data() {
    return {
      nav: false
    };
  },
  methods: {
    handleNav() {
      this.nav = !this.nav;
    }
  }
};
</script>

<style>

</style>