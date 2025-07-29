import { Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"


          
  //<Link to="/BookNow" className="border rounded-lg bg-black hover:bg-slate-800 text-white px-4 py-2 inline-flex items-center">BOOK NOW</Link>
  //<Link to="/BookNow" onClick={closeMenu} className="block border rounded-lg bg-black hover:bg-slate-800 text-white px-4 py-2">BOOK NOW</Link>
function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }

  function closeMenu() {
    setIsOpen(false);
  }

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [isOpen]);

  return (
    <div className="mt-6 mr-6 sm:mr-12 md:mr-32">
      
      <div className="hidden md:flex justify-end items-center space-x-12">
        <Link to="/About" className="hover:underline">ABOUT</Link>
        <Link to="/Services" className="hover:underline">SERVICES</Link>
        <Link to="/Pricing" className="hover:underline">PRICING</Link>
        <Link to="/Contact" className="hover:underline">CONTACT</Link>
      
      </div>

    
      <div className="md:hidden flex justify-end items-start relative">
        <button onClick={toggleMenu} className="z-20">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div
            ref={menuRef} 
            className="absolute right-0 top-12 bg-gray-500/90 p-4 space-y-4 mt-2 rounded-lg shadow-lg z-50"
          >
            <Link to="/About" onClick={closeMenu} className="block hover:underline">ABOUT</Link>
            <Link to="/Services" onClick={closeMenu} className="block hover:underline">SERVICES</Link>
            <Link to="/Pricing" onClick={closeMenu} className="block hover:underline">PRICING</Link>
            <Link to="/Contact" onClick={closeMenu} className="block hover:underline">CONTACT</Link>
            
            </div>
        )}
      </div>
    </div>
  );
}

export default NavMenu;
