import { Link } from "react-router-dom"

function BusinessName() {
  return (
    <div className="mt-4 ml-12">
      <Link to="/">
        <h1 className="font-russo text-4xl text-sky-800">BESPOKE WEB</h1>
      </Link>
      <Link to="/">
      <h2 className="font-Charmonman text-2xl">ENGINEERS</h2>
      </Link>
    </div>
  );
}

export default BusinessName