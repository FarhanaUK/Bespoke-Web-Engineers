import { Link } from "react-router-dom";
// fix the image sizing
function Hero() {




  return (
    <div className="w-full px-12 mt-4">
      <h1>"Pixel-Perfect, Hand-Crafted Websites – Built with Clean Code"</h1>

      <div className="relative w-full h-[600px] mt-8">
        <img
          src="/public/S1.svg"
          alt="Background"
          className="absolute right-0 top-0 h-full object-contain w-[60%]"
        />
        <div className="absolute inset-0 flex flex-col items-end justify-center text-black text-right px-4 transform -translate-x-76 transform -translate-y-26">
          <h2 className="text-3xl font-bold">We Build Beautiful Websites</h2>
          <p className="mt-2 text-lg">Custom coded to perfectly match <br/>your brand identity and business objectives.<br/> Every line of code is carefully<br/> crafted for optimal performance and user experience.</p>
        </div>
        
      
          <img src="S2.svg"
           alt="Background"
           className="absolute left-50 top-0 h-full object-contain w-[30%] mt-56"/>
          <div className="absolute inset-0 flex flex-col items-start justify-center text-black text-left px-4 transform translate-x-55 transform translate-y-56">
          <h2 className="text-3xl font-bold">Premium Web Development <br/>Services</h2>
          <p className="mt-2 text-lg">From responsive design to e-commerce solutions, <br/>we create digital experiences that<br/> engage visitors and convert them into customers.</p>
    
        </div>
      </div>



      <div className="text-center space-y-4 my-30">
        <h2 className="text-4xl mt-55 font-bold">
          Ready to grow your online presence?
        </h2>
        <h3 className="text-lg">
        Contact us today to discuss your project and see how we can help elevate your brand with a custom web solution.
        </h3>
        <Link to="/Contact">
          <button className="border p-2 bg-sky-800">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;