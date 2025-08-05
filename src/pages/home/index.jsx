import Blog from "./blog";
import Classes from "./classes";
import Hero from "./hero";
import Reviews from "./reviews";
import Services from "./services";
import Tutors from "./tutors";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Classes />
      <Tutors />
      <Reviews />
      <Blog />
    </>
  );
}
