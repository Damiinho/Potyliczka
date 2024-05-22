import { useContext, useEffect } from "react";
import { AppContext } from "../../../contexts/AppContext";

const Starter = () => {
  const {
    currentTime,
    setCurrentTime,
    setIsStarted,
    mode,
    speedTime,
    effortTime,
  } = useContext(AppContext);

  useEffect(() => {
    if (currentTime <= 0) {
      if (mode === "speed") {
        setCurrentTime(speedTime);
      }
      if (mode === "effort") {
        setCurrentTime(effortTime);
      }
      setIsStarted(true);
      return;
    }

    const timer = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime, setCurrentTime, setIsStarted, mode, speedTime, effortTime]);

  return <main className="game">{currentTime}</main>;
};

export default Starter;
