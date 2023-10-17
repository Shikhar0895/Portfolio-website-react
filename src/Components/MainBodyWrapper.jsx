import Sidebar from "./Navbar";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ProjectListing from "./ProjectListing";
import ContactMe from "./ContactMe";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActiveSectionContextProvider from "../context/Activesectioncontext";

// const MainBodyWrapper = () => {
//   return (
//     <Router>
//       <div
//         className=" bg-[#41dffb] w-full relative overflow-x-hidden"
//         id="MainBodyWrapper"
//       >
//         <Sidebar />
//         <HeroSection />
//         <About />
//         <ProjectListing />
//         <Experience />
//         <ContactMe />
//       </div>
//     </Router>
//   );
// };

const MainBodyWrapper = ({ children }) => {
  return (
    <Router>
      <div
        className=" bg-black w-full relative overflow-x-hidden"
        id="MainBodyWrapper"
      >
        <div className="bg-[#da6dfc] absolute top-[2rem] right-[2rem] sm:top-[-6rem] sm:right-[-8rem] h-[38vw] w-[38vw] rounded-full  blur-[8rem] sm:blur-[20rem] z-0"></div>
        <div className="bg-[#ffb031] absolute top-[2rem] right-[2rem] sm:top-[-6rem] sm:right-[-8rem] h-[38vw] w-[38vw] rounded-full  blur-[8rem] sm:blur-[20rem] z-0"></div>
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </div>
    </Router>
  );
};

export default MainBodyWrapper;
