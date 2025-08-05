import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import design from "@/assets/design.png";
import ux from "@/assets/ux.png";
import interfaceIcon from "@/assets/interface.png";

const services = [
  {
    heading: "Interaction Design",
    text: "Lessons on design that cover the most recent developments.",
    image: design,
  },
  {
    heading: "UX Design Course",
    text: "Classes in development that cover the most recent advancements in web.",
    image: ux,
  },
  {
    heading: "User Interface Design",
    text: "User Interface Design courses that cover the most recent trends",
    image: interfaceIcon,
  },
  {
    heading: "Design Thinking",
    text: "Innovative thinking methods applied to product development.",
    image: design,
  },
  {
    heading: "Prototyping Tools",
    text: "Learn to build and test ideas faster using modern tools.",
    image: interfaceIcon,
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0); // or based on scroll later
  const maxVisibleDots = 4;

  const visibleDotsStart = Math.max(0, currentIndex - 1); // Show 4 max centered around current
  const visibleDots = services
    .map((_, i) => i)
    .slice(visibleDotsStart, visibleDotsStart + maxVisibleDots);

  return (
    <div className="w-full h-auto mt-24">
      {/* Title Section */}
      <div
        data-aos="fade-right"
        className="text-center md:w-[60%] mx-auto mb-10"
      >
        <span className="text-sm text-primary font-semibold">Our Services</span>
        <h2 className="text-3xl font-semibold">
          Fostering a playful & engaging learning environment
        </h2>
      </div>

      {/* Scrollable Cards */}
      <div className="overflow-x-auto whitespace-nowrap px-4 md:px-8 scrollbar-hide mb-10">
        <div data-aos="fade-left" className="flex py-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="w-full max-w-[412px] bg-white p-7 rounded-xl shadow-lg flex-shrink-0 transition-all duration-300 hover:bg-primary hover:text-white group"
              onMouseEnter={() => setCurrentIndex(idx)} // simulate active
            >
              <div className="flex gap-4 items-center justify-start mb-4">
                <img src={service.image} alt="icon" className="size-12" />
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-white">
                  {service.heading}
                </h3>
              </div>
              <p className="text-gray-600 whitespace-break-spaces group-hover:text-white mb-5">
                {service.text}
              </p>
              <button className="flex items-center text-primary group-hover:text-white font-semibold hover:underline">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Dot Carousel */}
        <div className="flex justify-center gap-2 mt-6">
          {visibleDots.map((i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-8 bg-primary" : "w-2 bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
