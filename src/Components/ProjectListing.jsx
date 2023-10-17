import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { styles } from "../styles";
import { Reveal } from "../hoc/Reveal";
import {
  SectionHeadingmd,
  SectionHeadingsm,
} from "../Components/SectionHeading";
import { useScroll, motion, useTransform, inView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/Activesectioncontext";
import useInViewHook from "../utils/InViewHook";
import { ProjectDetails } from "../constants";

const ProjectCard = ({ image, gitLink, extLink, desc, techUsed }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className={`min-w-[256px] w-[70%] lg:w-full max-w-[456px] bg-opacity-0 rounded-lg 
      flex flex-wrap flex-col justify-evenly items-center`}
    >
      <div
        className="w-full h-[230px] bg-white rounded-xl"
        id="imgWrapper"
      ></div>
      <div className=" flex flex-col gap-4 mt-5 w-full" id="Description">
        <div className="flex gap-5 items-center " id="cardTitlebar">
          <a
            href={gitLink}
            target="blank"
            rel="noopener noreferrer"
            className="text-aqua text-2xl hover:text-hotmag"
          >
            <FaGithub />
          </a>
          <a
            href={extLink}
            target="blank"
            rel="noopener noreferrer"
            className="text-aqua text-xl hover:text-hotmag"
          >
            <FaExternalLinkAlt />
          </a>
        </div>

        <p className="text-white">{desc}</p>
        {/* <div
          className=" w-full flex flex-wrap gap-2  text-hotmag"
          id="TechUsed"
        >
          {techUsed.map((tech, index) => (
            <p key={Math.random() * index}>{tech}</p>
          ))}
        </div> */}
        <ul className="flex flex-wrap gap-3 font-normal text-base">
          {techUsed.map((text, index) => (
            <li
              key={Math.random() * index}
              className="bg-aqua px-4 py-2 rounded-full text-black"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default function ProjectListing() {
  // const { ref, inView } = useInView({
  //   threshold: 0.2,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Projects");
  //   } else {
  //     setActiveSection("");
  //   }
  // }, [inView, timeOfLastClick]);
  const ref = useInViewHook("Projects", 0.5);
  return (
    <section
      ref={ref}
      className={`w-full bg-black`}
      id="Projects"
      data-section-id="projects"
    >
      <SectionHeadingsm>Projects</SectionHeadingsm>
      <SectionHeadingmd>Projects</SectionHeadingmd>
      <div
        className="grid max-w-full mx-auto grid-cols-1 
         gap-9 

        justify-items-center 
        items-center py-10 md:pb-0"
        id="ProjectCardWrapper"
      >
        {ProjectDetails.map((item) => {
          // const {name, image, gitLink, extLink,techUsed} = item
          return <ProjectCard key={item.name} {...item} />;
        })}
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </section>
  );
}
