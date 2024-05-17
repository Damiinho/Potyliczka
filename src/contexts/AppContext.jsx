import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [screen, setScreen] = useState("chooseMode");
  const [mode, setMode] = useState("");
  const [speedTime, setSpeedTime] = useState(60);
  const [effortTime, setEffortTime] = useState(10);
  const [topics, setTopics] = useState([
    {
      name: "ludzie",
      active: false,
      sentences: [
        { name: "Róża Thun", active: true },
        { name: "Całka", active: false },
      ],
    },
    {
      name: "filmy",
      active: false,
      sentences: [
        { name: "Chłopaki nie płaczą", active: true },
        { name: "Szklana pułapka", active: true },
      ],
    },
    {
      name: "przysłowia",
      active: true,
      sentences: [
        { name: "Gdzie drwa rąbią, tam wióry lecą", active: true },
        { name: "Kto pod kim dołki kopie, ten sam w nie wpada", active: true },
      ],
    },
    {
      name: "internet",
      active: false,
      sentences: [
        { name: "NyanCat", active: true },
        { name: "Jożin z Bażin", active: true },
      ],
    },
  ]);
  const [result, setResult] = useState(0);
  const [currentTime, setCurrentTime] = useState(3);
  const [isStarted, setIsStarted] = useState(false);

  const providerValue = {
    windowWidth,
    setWindowWidth,
    screen,
    setScreen,
    mode,
    setMode,
    speedTime,
    setSpeedTime,
    effortTime,
    setEffortTime,
    topics,
    setTopics,
    isStarted,
    setIsStarted,
    result,
    setResult,
    currentTime,
    setCurrentTime,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
