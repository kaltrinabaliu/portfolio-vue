<template>
  <div className="py-10 text-white bg-[#232325] h-auto" id="about">
    <div
      className="flex md:flex-row flex-col-reverse items-center md:gap-5 px-12 max-w-6xl mx-auto"
    >
      <div className="md:w-[1100px] sm:w-[400px] h-full">
        <img
          :src="aboutImg"
          alt="About"
          className="object-cover object-left rounded-xl md:h-[300px] filter grayscale
                brightness-50"
        />
      </div>

      <div>
        <div className="p-2">
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5">
              About <span>Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="flex mt-10 items-center md:gap-7 gap-1 my-2">
          <div className="bg-[#333333]/40 lg:p-5 p-[27px] rounded-lg">
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              11
              <span>+</span>
            </h3>
            <p><span className="md:text-base text-xs">Projects</span></p>
          </div>
          <div className="bg-[#333333]/40 lg:p-5 p-4 rounded-lg">
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              5
              <span>+</span>
            </h3>
            <p>
              <span className="md:text-base text-xs">years experience</span>
            </p>
          </div>
          <div className="bg-[#333333]/40 lg:p-5 p-4 rounded-lg">
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              30
              <span>+</span>
            </h3>
            <p><span className="md:text-base text-xs">happy clients</span></p>
          </div>
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>
import aboutImg from "../assets/about4.jpg";
export default {
  name: "TheAbout",
  components: {},
  data() {
    return {
      aboutImg: aboutImg,
    };
  },
};
</script>
<style></style>
