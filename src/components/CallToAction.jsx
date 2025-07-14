import { Link } from "react-router-dom"

function CallToAction() {

    return(
        <div className="text-center space-y-4 my-20">
        <h2 className="text-4xl font-bold">
          Ready to grow your online presence?
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Contact us today to discuss your project and see how we can help
          elevate your brand with a custom web solution.
        </p>
        <p className="font-semibold text-lg italic text-slate-600">
          “Opportunity is a haughty goddess who wastes no time with those who
          are unprepared.”
        </p>
        <p className="ftext-slate-400 italic">— The Richest Man in Babylon</p>
        <Link to="/Contact">
          <button className="border rounded-lg hover:bg-blue-500 p-3 px-6 my-12 bg-[#26B7FF] text-white transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    )
}

export default CallToAction