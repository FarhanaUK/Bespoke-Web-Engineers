
import { Link } from "react-router-dom"

function Footer() {

    return (
      <div className="flex items-center justify-">
        <footer>
          <nav>
            <Link to="/TermsAndConditions">Terms & Conditions</Link>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
            <Link to="/Contact">Contact</Link>
          </nav>
        </footer>
      </div>
    );
}

export default Footer