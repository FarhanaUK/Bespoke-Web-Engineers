import { useState } from "react"


function Contact () {
const [value, setValue] = useState("")

    return (

        <div className="flex flex-col justify-center items-center space-y-4"> 
            <h1 className="font-semibold text-4xl ">Contact Us</h1>
            <p>Got a question? Drop a message below!</p>
            <div className="w-1/2 flex flex-col mb-4">

                <lable>Name</lable>
                <input type="text" name="name" value="" className="border mb-6"/>
                <lable>Email</lable>
                <input type="email" name="email" value="" className="border mb-6"/>
                <lable>Message</lable>
                <input type="text" name="message" value="" className="border mb-6 "/>
                <div>
            <button className="border p-2 rounded-lg bg-black text-white">Send Message</button>

            <p className="py-2 text-gray-500">or email directly for enquires at <span className="text-blue-500">enquires@bespokewebengineers.com</span></p>
            </div>
            </div>
        </div>
    )
}

export default Contact