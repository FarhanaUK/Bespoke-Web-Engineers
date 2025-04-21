import {Link} from "react-router-dom"


function NavMenu() {

    return(
        <div className="flex justify-end items-center space-x-12 mt-6 mr-32">
       <Link to="/About" className="hover:underline">ABOUT</Link>
       <Link to="/Services" className="hover:underline">SERVICES</Link>
       <Link to="/Pricing" className="hover:underline">PRICING</Link>
       <Link to="/BookNow" className="border rounded-lg bg-black hover:bg-slate-800 text-white px-4 py-2 inline-flex items-center">BOOK NOW</Link>
        </div>
    )
}

export default NavMenu