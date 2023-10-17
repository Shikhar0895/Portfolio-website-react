import { HiCode } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { sidebarLinks, sidebarLinksforsm } from "../constants";
import { IoClose } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { easeIn, motion, spring } from "framer-motion";
import {
  useActiveSectionContext,
  ActiveSectionContext,
} from "../context/Activesectioncontext";
import clsx from "clsx";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  /*---------------animation-----------------*/
  const iconVariants = {
    open: {
      opacity: 1,
      rotate: 90,
    },
    closed: {
      opacity: 1,
      rotate: 0,
    },
  };

  const fadeInAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };

  /*-----------------------------------------*/
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionID) => {
    const element = document.getElementById(sectionID);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 160,
        behavior: "smooth",
      });
    }
  };

  return (
    // -------------------------vw>768---------------------------------------------------------------------//
    <header className="z-[999] relative">
      <motion.div
        id="navWrapper vw>768"
        className={`hidden md:flex fixed top-[24px] justify-center items-center w-full h-[80px]`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <nav
          className={`${
            scrolled
              ? "bg-[rgb(27,16,50)] bg-opacity-20 backdrop-blur-lg "
              : "bg-[rgb(29,28,31)] "
          }  justify-center items-center 
           text-aqua 
            shadow-sm shadow-aqua/[0.5]
                rounded-full
                max-w-[615px]
                `}
        >
          <div className="flex justify-center items-center w-full">
            <ul
              className={`flex justify-evenly text-center gap-6  py-[16px] px-8 w-full `}
            >
              {sidebarLinks.map((link) => (
                <motion.li
                  key={link.id}
                  className="h-3/4 flex items-center justify-center relative text-base font-medium"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Link
                    to={`#${link.id}`}
                    className={clsx(
                      "flex w-full items-center justify-center px-4 py-2 rounded-full hover:text-white transition",
                      { "bg-[#353737] text-white": activeSection === link.id }
                    )}
                    onClick={() => {
                      scrollToSection(link.id);
                      setActiveSection(link.id);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.title}
                    {link.id === activeSection && (
                      <motion.span
                        className="bg-[#353737] rounded-full inset-0 absolute -z-10  text-white"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 40,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </nav>
      </motion.div>

      {/* ---------------------vw<768--------------------------------------------------------------------- */}
      <div
        id="navWrapper"
        className={` md:hidden flex fixed  justify-center items-center ${
          toggle ? "top-[105px]" : "top-[15px]"
        } w-full h-[100px]`}
      >
        <nav
          className={`${
            scrolled
              ? "bg-[rgb(27,16,50)] bg-opacity-20 backdrop-blur-lg "
              : "bg-[rgb(29,28,31)]"
          }  flex justify-center items-center  text-aqua fixed
               
                rounded-[20px]
                w-[60%]
                shadow-sm shadow-aqua/[0.5]`}
        >
          <div className="flex flex-col items-center w-full">
            <div className="md:hidden flex justify-between items-center w-[90%] py-[16px] px-[10px]">
              <button
                className=" w-[48px] h-[48px] flex justify-center items-center text-4xl active:scale-90 transition"
                onClick={() => scrollToSection("home")}
              >
                <HiCode />
              </button>

              <motion.button
                className=" w-[48px] h-[48px] flex justify-center items-center text-4xl"
                onClick={() => setToggle(!toggle)}
                variants={iconVariants}
                initial={"closed"}
                animate={toggle ? "open" : "closed"}
              >
                {toggle ? <IoClose /> : <CgMenuRight />}
              </motion.button>
            </div>
            <ul
              className={` flex-col text-center pb-[20px] gap-4 text-lg ${
                toggle ? "flex" : "hidden"
              }`}
            >
              {sidebarLinksforsm.map((link, index) => (
                <li key={link.id} className="text-lg font-semibold">
                  <Link
                    to={`#${link.id}`}
                    className={``}
                    onClick={() => {
                      setActive(link.title);
                      scrollToSection(link.id);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Sidebar;
