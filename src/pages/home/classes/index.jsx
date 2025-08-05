import { useEffect, useRef, useState } from "react";

import star from "@/assets/star.png";
import interfaceClass from "@/assets/user-interface.png";
import jane from "@/assets/jane-cooper.png";
import jenny from "@/assets/jenny-wilson.png";
import esther from "@/assets/esther-howard.png";
import shoaib from "@/assets/shoaib.png";
import design from "@/assets/figma-course.png";
import arrowUp from "@/assets/arrowUpRight.png";

const classes = [
  {
    image: design,
    // timing: '',
    section: "Design",
    title: "Figma UI UX Design..",
    arrowUp: arrowUp,
    text: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
    rating: {
      rating: "4.3",
      stars: star,
      suscribers: "(16,325)",
    },
    cost: {
      image: jane,
      name: "Jane Cooper",
      year: "2001 Enrolled",
      price: 17.84,
    },
  },
  {
    image: shoaib,
    // timing: '',
    section: "Design",
    title: "Learn With Shoaib",
    arrowUp: arrowUp,
    text: "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
    rating: {
      rating: "3.9",
      stars: star,
      suscribers: "(832)",
    },
    cost: {
      image: jenny,
      name: "Jenny Wilson",
      year: "2001 Enrolled",
      price: 8.99,
    },
  },
  {
    image: interfaceClass,
    // timing: '',
    section: "Design",
    title: "Building User Interface..",
    arrowUp: arrowUp,
    text: "Learn how to apply User Experience (UX) principles to your website designs.",
    rating: {
      rating: "4.2",
      stars: star,
      suscribers: "(125)",
    },
    cost: {
      image: esther,
      name: "Esther Howard",
      year: "2001 Enrolled",
      price: 11.7,
    },
  },
  {
    image: design,
    // timing: '',
    section: "Design",
    title: "Building User Interface..",
    arrowUp: arrowUp,
    text: "Learn how to apply User Experience (UX) principles to your website designs.",
    rating: {
      rating: "4.2",
      stars: star,
      suscribers: "(125)",
    },
    cost: {
      image: esther,
      name: "Esther Howard",
      year: "2001 Enrolled",
      price: 11.7,
    },
  },
  {
    image: interfaceClass,
    // timing: '',
    section: "Design",
    title: "Building User Interface..",
    arrowUp: arrowUp,
    text: "Learn how to apply User Experience (UX) principles to your website designs.",
    rating: {
      rating: "4.2",
      stars: star,
      suscribers: "(125)",
    },
    cost: {
      image: esther,
      name: "Esther Howard",
      year: "2001 Enrolled",
      price: 11.7,
    },
  },
];

export default function Classes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const cardWidth = 400; // approximate width of each card (adjust if needed)

  const maxVisibleDots = 5;
  const visibleDotsStart = Math.max(0, currentIndex - 1);
  const visibleDots = classes
    .map((_, i) => i)
    .slice(visibleDotsStart, visibleDotsStart + maxVisibleDots);

  // ✅ Scroll-based index detection
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll to card when dot clicked
  const handleDotClick = (index) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-auto px-4 md:px-8 mt-24 mb-10">
      {/* Title */}
      <div className="mb-10 px-8">
        <span className="text-primary font-bold text-sm">Explore Programs</span>
        <h3 className="text-black text-2xl font-semibold mb-2">
          Our Most Popular Class
        </h3>
        <p className="font-light text-gray2 text-base">
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </p>
      </div>

      {/* Scrollable section */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-10"
        >
          <div data-aos="zoom-in" className="flex gap-6 md:px-5">
            {classes.map((item, idx) => (
              <div
                key={idx}
                className="w-full max-w-[384px] flex-shrink-0 p-3 md:p-8 shadow-md mb-5 rounded-md bg-white transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <img src={item.image} alt={item.title} className="w-full" />
                <span className="text-primary font-bold text-sm">
                  {item.section}
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg pb-2">{item.title}</h4>
                  <img src={item.arrowUp} className="size-5" />
                </div>
                <p className="whitespace-break-spaces text-sm font-light text-gray2 mb-2">
                  {item.text}
                </p>

                <div className="flex justify-start items-center gap-2">
                  <span className="font-semibold text-sm text-primary">
                    {item.rating.rating}
                  </span>
                  <div className="flex justify-between items-center gap-1">
                    {[0, 1, 2, 3, 4].map((_, idx) => (
                      <img
                        src={item.rating.stars}
                        key={idx}
                        alt="a star"
                        className="size-3"
                      />
                    ))}
                  </div>
                  <span className="font-light text-gray1 text-sm">
                    {item.rating.suscribers}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <div className="flex justify-between items-center gap-3">
                    <img src={item.cost.image} />
                    <div>
                      <h5 className="text-[0.9rem] text-semibold">
                        {item.cost.name}
                      </h5>
                      <span className="text-[0.7rem] font-[100] text-gray2">
                        {item.cost.year}
                      </span>
                    </div>
                  </div>
                  <span className="text-primary font-bold text-[1.1rem]">
                    ${item.cost.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Dots (scroll controlled) */}
        <div className="flex justify-center gap-2 mt-6">
          {visibleDots.map((i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-8 bg-primary" : "w-2 bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <button className="mt-12 p-2 w-[170px] rounded-md text-sm font-semibold bg-gray3 border border-gray1">
            Explore all programs
          </button>
        </div>
      </div>
    </div>
  );
}
