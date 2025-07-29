import { useState } from "react";

function Contact() {
  const [value, setValue] = useState({ name: "", email: "", message: "" })
  const [result, setResult] = useState("");
  const [showSuccess, setShowSuccess] = useState(false)

  function handleChange(e) {
    const { name, value: inputValue } = e.target
    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    const formData = new FormData(event.target);
    formData.append("access_key", "a304ab02-dff2-4078-9398-6b2c4160e918")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      setShowSuccess(true)
      event.target.reset()
      setValue({ name: "", email: "", message: "" })
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4 pt-8 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto relative">
      <h1 className="font-semibold text-4xl">Contact Us</h1>
      <p className="text-gray-700">Got a question? Drop a message below!</p>

      
      {showSuccess && (
        <div className="absolute top-10 bg-white border border-[#26B7FF]  rounded-lg shadow-lg p-6 w-80 text-center z-10">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-green-600 text-4xl">✔</span> 
            <p className="font-bold text-lg text-green-700">Success</p>
            <p className="text-gray-700">Message sent successfully.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 px-4 py-2 bg-[#26B7FF]  text-white rounded hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="mb-4 w-full max-w-xl">
        <form onSubmit={onSubmit} className="flex flex-col">
          <label className="font-semibold">
            Name
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
              required
              className="border mb-6 w-full font-normal p-2"
            />
          </label>

          <label className="font-semibold">
            Email
            <input
              type="email"
              name="email"
              value={value.email}
              onChange={handleChange}
              required
              className="border mb-6 w-full font-normal p-2"
            />
          </label>

          <label className="font-semibold">
            Message
            <textarea
              name="message"
              value={value.message}
              onChange={handleChange}
              rows="4"
              required
              className="border mb-6 w-full font-normal p-2"
            ></textarea>
          </label>

          <div>
            <button className="border p-2 rounded-lg bg-black text-white">
              Send Message
            </button>
          </div>
        </form>

        {result && (
          <p className="mt-4 text-gray-600 font-medium">{result}</p>
        )}

        <p className="py-4 text-gray-500">
          Email directly for booking a call/enquiries at{" "}
          <a
            href="mailto:info@bespokewebengineers.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            info@bespokewebengineers.co.uk
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
