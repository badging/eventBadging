import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const DesktopContext = createContext({
  isDesktop: false,
});

const DesktopProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  return (
    <>
      <DesktopContext.Provider value={{ isDesktop }}>
        {children}
      </DesktopContext.Provider>
    </>
  );
};

const useDesktop = () => {
  return useContext(DesktopContext);
};

DesktopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DesktopContext, DesktopProvider, useDesktop };
