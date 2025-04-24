import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="mt-6 mr-6 sm:mr-12 md:mr-32">
      <div className="hidden md:flex justify-end items-center space-x-12">
        <Link to="/About" className="hover:underline">
          ABOUT
        </Link>
        <Link to="/Services" className="hover:underline">
          SERVICES
        </Link>
        <Link to="/Pricing" className="hover:underline">
          PRICING
        </Link>
        <Link to="/Contact" className="hover:underline">
          CONTACT
        </Link>
        <Link
          to="/BookNow"
          className="border rounded-lg bg-black hover:bg-slate-800 text-white px-4 py-2 inline-flex items-center"
        >
          BOOK NOW
        </Link>
      </div>

      <div className="md:hidden flex justify-end items-start">
        <button onClick={toggleMenu} className="relative z-10">
          {!isOpen && <Menu size={28} />}

          {isOpen && <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="absolute right-0 top-16 bg-gray-500 p-4 space-y-4 mt-2 rounded-lg shadow-lg z-20">
            <Link
              to="/About"
              onClick={closeMenu}
              className="block hover:underline"
            >
              ABOUT
            </Link>
            <Link
              to="/Services"
              onClick={closeMenu}
              className="block hover:underline"
            >
              SERVICES
            </Link>
            <Link
              to="/Pricing"
              onClick={closeMenu}
              className="block hover:underline"
            >
              PRICING
            </Link>
            <Link
              to="/Contact"
              onClick={closeMenu}
              className="block hover:underline"
            >
              CONTACT
            </Link>
            <Link
              to="/BookNow"
              onClick={closeMenu}
              className="block border rounded-lg bg-black hover:bg-slate-800 text-white px-4 py-2"
            >
              BOOK NOW
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavMenu;
