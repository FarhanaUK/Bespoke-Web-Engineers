import CallToAction from "./CallToAction";

function Test() {
  return (
    <div className="relative px-4 sm:px-8 md:px-12 mt-4 flex flex-col items-center justify-center text-center">
      <div className="relative bg-gray-800 h-[400px] min-w-[600px] rounded-lg w-full p-12 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="h-[250px] flex flex-col items-center justify-start">
          {/* Logo Centered */}
          <img src="3.png" alt="My Image" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] object-contain w-[90%]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center my-5">
          <h2 className="font-bold italic text-lg text-white">
            Supporting small businesses and individuals get started
          </h2>
        </div>
        </div>

        {/* 🔵 Blue Image - right of logo */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 z-10">
          <img src="blue.svg" alt="Blue" className="w-[400px] min-w-[350px]" />
          {/* Text on top with border */}
          <div className="absolute top-1/2 left-1/2 w-96 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-xl opacity-85 text-white p-4 text-left">
            <h2 className="text-2xl font-bold">
              Innovative Solutions Built With Clean Code And SEO Optimization
            </h2>
            <p className="text-lg mt-2">
              Custom coded to perfectly match your brand identity and business
              objectives. Every line of code is carefully crafted for optimal
              performance and user experience.
            </p>
          </div>
        </div>

        {/* 🔴 Red Image - bottom left */}
        <div className="absolute bottom-1 left-10 z-10">
          <img src="red.svg" alt="Red" className="w-[400px] min-w-[350px]" />
          {/* Text on top with border */}
          <div className="absolute top-1/2 left-1/2 w-96 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-xl opacity-85 text-white p-4 text-left">
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
      </div>
      <CallToAction />
    </div>
  );
}

export default Test;
