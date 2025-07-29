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
        , we help small businesses and service providers stand out online with powerful, custom websites.
        Based in London and serving clients worldwide, our web development services are designed to increase visibility,
        generate leads, and grow your brand online.
        <br /><br />

        Whether you're a local business owner, coach, or startup founder, we build websites that are fast-loading, modern, and mobile-friendly, crafted to convert visitors into paying clients.
        <br /><br />

        Our team specializes in building clean, responsive websites tailored to your goals. We don’t believe in templates or bloated features, just bespoke designs that reflect your unique brand and speak directly to your audience.
        <br /><br />

   From our base in London, we work closely with clients to create websites that are not only visually stunning but also carefully optimized for search engine ranking, fast performance, and excellent user experience.
<br /><br />

        If you're ready to grow your business with a professional online presence, we’re here to help you launch with confidence.
      </p>

      <Link to="/Contact">
        <button className="border rounded-lg hover:bg-blue-500 p-3 px-6 my-12 bg-[#26B7FF] text-white transition duration-300">
          Get a Free Consultation
        </button>
      </Link>

      <div className="bg-white rounded-2xl shadow-lg text-center p-8 mt-2 mx-4 md:mx-0 md:w-1/2 mb-12 border border-gray-100">
        <h2 className=" text-2xl font-semibold text-[#26B7FF] mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          To empower small businesses with custom websites that build trust, attract more clients, and turn online traffic into real results.
        </p>
        <h2 className=" text-2xl font-semibold text-[#26B7FF]  my-4">
          Our Vision
        </h2>
         <p className="text-gray-700 leading-relaxed">
          To become the go-to web development partner for entrepreneurs worldwide, making professional websites accessible, affordable, and results-focused.
        </p>
      </div>

    </div>
  );
}

export default About;
