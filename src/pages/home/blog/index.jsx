import uxMapping from "@/assets/ux-mapping.png";
import agile from "@/assets/agile-development.png";
import threePillars from "@/assets/three-pillars.png";

const blog = [
  {
    image: threePillars,
    date: "November 16, 2014",
    heading: "Three Pillars of User Delight",
    text: "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
    sections: ["research", "UI UX"],
  },
  {
    image: uxMapping,
    date: "September 24, 2017",
    heading: "UX Mapping Methods",
    text: "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
    sections: ["research", "UI Design"],
  },
  {
    image: agile,
    date: "March 13, 2014",
    heading: "Agile Development Projects and Usability",
    text: "Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.",
    sections: ["programming", "research", "Development"],
  },
];

export default function Blog() {
  return (
    <div className="px-6 md:px-20 my-20">
      <h3 className="text-2xl font-semibold mb-5">Our recent blogs</h3>

      <div className="grid grid-cols-1 lg:[grid-template-columns:1fr_1fr_2fr] gap-8">
        {blog.map((item, index) => {
          // Third item gets special layout
          if (index === 2) {
            return (
              <div
                key={index}
                data-aos="fade-up"
                className="lg:row-span-2 lg:col-start-3 lg:row-start-1 bg-white flex flex-col justify-start"
              >
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full object-cover mb-4"
                />
                <div className="">
                  <p className="text-sm text-primary font-bold mb-3">
                    {item.date}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{item.heading}</h3>
                  <p className="text-gray2 text-sm">{item.text}</p>
                </div>
                <div className="flex justify-start items-center gap-4 mt-4">
                  {item.sections.map((tag, idx) => {
                    const colorClass =
                      idx === 0
                        ? "bg-orangelight text-orange"
                        : idx === 1
                        ? "bg-purplelight text-purple"
                        : "bg-pinklight text-pink";

                    return (
                      <span
                        key={idx}
                        data-aos="fade-down"
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${colorClass}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          }

          // Default layout for first two items
          return (
            <div
              key={index}
              data-aos="fade-down"
              className="col-span-2 flex flex-col md:flex-row bg-white items-center"
            >
              <img
                src={item.image}
                alt={item.heading}
                className="w-full max-w-[340px] object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="text-sm text-primary font-bold mb-3">
                  {item.date}
                </p>
                <h3 className="text-md font-semibold mb-2">{item.heading}</h3>
                <p className="text-gray2 text-sm">{item.text}</p>

                <div className="flex justify-start items-center gap-4 mt-4">
                  {item.sections.map((tag, idx) => {
                    const colorClass =
                      idx === 0
                        ? "bg-pinklight text-pink "
                        : idx === 1
                        ? "bg-purplelight text-blue"
                        : "bg-orangelight text-orange ";

                    return (
                      <span
                        key={idx}
                        data-aos="fade-down"
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${colorClass}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
