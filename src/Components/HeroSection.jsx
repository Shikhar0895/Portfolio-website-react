import { profileMob, profilePic } from "../assets";
import { sidebarLinks, navbarIcons } from "../constants/index";
import { Reveal } from "../hoc/Reveal";
import { CV } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "../context/Activesectioncontext";
import useInViewHook from "../utils/InViewHook";

const HeroSection = () => {
  const ref = useInViewHook("home", 1);

  const scrollToSection = (sectionID) => {
    const element = document.getElementById(sectionID);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section ref={ref} className="bg-black text-aqua w-full" id="home">
        {/* ------------------vw<768------------------------------------------------------------- */}
        <motion.div
          className=" md:hidden flex flex-col items-center gap-5 pb-[100px]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <div
            className="flex relative justify-center rounded-full bg-[#f4ae2c]"
            id="imgWrapper"
          >
            <img
              className="rounded-xl w-[180px]"
              src={profileMob}
              alt="profile"
            />
          </div>
          <div
            className="flex text-center flex-col flex-nowrap gap-5 justify-center max-w-[64vw] mx-auto"
            id="heroInfoWrapper"
          >
            {/*  */}
            <span className="custom-font text-[52px] font-semibold">
              Hey,I'm Shikhar<span className=" text-hotmag">.</span>{" "}
            </span>
            {/*
             */}
            <span className="mt-[-12px] font-light text-3xl ">
              I build things for the{" "}
              <span className="text-hotmag text-3xl">Web .</span>
            </span>

            {/*
             */}
            <span className="font-light text-lg">
              Front-End Developer | Ocassional Designer{" "}
              <span className="text-hotmag">.</span>
            </span>
            {/*  */}
            <div
              className="flex flex-col justify-center items-center gap-6 flex-wrap sm:flex-row sm:gap-8 sm:mt-[20px]"
              id="heroButtons<768"
            >
              <button
                className="px-6 py-3 text-lg bg-aqua text-black rounded-md hover:scale-110 focus:scale-110 active:scale-105 transition"
                onClick={() => {
                  scrollToSection("Contact");
                }}
              >
                Contact Me
              </button>

              <button className="sm:px-7 sm:py-3 sm:text-lg px-6 py-2 border-2 border-hotmag text-white rounded-md hover:scale-110 focus:scale-110 active:scale-105 transition">
                <a href={CV} target="blank" rel="noopener noreferrer">
                  Resume
                </a>
              </button>

              <ul className="flex gap-6 ">
                {navbarIcons.map((iconObj) => {
                  const { icon, link, id } = iconObj;
                  return (
                    <li
                      key={id}
                      className="hover:scale-110 focus:scale-110 active:scale-105 transition"
                    >
                      <a href={link} target="blank">
                        <span className="text-aqua sm:text-3xl text-[1.8rem]  hover:text-hotmag ">
                          {icon}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
        {/* ---------------------vw > 768px----------------------------------------------------- */}

        <div className="hidden md:block w-full">
          <motion.div
            ref={ref}
            className={`hidden md:flex gap-[1.75rem] pb-12 md:pb-14 w-full justify-center`}
            id="vw>768"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          >
            <div
              className=" flex flex-col justify-center w-max"
              id="heroInfoWrapper"
            >
              <h1 className="font-bold text-6xl ">
                Hey,I'm Shikhar<span className=" text-hotmag">.</span>{" "}
              </h1>

              <p className="font-medium text-4xl my-8 after:content-['Web.'] after:text-hotmag">
                I build things for the{" "}
              </p>

              <p className="font-light text-lg mb-8 after:content-['.'] after:text-hotmag">
                Frontend Developer & ocassional designer
              </p>

              <div className="flex items-center gap-6 flex-wrap">
                <button
                  className="px-6 py-3 text-lg bg-aqua text-black rounded-md hover:scale-110 focus:scale-110 active:scale-105 transition"
                  onClick={() => {
                    scrollToSection("Contact");
                  }}
                >
                  Contact Me
                </button>

                <button className="sm:px-7 sm:py-3 sm:text-lg px-6 py-2 border-2 border-hotmag text-white rounded-md hover:scale-110 focus:scale-110 active:scale-105 transition">
                  <a
                    href={CV}
                    target="blank"
                    download={true}
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </button>

                <ul className="flex space-x-6 mr-5 ">
                  {navbarIcons.map((iconObj) => {
                    const { icon, link, id } = iconObj;
                    return (
                      <li
                        key={id}
                        className="hover:scale-110 focus:scale-110 active:scale-105 transition"
                      >
                        <a href={link} target="blank">
                          <span className="text-aqua sm:text-3xl text-[1.3rem]  hover:text-hotmag ">
                            {icon}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div
              className="sm:flex relative rounded-lg max-w-[262px] h-max bg-[#da8f27]  hover:scale-105 transition hover:shadow-md hover:shadow-aqua "
              id="imgWrapper"
            >
              <img
                className="rounded-xl object-cover drop-shadow-lg hover:filter-[sepia]"
                loading="lazy"
                src={profilePic}
                alt="profile"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
