//master this section. the styling 



function ProcessingTimeMap() {

  const steps = [
  { text: "Step 1: Book a free Zoom consultation (15–30 mins)" }, // Discovery call
  { text: "Step 2: Pay 50% deposit during the Zoom call to start the project" }, // Lock-in
  { text: "Step 3: Website development phase (1–2 weeks)" }, // Build phase
  { text: "Step 4: Final website delivery and walkthrough" }, // Hand-off
  { text: "Step 5: Final 50% payment due on delivery" }, // Payment completion
  { text: "Step 6: 7-day grace period for small tweaks and adjustments" } // Post-launch support
  
  ];


  return (
    <div>
      <h1 className="font-bold text-4xl flex justify-center my-12">
        What to Expect
      </h1>
      <div className="relative mx-auto w-fit p-8 ">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-300 "></div>

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-1/2 px-4">
                <div className="rounded-lg bg-white p-4 shadow-md">
                  {step.text}
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
