import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">Pricing</h1>

      {/* Flex container for the section and image */}
      <div className="flex p-12">
        {/* Left Section: Text and Pricing Details */}
        <div className="w-1/2">
          {/* Pricing sections */}
          <section className="shadow-xl rounded-lg bg-white p-4 mb-6">
            <h2 className="font-bold mb-2">1. Landing Page</h2>
            <p className="text-gray-700">
              Perfect for businesses or individuals who need a single page to
              showcase what they do and drive action, like bookings, sign-ups,
              or inquiries.
            </p>
            <ul className="list-disc ml-4 mt-2 text-gray-700">
              <li>Clean, modern design</li>
              <li>Call-to-action buttons</li>
              <li>Contact form</li>
            </ul>
            <p className="font-bold mt-2">Starting at: £150</p>
          </section>

          <section className="shadow-xl rounded-lg bg-white p-4 mb-6">
            <h2 className="font-bold mb-2">2. Simple Website</h2>
            <p className="text-gray-700">
              Ideal for individuals or small businesses who need a multi-page
              site with key information.
            </p>
            <ul className="list-disc ml-4 mt-2 text-gray-700">
              <li>
                3–5 custom-designed pages (Home, About, Services, Contact, etc.)
              </li>
              <li>Fully responsive design (desktop, tablet, and mobile)</li>
              <li>Contact form, embedded media (images or video)</li>
            </ul>
            <p className="font-bold mt-2">
              Starting at: £300–£500 (depending on the complexity)
            </p>
          </section>

          <section className="shadow-xl rounded-lg bg-white p-4 mb-6">
            <h2 className="font-bold mb-2">3. Maintenance Plan</h2>
            <p className="text-gray-700">
              Keep your website fresh and functional without worrying about
              tech. We’ll handle small updates for you, like text and image
              changes.
            </p>
            <ul className="list-disc ml-4 mt-2 text-gray-700">
              <li>Content updates</li>
              <li>Minor visual changes and tweaks</li>
              <li>Up to 2–4 changes per month</li>
            </ul>
            <p className="font-bold mt-2">Price: £50/month</p>
            <p className="text-gray-500">
              <em>Note: This is an introductory rate. 50% off</em>
            </p>
          </section>

          <section className="shadow-xl rounded-lg bg-white p-4 mb-6">
            <h2 className="font-bold mb-2">Pricing Information</h2>
            <p className="text-gray-700">
              Our prices start from <strong>£150 for a landing page</strong> and{" "}
              <strong>£300 for a simple website</strong>. Every project is
              unique, so we offer custom quotes after a free consultation.
            </p>
            <p>
              <strong>
                Contact us today to book a free call and get a personalised
                quote!
              </strong>
            </p>
          </section>
         
        </div>

        {/* Right Section: Image with Overlaid Text */}
        <div className="w-1/2 relative">
          <img
            src="/circle.png"
            alt="BWE"
            className="w-full h-auto object-contain rounded-lg" // Ensures the image isn't stretched
          />
          {/* Overlaid Text */}
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-col items-center justify-center text-red-700 p-4">
            <p className="text-2xl font-semibold mb-4 ml-6">Limited Time Offer: 50% Off Maintenance Plan</p>
            <p className="text-lg">Reduced Price on All Websites — Act Fast!</p>
            
            <div> <Link to="/Contact">
            <button className="border font-black rounded-lg hover:bg-blue-100 p-2 bg-[#26B7FF]">
              Book Now
            </button>
          </Link></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Pricing;
