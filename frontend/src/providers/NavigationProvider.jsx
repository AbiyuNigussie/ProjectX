import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/home", current: true },
    { name: "Find Events", href: "/events", current: false },
    { name: "Create Events", href: "#", current: false },
    { name: "Help", href: "#", current: false },
  ]);

  return (
    <NavigationContext.Provider value={{ navigation, setNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
