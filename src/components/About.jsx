import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col justify-start items-center pt-8">
      <h1 className="text-center text-4xl font-semibold">About Us</h1>

      <p className="pt-8 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-gray-700 ">
        At{" "}
        <span className="font-semibold text-[#26B7FF]">
          Bespoke Web Engineers
        </span>
       , we’re dedicated to transforming the web development industry.
        Based in the heart of London, we specialize in helping small businesses and startups create modern, 
        clean, and functional websites that elevate their online presence and drive growth.
         We’re passionate about supporting local entrepreneurs and business owners by providing tailored websites
          that are easy to navigate, visually appealing, and built to attract more clients. Whether you’re a service provider,
           a coach, or a growing business, our goal is to deliver a site that reflects your unique brand and helps your business succeed.
            Although we are based in London, our services extend worldwide, with additional team support based in Dubai.
             We are here to support businesses everywhere, offering top-tier web development with a personal touch.
              Our approach is simple: no jargon, no unnecessary features, just high-quality, results-driven websites
               that work as hard as you do. Let’s take your business to the next level with a website that truly works for you.
      </p>
      <Link to="/Contact">
        <button className="border rounded-lg hover:bg-blue-500 p-3 px-6 my-12 bg-[#26B7FF] text-white">
          Book Now
        </button>
      </Link>

      <div className="bg-white rounded-2xl shadow-lg text-center p-8 mt-2 mx-4 md:mx-0 md:w-1/2 mb-12 border border-gray-100">
        <h2 className=" text-2xl font-semibold text-[#26B7FF] mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          To empower small businesses with beautiful, functional websites that
          build trust, drive growth, and make an impact without the hassle.
        </p>
        <h2 className=" text-2xl font-semibold text-[#26B7FF]  my-4">
          Our Vision
        </h2>
        <p className="text-gray-700 leading-relaxed">
          To empower small businesses around the world, redefining what it means to launch online with confidence.
        </p>
      </div>

    </div>
  );
}

export default About;
