import laptopImage from "@/assets/laptop-image.png";
import officeCorridor from "@/assets/office-corridor.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function AboutUs() {
  return (
    <div
      data-aos="fade-down"
      className="w-full max-w-full mt-24 mb-10 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 px-6 md:px-14"
    >
      {/* Text Content */}
      <div className="flex-1 mt-4 md:mt-8">
        <h1 className="text-3xl md:text-5xl font-bold text-primarygreen mb-4">
          About Us
        </h1>
        <h2 className="text-black text-xl md:text-3xl font-semibold mb-6 md:w-[70%]">
          <span className="text-orange">WEEKEND UX</span> Providing The Best
          Opportunities To The Students Around The Glob.
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          Weekend UX, is a UI/UX Design Academy in Delhi involved in User
          Experience and User Interface Training and Consulting. It was started
          in 2023 and passionate towards User Interface Design/ User Experience
          Design, Human Computer Interaction Design. Humanoid is gushing towards
          competence to acquire knowledge and have a wide understanding towards
          the sphere through the foremost courses in the area of UI/UX Design,
          by strengthening up your skills, for your golden future
        </p>

        <button className="mt-6 md:mt-8 px-4 py-3 rounded-3xl text-sm bg-primary text-white flex items-center gap-1 group">
          Join Us
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-end items-center">
        <div className="relative w-[300px] h-[300px] md:w-[474px] md:h-[474px] bg-gray4 backdrop-blur-md rounded-lg">
          <img
            src={officeCorridor}
            alt="office corridor"
            className="absolute -top-4 -right-10 w-[150px] md:w-auto"
          />
          <img
            src={laptopImage}
            alt="laptop"
            className="absolute -bottom-4 -left-10 w-[150px] md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
