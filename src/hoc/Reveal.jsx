import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ children, width = "w-fit" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex"
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 2, ease: "easeIn" }}
        className={`absolute top-1 bottom-1 left-0 right-0 bg-hotmag z-30`}
      ></motion.div> */}
    </div>
  );
};

// const RevealSectionTitle = ({ children, width = "fit-content" }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const mainControl = useAnimation();
//   useEffect(() => {
//     if (isInView) {
//       mainControl.start("visible");
//     }
//   }, [isInView]);

//   return (
//     <div ref={ref} className={`relative overflow-hidden`}>
//       <motion.div
//         variants={{
//           hidden: { opacity: 0, y: 80 },
//           visible: { opacity: 1, y: 0 },
//         }}
//         initial="hidden"
//         animate={mainControl}
//         transition={{ duration: 0.9, delay: 0.25 }}
//         className={`flex w-[272px]`}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

export { Reveal };
