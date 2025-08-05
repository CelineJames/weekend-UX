import Jacob from "@/assets/review-image.png";
import logo from "@/assets/logo.png";
import { useState, useRef, useEffect } from "react";

const reviews = [
  {
    review:
      "Course was fantastic! It is the master platform for those looking to start a new career or need a refresher.",
    reviewer: {
      image: Jacob,
      name: "Jacob Jones",
      school: "Student, National University",
    },
  },
  {
    review:
      "The learning experience was top-notch. The structure and support made it easy to stay on track and gain confidence.",
    reviewer: {
      image: Jacob,
      name: "Sophia Lee",
      school: "Graduate, University of Lagos",
    },
  },
  {
    review:
      "I loved how practical the lessons were. Real-world examples made everything click. Highly recommend!",
    reviewer: {
      image: Jacob,
      name: "Michael Adeyemi",
      school: "Student, Obafemi Awolowo University",
    },
  },
  {
    review:
      "A very comprehensive and beginner-friendly platform. I finally feel ready to dive into tech with purpose.",
    reviewer: {
      image: Jacob,
      name: "Chinaza Okoro",
      school: "Alumni, Covenant University",
    },
  },
  {
    review:
      "Excellent pacing and mentorship. I landed my first internship just a few weeks after completing the course!",
    reviewer: {
      image: Jacob,
      name: "Aisha Bello",
      school: "Student, University of Ibadan",
    },
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Scroll to card when dot is clicked
  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollX = index * window.innerWidth;
    container.scrollTo({ left: scrollX, behavior: "smooth" });
    setCurrentIndex(index);
  };

  // Optional: update index as user scrolls manually (touch/drag/scroll)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const newIndex = Math.round(container.scrollLeft / window.innerWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const maxVisibleDots = 4;
  const visibleDotsStart = Math.max(
    0,
    Math.min(currentIndex - 1, reviews.length - maxVisibleDots)
  );
  const visibleDots = reviews
    .map((_, i) => i)
    .slice(visibleDotsStart, visibleDotsStart + maxVisibleDots);

  return (
    <>
      <div className="max-w-full overflow-x-hidden bg-primarylight mb-5 py-12">
        <div
          ref={scrollContainerRef}
          className="flex transition-transform duration-500 ease-in-out overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="w-full max-w-[1400px] flex flex-col justify-center items-center flex-shrink-0 md:px-14 py-8 snap-center"
            >
              <img src={logo} alt="school's logo" className="mb-4 w-20" />
              <p className="mb-4 text-navyblue text-2xl md:text-4xl leading-relaxed whitespace-break-spaces text-center">
                {review.review}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex flex-col justify-center items-center mt-4">
                  <img
                    src={review.reviewer.image}
                    alt="reviewer's image"
                    className="w-10 h-10 rounded-full object-cover mb-2"
                  />
                  <span className="block text-navyblue text-sm font-semibold">
                    {review.reviewer.name}
                  </span>
                  <span className="text-sm text-gray2">
                    {review.reviewer.school}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-10">
        {visibleDots.map((i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === i ? "w-8 bg-primary" : "w-2 bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
}
