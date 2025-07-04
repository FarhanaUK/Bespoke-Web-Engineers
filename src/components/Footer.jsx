import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-stone-700 text-white py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <nav className="space-y-2 md:space-y-0 md:space-x-6 text-center">
          <Link to="/TermsAndConditions" className="hover:underline">Terms & Conditions</Link>
          <Link to="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link>
          <Link to="/FAQS" className="hover:underline">FAQ</Link>
          <Link to="/Contact" className="hover:underline">Contact</Link>
        </nav>

   
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/bespokewebengineers/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-pink-400"
          >
            <FaInstagram className="mr-2" /> Instagram
          </a>

         
          <a
            href="https://www.facebook.com/profile.php?id=61574489914626"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-400"
          >
            <FaFacebook className="mr-2" /> Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
