import { Link } from "react-router-dom"

function Pricing() {

    return (
        <div>
          <h1>Our Services & Pricing</h1>
    
          <section>
            <h2>1. Landing Page</h2>
            <p>
              Perfect for businesses or individuals who need a single page to showcase what they do and drive action — like bookings, sign-ups, or inquiries.
            </p>
            <ul>
              <li>Clean, modern design</li>
              <li>Call-to-action buttons</li>
              <li>Contact form</li>
            </ul>
            <p><strong>Starting at:</strong> £150</p>
          </section>
    
          <section>
            <h2>2. Simple Website</h2>
            <p>
              Ideal for individuals or small businesses who need a multi-page site with key information.
            </p>
            <ul>
              <li>3–5 custom-designed pages (Home, About, Services, Contact, etc.)</li>
              <li>Fully responsive design (desktop, tablet, and mobile)</li>
              <li>Contact form, embedded media (images or video)</li>
            </ul>
            <p><strong>Starting at:</strong> £300–£500 (depending on the complexity)</p>
          </section>
    
          <section>
            <h2>3. Maintenance Plan</h2>
            <p>
              Keep your website fresh and functional without worrying about tech. We’ll handle small updates for you — like text and image changes.
            </p>
            <ul>
              <li>Content updates</li>
              <li>Minor visual changes and tweaks</li>
              <li>Up to 2–4 changes per month</li>
            </ul>
            <p><strong>Price:</strong> £50/month</p>
            <p><em>Note: This is an introductory rate. It will increase as demand grows.</em></p>
          </section>
    
          <section>
            <h2>Pricing Information</h2>
            <p>
              Our prices start from <strong>£150 for a landing page</strong> and <strong>£300 for a simple website</strong>.
              Every project is unique, so we offer custom quotes after a free consultation.
            </p>
            <p><strong>Contact us today to book a free call and get a personalised quote!</strong></p>
          </section>
        </div>
      );
}

export default Pricing