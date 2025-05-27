
export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto px-[150px] py-[150px]">
      {/* Left Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Hello, I’mBrooklyn Gilbert</h1>
        <h2 className="text-xl text-gray-600 mb-4">I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</h2>
        <button className="bg-purple-600 text-white px-5 py-2 rounded-lg mb-6 hover:bg-blue-700 transition">
         Say Hello!
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center">
        <img
          src="/p-image.png"
          alt="Profile"
          className="w-[536px] h-[636px] object-cover "
        />
      </div>
    </div>
  )
}
