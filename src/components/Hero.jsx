import { Link } from "react-router-dom";
// fix the image sizing
function Hero() {




  return (
    <div className="w-full px-12 mt-4">
      <h1>"Pixel-Perfect, Hand-Crafted Websites – Built with Clean Code"</h1>

      <div className="relative w-full h-[425px] mt-8">
        <img
          src="/public/S1.svg"
          alt="Background"
          className="absolute right-0 top-0 h-full object-contain w-[40%]"
        />
        <div className="absolute inset-0 flex flex-col items-end justify-center text-black text-right px-4 transform -translate-x-36 transform -translate-y-16">
          <h2 className="text-3xl font-bold">We Build Beautiful Websites</h2>
          <p className="mt-2 text-lg">Custom coded to match your brand</p>
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-4xl mt-12 font-bold">
          Ready to grow your online presence?
        </h2>
        <h3 className="text-lg">
          Contact us today to discuss your project and see how we can help.
        </h3>
        <Link to="/Contact">
          <button className="border p-2 bg-sky-800">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;