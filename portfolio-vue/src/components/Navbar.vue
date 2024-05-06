<template>
  <div class="relative z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
    <h1 class="text-3xl font-bold primary-color ml-4">A.PARK</h1>
    <ul class="hidden md:flex">
      <li class="p-5"><a href="#home">Home</a></li>
      <li class="p-5"><a href="#about">About</a></li>
      <li class="p-5"><a href="#work">Work</a></li>
      <li class="p-5"><a href="#experience">Experience</a></li>
      <li class="p-5"><a href="#contact">Contact</a></li>
    </ul>
      <div @click="handleNav" class="block md:hidden">
        <!--  close icon -->
<!--       
      <svg v-if=nav stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z">
      </path>
    </svg> -->
          <!--  menu icon -->
      <svg v-if=!nav stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
      </path>
    </svg>
      </div>
     <!-- Overlay div -->
    <div v-if="nav" class="fixed top-0 right-0 bottom-0 w-full bg-black opacity-50 md:hidden"></div>
    <div :class="nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'" class="md:hidden">
      <div @click="handleNav" class="flex justify-between justify-center items-center">  
      <h1 class="text-3xl font-bold primary-color m-4">A.PARK</h1>
      <svg v-if=nav stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z">
      </path>
    </svg>
    </div>
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

export default {
  name: "TheNavbar",
  components: {
    
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