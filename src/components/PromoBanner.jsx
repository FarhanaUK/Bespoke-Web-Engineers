import { Link } from "react-router-dom"

function PromoBanner() {

    return (
    <div className="w-full bg-white border-b-4 border-yellow-400 shadow-md flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
      <div className="text-gray-800 max-w-lg">
        <h2 className="text-3xl font-extrabold mb-1">🎉 Grand Launch Special!</h2>
         <p className="text-lg font-medium">
      Get <span className="text-yellow-500 font-semibold">50% off</span> our Maintenance Plan <br />
      <span className="font-semibold">+ Reduced Prices</span> on all new website builds! Limited spots available.
    </p>
      </div>
      <Link to="/Contact" className="self-stretch md:self-auto">
        <button className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg px-8 py-3 shadow-lg transition">
          Book Your Spot
        </button>
      </Link>
    </div>
  )
}

export default PromoBanner