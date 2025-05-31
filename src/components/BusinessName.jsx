import { Link } from "react-router-dom"

function BusinessName() {
  return (
    <div className="mx-4 sm:mx-12 md:mx-24 mt-4">
      <Link to="/">
        <h1 className="font-russo text-2xl sm:text-3xl md:text-4xl text-[#26B7FF] text-center sm:text-left">BESPOKE WEB</h1>
      </Link>
      <Link to="/">
      <h2 className="font-charmonman text-lg sm:text-xl md:text-2xl text-center sm:text-left">ENGINEERS</h2>
      </Link>
    </div>
  );
}

export default BusinessName