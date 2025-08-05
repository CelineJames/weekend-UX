import bulbs from "@/assets/bulbs.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Features() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-14 mt-20 mb-10 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
      {/* Image Section */}
      <div data-aos="slide-right" className="flex-1 w-full flex justify-start">
        <div className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[474px] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[474px] bg-gray4 backdrop-blur-md relative rounded-lg">
          <img
            src={bulbs}
            alt="pictures of light-bulbs"
            className="absolute -bottom-6 sm:-bottom-8 left-4 sm:left-5 w-[90%]"
          />
        </div>
      </div>

      {/* Text Section */}
      <div data-aos="fade-up" className="flex-1 w-full">
        <span className="text-base sm:text-lg md:text-xl font-bold text-primary block mb-3">
          Features
        </span>
        <h2 className="text-black text-2xl sm:text-3xl font-medium mb-4 w-full sm:w-[90%] lg:w-[70%]">
          We are always working to provide you best of the features in all
          aspects.
        </h2>
        <p className="text-sm sm:text-base font-extralight mb-6 sm:mb-10 lg:mb-16 pr-0 lg:pr-12">
          At WEEKENDUX the chief determination is to clear the minds of our
          students about their goals, while making them consistent in their
          ambitions and pushing them to be confident for their journey towards
          the course of time.
        </p>
        <p className="text-sm sm:text-base font-extralight mb-6 sm:mb-10 pr-0 lg:pr-12">
          You will find every little thing on the internet in just a click of
          hand, but here we admire that without knowledge and practice the
          internet may even also fail you in your life.
        </p>

        <button className="mt-4 px-5 py-3 rounded-3xl text-sm bg-primary text-white flex items-center gap-2 group">
          Learn More
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
}
