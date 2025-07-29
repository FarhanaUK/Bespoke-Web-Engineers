

function Pricing() {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold pt-8">Pricing</h1>

      
      <div className="flex justify-center p-12">
       
        <div className="w-full max-w-2xl px-4 mx-auto">
         
          <section className="shadow-xl rounded-lg bg-white p-4 mb-6 ">
            <h2 className="font-bold mb-2">1. Landing Page</h2>
            <p className="text-gray-700">
              Perfect for businesses or individuals who need a single page to
              showcase what they do and drive action, like bookings, sign-ups,
              or inquiries.
            </p>
            <ul className="list-disc ml-4 mt-2 text-gray-700">
              <li>Clean, modern design</li>
              <li>Call-to-action buttons</li>
              <li>Fully responsive design (desktop, tablet, and mobile)</li>
              <li>Contact form</li>
            </ul>
            <p className="font-bold mt-2">Starting at: £199.00</p>
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
              Starting at: £300.00–£500.00 (depending on the complexity)
            </p>
            <p className="text-gray-500">
            <em>You can add more pages or features beyond the listed packages. Additional work will be quoted separately based on your needs.</em>
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
            <p className="font-bold mt-2">Price: £50.00/month</p>
            <p className="text-gray-500">
              <em>Note: This is an introductory rate. 50% off</em>
            </p>
          </section>

          <section className="shadow-xl rounded-lg bg-white p-4 mb-6">
            <h2 className="font-bold mb-2">Pricing Information</h2>
            <p className="text-gray-700">
              Our prices start from <strong>£150.00 for a landing page</strong> and{" "}
              <strong>£300.00 for a simple website</strong>. Every project is
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

        
      </div>
    </div>
  );
}

export default Pricing;
