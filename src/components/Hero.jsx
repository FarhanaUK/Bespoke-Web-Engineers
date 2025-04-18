import { Link } from "react-router-dom";
import Services from "./Services";
import ProcessingTimeMap from "./ProcessingTimeMap";
import CallToAction from "./CallToAction";
// fix the image sizing
function Hero() {
  return (
    <div className="w-full px-12 mt-4 ">
      <div className=" relative w-full h-[400px] mt-8 bg-slate-800 rounded-xl ">
        <img
          src="/blue.svg"
          alt="Background"
          className="absolute right-0 top-0 h-full object-contain w-[35%]"
        />

        <div className="absolute right-10 top-2/5 transform -translate-y-1/2 w-[25%] border bg-gray-900 rounded-xl opacity-85 text-white p-4 flex flex-col items-end text-left">
          <h2 className="text-2xl font-bold mr-24">
            Innovative Solutions Built With Clean Code And SEO Optimization
          </h2>
          <p className="mt-2 ">
            Custom coded to perfectly match your brand identity and business
            objectives.
            <br />
            Every line of code is carefully crafted for optimal performance and
            user experience.
          </p>
        </div>

        <img
          src="/3.png"
          alt="BWE logo image"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] object-contain w-[90%]"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w0full text-center my-5">
          <h2 className="font-bold text-2xl text-white">
            Supporting small businesses, startups and individuals get started{" "}
          </h2>
        </div>
        <img
          src="red.svg"
          alt="Background"
          className="absolute left-0 top-1/8 h-[85%] object-contain w-[35%] mt-20 "
        />
        <div className="absolute flex flex-col items-start justify-center border bg-gray-900 rounded-xl opacity-85 text-white p-4 text-left px-4 transform translate-x-10 transform translate-y-40">
          <h2 className="text-2xl font-bold text-white p-2">
            Premium Web Development <br />
            Services
          </h2>
          <p className="mt-2 ">
            From responsive design to e-commerce solutions, <br />
            we create digital experiences that engage visitors
            <br /> and convert them into customers.
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
