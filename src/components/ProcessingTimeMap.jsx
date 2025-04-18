//master this section. the styling 



function ProcessingTimeMap() {

  const steps = [
    {
      title: "1️⃣ Pre-Call Form",
      text: "Fill out a short form before our Zoom meeting. This gives our developers the details needed to create a tailored demo in advance."
    },
    {
      title: "2️⃣ Zoom Consultation",
      text: "We review the demo and discuss your business goals. If you're happy to proceed, a 50% deposit secures your spot."
    },
    {
      title: "3️⃣ Design & Development (1–2 Weeks)",
      text: "Your custom website is built based on our discussion and feedback."
    },
    {
      title: "4️⃣ Launch & Final Payment",
      text: "Once the site is ready, we launch. Final 50% payment is due within 24 hours of launch."
    },
    {
      title: "5️⃣ 7-Day Grace Period",
      text: "Includes minor tweaks and adjustments after launch (if needed)."
    },
    {
      title: "6️⃣ Monthly Maintenance (Optional)",
      text: "Keep your site running smoothly with regular updates, fixes, and support."
    }
  
  ];


  return (
    <div className="bg-slate-50 rounded-xl py-16 mb-16">
      <h1 className="font-bold text-4xl text-center mb-16 ">
        What to Expect
      </h1>
      <div className="relative mx-auto w-fit p-8">
        <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gray-300 "></div>

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              
              <div className="w-1/2 px-4">
                <div className="rounded-lg bg-white p-6 shadow-md">
                 <p className="font-bold text-lg text-gray-900 mb-2">{step.title}</p>
                 <p className="text-gray-600">{step.text}</p>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 border-2 border-white"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-12" />
    </div>
  );
}

export default ProcessingTimeMap;
