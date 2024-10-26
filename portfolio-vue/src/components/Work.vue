<template>
  <div class="py-6 max-w-[1200px] mx-auto" id="work">
    <div class="mx-auto px-4 md:px-8">
      <div class="mb-4 flex items-center justify-between">
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl lg:text-3xl text-white">
            My <span>Projects</span>
          </h2>
          <p class="text-gray-500">
            These are my latest projects.
          </p>
        </div>
      </div>

      <div class="grid gap-3 md:grid-cols-3 sm:grid-cols-1 md:gap-6 xl:gap-8">
        <a
          href="/"
          class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80"
        >
          <img
            v-bind:src="proj2"
            alt=""
            class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <a
          href="/"
          class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80"
        >
          <img
            v-bind:src="proj1"
            alt=""
            class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <a
          href="/"
          class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80"
        >
          <img
            v-bind:src="proj3"
            alt=""
            class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <a
          href="/"
          class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80"
        >
          <img
            v-bind:src="proj4"
            alt=""
            class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";
import proj4 from "../assets/proj4.jpg";

export default {
  name: "TheWork",
  components: {},
  data() {
    return {
      proj1: proj1,
      proj2: proj2,
      proj3: proj3,
      proj4: proj4,
    };
  },
};
</script>
<style></style>
