
import Services from "./Services";
import ProcessingTimeMap from "./ProcessingTimeMap";
import CallToAction from "./CallToAction";

function Hero() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 mt-4 space-y-16">
      {/* === Layout A: Original Style for Desktop === */}
      <div className="hidden lg:block relative w-full h-[400px] bg-slate-800 rounded-xl ">
        {/* Left Image */}
        <img
          src="red.svg"
          alt="Background"
          className="absolute left-0 top-1/8 h-[85%] object-contain w-[35%] mt-20 " 
        />

        {/* Right Image */}
        <img
          src="/blue.svg"
          alt="Background"
          className="absolute right-0 top-0 h-full object-contain w-[35%]"
        />

        {/* Right Text Box */}
        <div className="absolute top-1/2 left-4/5 w-96 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-xl opacity-85 text-white p-4 text-left z-10">
            <h2 className="text-2xl font-bold">
              Innovative Solutions Built With Clean Code And SEO Optimization
            </h2>
            <p className="text-lg mt-2">
              Custom coded to perfectly match your brand identity and business
              objectives. Every line of code is carefully crafted for optimal
              performance and user experience.
            </p>
          </div>

        {/* Center Logo */}
        <img
          src="/3.png"
          alt="BWE logo image"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] object-contain w-[90%] z-0"
        />

        {/* Bottom Center Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center my-5">
          <h2 className="font-bold italic text-lg text-white">
            Supporting small businesses and individuals get started
          </h2>
        </div>

        {/* Bottom Left Text Box */}
        <div className="absolute top-3/5 left-1/4 w-96 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-xl opacity-85 text-white p-4 text-left z-10">
            <h2 className="text-2xl font-bold">
              Premium Web Development Services
            </h2>
            <p className="text-lg mt-2">
              From responsive design to e-commerce solutions, <br />
              we create digital experiences that engage visitors and convert
              them into customers.
            </p>
          </div>
      </div>

      {/* === Layout B: Mobile / Tablet Friendly === */}
      <div className="lg:hidden flex flex-col items-center bg-slate-800 rounded-xl p-6 space-y-2 relative overflow-hidden">
        {/* Blue background image - top right */}
        <img
          src="/blue.svg"
          alt="blue bg"
          className="absolute top-0 right-0 w-[120px] opacity-50 object-contain"
        />

        {/* Red background image - bottom left (keeping original position) */}
        <img
          src="/red.svg"
          alt="red bg"
          className="absolute bottom-0 left-0 w-[120px] opacity-50 object-contain"
        />

        {/* Top Text */}
        <div className="text-white text-center space-y-2 z-10 border bg-gray-900 rounded-xl opacity-95 p-2 ">
          <h2 className="text-xl font-bold">
            Innovative Solutions Built With Clean Code And SEO Optimization
          </h2>
          <p>
            Custom coded to match your brand identity and goals. Clean and optimized.
          </p>
        </div>

        {/* Logo Image */}
        <img src="/3.png" alt="Logo" className="w-3/4 object-contain" />
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-full text-center my-5">
          <h2 className="font-bold italic text-sm sm:text-base md:text-lg text-white">
            Supporting small businesses and individuals get started
          </h2>
        </div>
        {/* Bottom Text */}
        <div className="text-white text-center space-y-2 z-10 border bg-gray-900 rounded-xl opacity-95 p-2">
          <h2 className="text-xl font-bold">
            Premium Web Development Services
          </h2>
          <p>
            We create digital experiences that engage visitors and convert them.
          </p>
        </div>
      </div>

      <CallToAction />
      <Services />
      <ProcessingTimeMap />
    </div>
  );
}

export default Hero;
