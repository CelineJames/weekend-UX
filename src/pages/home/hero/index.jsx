import bag from "@/assets/bag.png";
import idea from "@/assets/idea.svg";
import speak from "@/assets/speak.png";
import girl from "@/assets/young-girl.png";
import circle from "@/assets/circle-rings.png";
import thinCircle from "@/assets/thin-circle.png";
import greenDot from "@/assets/green-dot.png";
import fiveK from "@/assets/fiveK.png";
import twoK from "@/assets/twoK.png";
import twofifty from "@/assets/two-fifty.png";
import userTesting from "@/assets/UserTesting.png";
import duolingo from "@/assets/duolingo.png";
import codecov from "@/assets/codecov.png";
import magicLeap from "@/assets/magic-leap.png";

export default function Hero() {
  return (
    <div className="bg-hero bg-cover bg-center mt-12 overflow-hidden pt-12 ">
      {/* Main wrapper to hold two sides (text + image) */}
      <div data-aos="fade-down" className="flex w-full px-2 gap-8">
        {/* LEFT */}
        <div className="flex-1 w-full md:flex-1 relative mt-20 pl-2 md:pl-16">
          <img
            src={circle}
            alt="thin circles"
            className="absolute w-[414px] h-[414px] -top-[90px] -left-[20px]"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            Up Your <span className="text-primary">Skills</span> To{" "}
            <span className="text-primary">Advance</span> Your{" "}
            <span className="text-primary">Career</span> Path
          </h1>
          <p className="mb-8">
            Learn UI-UX Design skills with Weekend UX. The latest online
            learning system and material that help your knowledge grow.
          </p>
          {/* buttons div */}
          <div className="flex gap-4 mb-10">
            <button className="bg-primary text-white px-5 py-3 rounded cursor-pointer">
              Get Started
            </button>
            <button className="bg-primarylight text-primary px-5 py-3 rounded cursor-pointer">
              Get Free Trial
            </button>
          </div>
          {/* icons div */}
          <div className="flex">
            <div className="flex items-center gap-2">
              <img src={speak} alt="speaking icon" className="w-6 h-6" />
              <span>Public Speaking</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={bag} alt="career icon" className="w-6 h-6" />
              <span>Career Oriented</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={idea} alt="idea icon" className="w-6 h-6" />
              <span>Creative Thinking</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className=" hidden flex-1 lg:flex justify-end items-center relative pr-16">
          <img
            src={greenDot}
            alt="green dot"
            className="absolute top-[400px] right-[530px] size-9"
          />
          <img
            src={thinCircle}
            alt="thin circle"
            className="absolute w-[495px] h-[495px] -top-[10px] right-[80px]"
          />
          <img
            src={twoK}
            alt="icon with 2k on it"
            className="absolute w-[214px] h-[120px] top-[180px] left-[30px] z-[999]"
          />
          <img
            src={fiveK}
            alt="icon with 5k on it"
            className="absolute w-[160px] h-[189px] -top-[10px] right-[40px] z-[999]"
          />
          <img
            src={twofifty}
            alt="icon with 250k on it"
            className="absolute w-[200px] h-[120px] -bottom-[4%] right-[6%] z-[999]"
          />
          {/* hero image or illustration */}
          <div className="w-[495px] h-[495px] bg-primary rounded-full backdrop-blur-md relative overflow-y-hidden">
            <img
              src={girl}
              alt="female student holding books"
              className="fixed -bottom-[2px] left-[220px] -translate-x-1/2"
            />
          </div>
        </div>
      </div>
      {/* supporters logo */}
      <div
        data-aos="fade-up"
        className="flex flex-wrap relative items-start md:items-center gap-6 justify-center lg:justify-between mt-24 px-4 lg:px-16 lg:mr-36"
      >
        <img
          src={greenDot}
          alt="a green dot"
          className="absolute size-4 -top-[70%] right-[78%]"
        />
        <span className="flex flex-col items-center font-thin">
          <span className="text-primary font-bold text-3xl">250+</span>
          collaboration
        </span>
        <img src={duolingo} alt="duolingo-icon" />
        <img src={codecov} alt="codecov-icon" />
        <img src={userTesting} alt="userTesting-icon" />
        <img src={magicLeap} alt="magicleap-icon" />
        <img
          src={circle}
          alt="circle rings"
          className="absolute -bottom-[40px] -right-[150px]"
        />
      </div>
    </div>
  );
}
