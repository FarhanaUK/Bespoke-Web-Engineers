import { useState } from "react";

function Contact() {
  const [value, setValue] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  }

  // Replace onSubmit with this async function that sends data to your Firebase function
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      const res = await fetch("https://YOUR_CLOUD_FUNCTION_URL/sendContactEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });

      if (!res.ok) throw new Error("Failed to send message");

      alert("Message sent!");
      setValue({ name: "", email: "", message: "" }); // Clear form after success
    } catch (err) {
      alert("Error sending message");
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-4 pt-8 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
      <h1 className="font-semibold text-4xl ">Contact Us</h1>
      <p className="text-gray-700">Got a question? Drop a message below!</p>
      <div className="mb-4">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="font-semibold">
            Name
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
              required
              className="border mb-6 w-full font-normal"
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
              className="border mb-6 w-full font-normal"
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
              className="border mb-6 w-full font-normal"
            ></textarea>
          </label>

          <div>
            <button className="border p-2 rounded-lg bg-black text-white">Send Message</button>
          </div>
        </form>

        <p className="py-2 text-gray-500">
          or email directly for enquires at{" "}
          <a
            href="mailto:info@bespokewebengineers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            info@bespokewebengineers.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
