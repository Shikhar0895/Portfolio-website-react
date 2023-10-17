import HeroSection from "./HeroSection";
import About from "./About";
import ProjectListing from "./ProjectListing";
import Experience from "./Experience";
import ContactMe from "./ContactMe";

export default function Home() {
  return (
    <main className=" flex flex-col items-center px-[2.5rem] sm:px-[13vw] pt-[136px] md:gap-24 md:pt-[152px] w-full pb-6 bg-black ">
      <HeroSection />
      <About />
      <ProjectListing />
      <Experience />
      <ContactMe />
    </main>
  );
}
