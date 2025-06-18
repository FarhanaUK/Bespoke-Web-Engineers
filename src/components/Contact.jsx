import { useState } from "react"



function Contact () {
const [value, setValue] = useState({name:"", email:"", message:""})

function handleChange(e) {
const {name, value: inputValue} = e.target
setValue(prev => ({
    ...prev, [name]: inputValue
}))
}



const onSubmit = (evt) =>{
    evt.preventDefault()
    }


    return (

        <div className="flex flex-col justify-center items-center space-y-4"> 
            <h1 className="font-semibold text-4xl ">Contact Us</h1>
            <p className="text-gray-700">Got a question? Drop a message below!</p>
            <div className="mb-4">

            <form onSubmit={onSubmit} className="flex flex-col">
                <label className="font-semibold">Name
                <input type="text" name="name" value={value.name} onChange={handleChange} className="border mb-6 w-full font-normal"/>
                </label>

                <label className="font-semibold">Email
                <input type="email" name="email" value={value.email} onChange={handleChange}  className="border mb-6 w-full font-normal"/>
                </label>

                <label className="font-semibold">Message
                <textarea name="message" value={value.message} onChange={handleChange} rows="4" className="border mb-6 w-full font-normal"></textarea>
                </label>
 <div>
            <button className="border p-2 rounded-lg bg-black text-white">Send Message</button>

</div>
</form>


               

            <p className="py-2 text-gray-500">or email directly for enquires at{" "}  
            <a href="mailto:enquires@bespokewebengineers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
            >enquires@bespokewebengineers.com</a>
            </p>
                
            
            </div>
        </div>
    )
}

export default Contact