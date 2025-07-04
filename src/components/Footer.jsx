
import { Link } from "react-router-dom"

function Footer() {

    return (
      
        <footer className="bg-stone-700 text-white flex justify-center py-4">
          <nav className="space-x-4">
            <Link to="/TermsAndConditions" className="hover:underline">Terms & Conditions</Link>
            <Link to="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link>
            <Link to="/FAQS" className="hover:underline">FAQ</Link>
            <Link to="/Contact" className="hover:underline">Contact</Link>

          </nav>

          <div>
            <a href="www.google.com">Instagram</a>
          </div>

        </footer>
      
    );
}

export default Footer