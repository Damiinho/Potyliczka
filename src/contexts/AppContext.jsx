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
    { name: "Róża Thun", active: true, category: ["ludzie"] },
    { name: "Całka", active: true, category: ["ludzie"] },
    { name: "Chłopaki nie płaczą", active: true, category: ["filmy"] },
    { name: "Szklana pułapka", active: true, category: ["filmy"] },

    {
      name: "Gdzie drwa rąbią, tam wióry lecą",
      active: true,
      category: ["przysłowia"],
    },
    {
      name: "Kto pod kim dołki kopie, ten sam w nie wpada",
      active: true,
      category: ["przysłowia"],
    },

    { name: "NyanCat", active: true, category: ["internet"] },
    { name: "Jożin z Bażin", active: true, category: ["internet"] },
  ]);
  const [category, setCategory] = useState([
    { name: "ludzie", active: false },
    { name: "filmy", active: false },
    { name: "internet", active: false },
    { name: "przysłowia", active: false },
  ]);

  const [result, setResult] = useState(0);
  const [currentTime, setCurrentTime] = useState(3);
  const [isStarted, setIsStarted] = useState(false);

  const activeCategories = category
    .filter((cat) => cat.active)
    .map((cat) => cat.name);

  const filteredTopics = topics.filter((t) =>
    t.category.some((c) => activeCategories.includes(c))
  );
  const activeFilteredTopics = filteredTopics.filter((t) => t.active);
  const [currentTopic, setCurrentTopic] = useState({});
  const [currentList, setCurrentList] = useState([]);

  const [alphaAngle, setAlphaAngle] = useState(0);
  const [betaAngle, setBetaAngle] = useState(0);
  const [gammaAngle, setGammaAngle] = useState(0);

  const toggleFullscreen = (action) => {
    const element = document.documentElement;
    if (
      action === "leave" &&
      (document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement)
    ) {
      // Wyjdź z trybu pełnoekranowego, jeśli jesteśmy już w nim
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    } else if (
      action === "enter" &&
      !(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement
      )
    ) {
      // Wejdź w tryb pełnoekranowy
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      }
    }
  };

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
    category,
    setCategory,
    activeCategories,
    filteredTopics,
    activeFilteredTopics,
    currentTopic,
    setCurrentTopic,
    currentList,
    setCurrentList,
    alphaAngle,
    betaAngle,
    gammaAngle,
    toggleFullscreen,
  };

  useEffect(() => {
    const handleOrientation = (event) => {
      setAlphaAngle(event.alpha);
      setBetaAngle(event.beta);
      setGammaAngle(event.gamma);
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

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
