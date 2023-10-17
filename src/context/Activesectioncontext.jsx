import { createContext, useState, useContext } from "react";

//creates a context
export const ActiveSectionContext = createContext(null);

//custom hook to use the context
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}

//provides the created context
export default function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
