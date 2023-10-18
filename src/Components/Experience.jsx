import { styles } from "../styles";
import { Reveal } from "../hoc/Reveal";
import { useEffect, useRef, useState } from "react";
import {
  SectionHeadingmd,
  SectionHeadingsm,
} from "../Components/SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/Activesectioncontext";
import useInViewHook from "../utils/InViewHook";
import { motion } from "framer-motion";
import { exp } from "../constants";

const ExpCardWrapper = () => {
  const { company, duration, designation, location, desc, Tech } = exp;
  return (
    <div className="px-3 py-10 md:pb-0  w-full">
      <div
        className="w-full mb-7 flex justify-between flex-wrap items-baseline"
        id="ExpTitle"
      >
        <span className="text-[22px] text-hotmag font-semibold">{company}</span>
        <span className="text-lg text-aqua">{duration}</span>
      </div>
      <div
        className="w-full mb-3 gap-9 flex justify-between text-aqua"
        id="Designation"
      >
        <span className="text-lg">{designation}</span>
        <span className="text-lg">{location}</span>
      </div>
      <div
        className="w-full font-normal mb-[18px] text-aqua "
        id="ExpDescription"
      >
        <ul className="flex flex-col gap-4 leading-relaxed">
          {desc.map((text, index) => (
            <li key={Math.random() * index} className="list-disc">
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-3 text-white font-medium" id="Tech">
        <ul className="flex flex-wrap gap-3 font-medium">
          {Tech.map((text, index) => (
            <li
              key={Math.random() * index}
              className="bg-aqua px-4 py-2 rounded-full text-black "
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  // const { ref, inView } = useInView({
  //   threshold: 0.7,
  // });

  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Exp");
  //   }
  // }, [inView]);
  const ref = useInViewHook("Exp", 0.7);
  return (
    <motion.section
      ref={ref}
      className={`bg-black`}
      id="Exp"
      data-section-id="Exp."
      initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <SectionHeadingsm>Experience</SectionHeadingsm>
      <SectionHeadingmd>Experience</SectionHeadingmd>
      <ExpCardWrapper />
    </motion.section>
  );
};
export default Experience;
