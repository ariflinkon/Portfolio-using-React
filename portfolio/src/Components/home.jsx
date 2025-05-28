export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
      {/* Left Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Hello, I’m Brooklyn Gilbert
        </h1>
        <h2 className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">
          I'm a Freelance UI/UX Designer and Developer based in London, England.
          I strive to build immersive and beautiful web applications through
          carefully crafted code and user-centric design.
        </h2>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Say Hello!
        </button>

        {/* Subheadings */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 mt-10">
         <div className="bg-[#EDD8FF] p-6 rounded-md text-center">
          <h1 className="text-3xl font-bold text-gray-900">15Y.</h1>
          <p className="text-gray-600">Experience</p>
        </div>
        <div className="bg-[#EDD8FF] p-6 rounded-md text-center">
         <h1 className="text-3xl font-bold text-gray-900">250+</h1>
         <p className="text-gray-600">Projects Done</p>
        </div>
         <div className="bg-[#EDD8FF] p-6 rounded-md text-center">
         <h1 className="text-3xl font-bold text-gray-900">58</h1>
         <p className="text-gray-600">Happy Clients</p>
         </div>
       </div>

      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/p-image.png"
          alt="Profile"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover"
        />
      </div>
    </div>
  );
}
