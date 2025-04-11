import {Link} from "react-router-dom"


function NavMenu() {

    return(
        <div className="flex justify-end space-x-12 mt-6 mr-32">
       <Link to="/About" className="hover:underline">About</Link>
       <Link to="/Services" className="hover:underline">Services</Link>
       <Link to="/Contact" className="hover:underline">Contact</Link>
        </div>
    )
}

export default NavMenu