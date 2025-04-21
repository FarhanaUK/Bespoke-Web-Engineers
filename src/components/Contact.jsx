import { useState } from "react"




function Contact () {
const [value, setValue] = useState("")

const onChange = () => {
setValue = {value, }

}



const onSbumit = (evt) =>{
    evt.preventDefault()
    }


    return (

        <div className="flex flex-col justify-center items-center space-y-4"> 
            <h1 className="font-semibold text-4xl ">Contact Us</h1>
            <p className="text-gray-700">Got a question? Drop a message below!</p>
            <div className="mb-4">

            <form onSubmit={onSbumit} className="flex flex-col">
                <label className="font-semibold">Name
                <input type="text" name="name" value="" onChange="" className="border mb-6 flex flex-col w-full"/>
                </label>

                <label className="font-semibold">Email
                <input type="email" name="email" value="" onChange=""  className="border mb-6 flex flex-col w-full"/>
                </label>

                <label className="font-semibold">Message
                <input type="text" name="message" value="" onChange="" className="border mb-6 flex flex-col w-full "/>
                </label>
 <div>
            <button className="border p-2 rounded-lg bg-black text-white">Send Message</button>

</div>
</form>


               

            <p className="py-2 text-gray-500">or email directly for enquires at <span className="text-blue-500">enquires@bespokewebengineers.com</span></p>
            
            </div>
        </div>
    )
}

export default Contact