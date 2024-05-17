import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";

const Game = () => {
  const { currentTime, setCurrentTime } = useContext(AppContext);

  useEffect(() => {
    if (currentTime <= 0) {
      setCurrentTime(10);
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
  }, [currentTime, setCurrentTime]);

  return <main className="game">{currentTime}</main>;
};

export default Game;
