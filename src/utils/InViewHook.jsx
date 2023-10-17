import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/Activesectioncontext";
import { useEffect } from "react";

export default function useInViewHook(sectionID, thresholdvalue) {
  const { ref, inView, entry } = useInView({
    threshold: thresholdvalue,
  });

  const { setActiveSection, timeOfLastClick, activeSection } =
    useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionID);
    }
  }, [inView, timeOfLastClick, activeSection]);

  return ref;
}
