import { useState } from "react";


const faqs = [
    {
      question: "What kind of websites do you build?",
      answer:
        "We build clean, custom-coded websites for individuals and small businesses — including landing pages, portfolios, and service-based sites. E-commerce is not currently available, but we plan to offer it very soon.",
    },
    {
      question: "Do you use WordPress or a website builder?",
      answer:
        "No — we build all websites from scratch using HTML, CSS, JavaScript, and React (a popular frontend framework).",
    },
    {
      question: "Why is a custom-coded site better than WordPress?",
      answer:
        "Custom code means your site is faster, more secure, and designed exactly to your needs — without relying on bloated templates or plugins that can slow your site down. WordPress can be great for some users, but it often comes with extra code, slower load times, and maintenance hassles. Our custom-coded sites are lightweight, fully customizable, and built specifically for your business — no unnecessary features.",
    },
    {
      question: "How is my website hosted?",
      answer:
        "We host all websites on Firebase, a fast and secure platform that keeps your site running reliably.",
    },
    {
      question: "Will you help with domain names?",
      answer:
        "Yes! We help you purchase your domain and transfer full ownership to you once the website is ready.",
    },
    {
      question: "Why do you ask for a 50% deposit?",
      answer:
        "The deposit confirms your commitment and secures your slot in our schedule. It also covers time spent planning, designing, and developing your site before the final payment is made.",
    },
    {
      question: "How long will it take to finish my website?",
      answer:
        "Most websites are completed in 1–2 weeks depending on the number of pages and how quickly we receive your content.",
    },
    {
      question: "Will I see a preview before launch?",
      answer:
        "Yes — we create a demo version so you can review the layout, design, and features before going live.",
    },
    {
      question: "What’s included in the website?",
      answer:
        "Every website is mobile-friendly, custom-designed, and built using modern code. We can include features like contact forms or animations if needed — everything is tailored to your project.",
    },
    {
      question: "What happens after the website goes live?",
      answer:
        "We offer 7 days of free maintenance for any small tweaks or edits. Ongoing maintenance is available as a separate service if needed.",
    },
    {
      question: "How much do your websites cost?",
      answer:
        "Our pricing is based on the number of pages and features included. We offer fixed packages and can also provide custom quotes if needed.",
    },
    {
      question: "How do we get started?",
      answer:
        "Fill out our contact form and tell us about your project. We’ll follow up with a proposal, and once approved, we begin with a 50% deposit.",
    },
  ];

function FAQs() {
   
    const [openIndex, setOpenIdex] = useState(false)

    const toggleFAQ = (index) => {
      setOpenIdex(index === openIndex ? null : index)
    }


   
      




    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-4xl font-semibold text-center mb-8">FAQs</h1>
      <div className="space-y-2">
       {faqs.map((faq, index) => (
        <div key={index}
        className=" border rounded-lg hover:bg-gray-200 overflow-hidden">
            
            <button className="w-full text-left p-4 font-medium" onClick={()=> toggleFAQ(index)}>{faq.question}</button>
            {openIndex === index && <p className="border-t bg-gray-100 p-4">{faq.answer}</p>}
        </div>
       ))}

</div>
      </div>
      
    );
}

export default FAQs