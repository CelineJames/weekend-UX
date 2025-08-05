import LinkedIn from "@/assets/linkedIn.png";
import Twitter from "@/assets/twitter.png";
import Webb from "@/assets/webb.png";
import Courtney from "@/assets/courthney.png";
import Marvin from "@/assets/marvin.png";
import Flores from "@/assets/flores.png";

const tutors = [
  {
    image: Webb,
    name: "Theresa Webb",
    role: "Application Support Analyst Lead",
    portfolio:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    socials: {
      twitter: Twitter,
      linkedIn: LinkedIn,
    },
  },
  {
    image: Courtney,
    name: "Courtney Henry",
    role: "Director, Undergraduate Analytics and Planning",
    portfolio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    socials: {
      twitter: Twitter,
      linkedIn: LinkedIn,
    },
  },
  {
    image: Flores,
    name: "Albert Flores",
    role: "Career Educator",
    portfolio: "Former PM for Linear, Lambda School, and On Deck.",
    socials: {
      twitter: Twitter,
      linkedIn: LinkedIn,
    },
  },
  {
    image: Marvin,
    name: "Marvin McKinney",
    role: "Co-op & Internships Program & Operations Manager",
    portfolio: "Former frontend dev for Linear, Coinbase, and Postscript.",
    socials: {
      twitter: Twitter,
      linkedIn: LinkedIn,
    },
  },
];

export default function Tutors() {
  return (
    <div className="w-full h-auto px-4 md:px-8 mt-14 pb-8">
      <div data-aos="fade-up" className="text-center md:w-2/4 mx-auto">
        <span className="text-sm text-primary font-bold">Tutors</span>
        <h3 className="font-semibold text-3xl my-3">Meet the Heroes</h3>
        <p className="text-gray2 text-md font-extralight">
          On Weekend UX, instructors from all over the world instruct millions
          of students. We offer the knowledge and abilities.
        </p>
      </div>
      <div
        data-aos="zoom-in"
        className="mt-10 flex flex-wrap justify-center gap-4 items-center p-4 md:p-8"
      >
        {tutors.map((tutor, idx) => (
          <div
            key={idx}
            className="w-[300px] h-[340px] bg-gray3 flex flex-col justify-center items-center text-center rounded-md py-5 px-2"
          >
            <img src={tutor.image} alt="picture of a tutor" />
            <h4 className="font-semibold text-lg mt-4">{tutor.name}</h4>
            <span className="text-primary text-[0.8rem] mb-2">
              {tutor.role}
            </span>
            <p className="whitespace-break-spaces text-gray2">
              {tutor.portfolio}
            </p>
            <div className="flex justify-center items-center gap-4 mt-14">
              <img src={tutor.socials.twitter} alt="twitter icon" />
              <img src={tutor.socials.linkedIn} alt="linkedIn icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
