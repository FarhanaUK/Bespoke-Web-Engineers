import { Link } from "react-router-dom";
import Services from "./Services";
import ProcessingTimeMap from "./ProcessingTimeMap";
// fix the image sizing
function Hero() {




  return (
    <div className="w-full px-12 mt-4">
      <h1 className="">"Innovative Solutions Built With Clean Code And SEO Optimization"</h1>

      <div className=" relative w-full h-[400px] mt-8 ">
        <img
          src="/S1.svg"
          alt="Background"
          className="absolute right-0 top-0 h-full object-contain w-[75%]"
        />
        
        <div className="absolute right-45 top-2/5 transform -translate-y-1/2 w-[25%] border bg-gray-900 rounded-xl opacity-85 text-white p-4 flex flex-col items-end text-left">

          <h2 className="text-2xl font-bold mr-24">We Build Beautiful Websites</h2>
          <p className="mt-2 ">Custom coded to perfectly match your brand identity and business objectives.<br/>Every line of code is carefully crafted for optimal performance and user experience.</p>
        </div>
      
      
          <img src="S2.svg"
           alt="Background"
           className="absolute left-35 top-0 h-full object-contain w-[60%] mt-20 "/>
          <div className="absolute flex flex-col items-start justify-center border bg-gray-900 rounded-xl opacity-85 text-white p-4 text-left px-4 transform translate-x-85 transform translate-y-45">
          <h2 className="text-2xl font-bold text-white p-2">Premium Web Development <br/>Services</h2>
          <p className="mt-2 ">From responsive design to e-commerce solutions, <br/>we create digital experiences that engage visitors<br/> and convert them into customers.</p>
    
        </div>
      </div>



      <div className="text-center space-y-4 my-20">
        <h2 className="text-4xl mt-35 font-bold">
          Ready to grow your online presence?
        </h2>
        <h3 className="text-lg">
        Contact us today to discuss your project and see how we can help elevate your brand with a custom web solution.
        </h3>
        <Link to="/Contact">
          <button 
          className="border rounded-lg hover:bg-blue-100 p-2 bg-[#26B7FF]">Get Started</button>
        </Link>
      </div>

        <Services/>
        <ProcessingTimeMap/>
    </div>
  
  );
}

export default Hero;