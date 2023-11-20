import { Techtabs, navbarIcons, sidebarLinks } from "../constants/index";
import { Reveal } from "../hoc/Reveal";
import { styles } from "../styles";
import { useEffect, useRef } from "react";
import { SectionHeadingsm, SectionHeadingmd } from "./SectionHeading";
import { animate, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/Activesectioncontext";
import useInViewHook from "../utils/InViewHook";
import SwiperScroll from "./Swiper";

const About = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };

  const ref = useInViewHook("AboutSection", 0.5);
  return (
    <motion.section
      ref={ref}
      className={`w-full /*scroll-mt-20*/`}
      data-section-id="About"
      id="AboutSection"
      initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <SectionHeadingsm>AboutMe</SectionHeadingsm>
      <SectionHeadingmd>About Me</SectionHeadingmd>
      <div className="flex flex-col justify-center items-center text-aqua w-full text-lg gap-7 pt-7 pb-14 md:pb-0">
        <div className="leftSection text-lg">
          <p className="leading-8 text-center">
            Greetings! I'm Shikhar, a passionate frontend developer with a
            unique journey that began in the world of Java development. My
            transition into the vibrant realm of frontend development was driven
            by an insatiable curiosity for creating intuitive, user-centric
            interfaces that combine aesthetics with functionality.
          </p>
        </div>

        <div className="rightSection max-w-prose">
          <p className="my-6 text-center text-4xl font-semibold">My Skills</p>
          <ul className="flex flex-wrap content-center justify-center my-10 sm:gap-7 gap-3">
            {Techtabs.map((tabs, index) => (
              <motion.li
                key={index}
                className="text-aqua sm:text-xl text-2xl px-4 py-2 border-aqua border-2 rounded-xl  hover:text-hotmag hover:scale-105"
                variants={fadeInAnimation}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                custom={index}
              >
                {tabs}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="w-[3px] h-[64px] mt-[-20px] rounded-md bg-white"></div>
        <p className="leading-8 text-center font-bold text-xl">
          Other than work I draw and paint stuff.
        </p>
        <motion.section
          ref={ref}
          className="w-[120%] h-[400px] bg-black flex justify-center items-center"
          data-section-id="About"
          initial={{ opacity: 0, y: 100 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SwiperScroll />
        </motion.section>

        <motion.p
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Do check out all of my artworks on{" "}
          <span className="text-hotmag font-semibold">
            <a
              href={navbarIcons[0].link}
              target="blank"
              rel="noopener noreferrer"
            >
              Instagram.
            </a>
          </span>
        </motion.p>
      </div>
    </motion.section>
  );
};
export default About;
