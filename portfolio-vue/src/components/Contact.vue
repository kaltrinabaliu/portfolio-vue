<script>
export default{
    name:"TheContact"
}

</script>

<template>
  <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center bg-[#232325]" id='contact'>
        <div className="max-w-[1200px] mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2">


                <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
                    <h1 className="text-4xl sm:text-5xl text-white">
                        Contact <span>Me</span>
                    </h1>
                    <p className="text-lg  text-gray-400 mt-2">
                        Let's connect on LinkedIn <br />or sent me an Email
                    </p>
                    <div className="flex items-center mt-2 text-gray-400">
                        <div className='text-2xl'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 3 8 L 3 26 L 29 26 L 29 8 Z M 7.3125 10 L 24.6875 10 L 16 15.78125 Z M 5 10.875 L 15.4375 17.84375 L 16 18.1875 L 16.5625 17.84375 L 27 10.875 L 27 24 L 5 24 Z">
                                </path>
                            </svg>
                        </div>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            <p>Kaltrinë Baliu</p>
                        </div>
                    </div>
                </div>

                <form action="https://getform.io/f/jawxvdkb" method="post" className="p-6 flex flex-col justify-center max-w-[700px]">
                    <div className="flex flex-col">
                        <input type="text" name="name" id="name" placeholder='Full Name' className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:border-blue-800 focus:ring-blue-900" />
                    </div>
                    <div className="flex flex-col">
                        <input type="email" name="email" id="email" placeholder='Email' className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:border-blue-800 focus:ring-blue-900" />
                    </div>
                    <div className="flex flex-col">
                        <input type="text" name="message" id="message" placeholder='Your Message' className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white  focus:border-blue-800 focus:ring-blue-900" />
                    </div>

                    <button type='submit' className="bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white py-3 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-purple-300">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    </div>
</template>
    