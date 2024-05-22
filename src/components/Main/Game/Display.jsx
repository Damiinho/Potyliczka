import { useContext, useEffect, useCallback, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Button } from "@mui/material";

const Display = () => {
  const {
    currentTime,
    setIsStarted,
    setScreen,
    setCurrentTime,
    currentTopic,
    setCurrentTopic,
    activeFilteredTopics,
    setCurrentList,
    currentList,
    setTopics,
    betaAngle,
    gammaAngle,
  } = useContext(AppContext);

  const updateTopicActiveStatus = useCallback(
    (name, active) => {
      setTopics((prevTopics) =>
        prevTopics.map((topic) =>
          topic.name === name ? { ...topic, active } : topic
        )
      );
    },
    [setTopics]
  );

  useEffect(() => {
    if (currentTime <= 0) {
      setIsStarted(false);
      setScreen("theend");
    }

    const timer = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 0.01;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [
    currentTime,
    setCurrentTime,
    setIsStarted,
    setScreen,
    currentTopic.name,
    updateTopicActiveStatus,
  ]);

  const [isGood, setIsGood] = useState(false);
  const [isSkip, setIsSkip] = useState(false);

  useEffect(() => {
    if (window.orientation === 0 || window.orientation === 180) {
      if (betaAngle) {
        if (!isGood) {
          if (betaAngle > 125) {
            setIsGood(true);
          }
        } else if (isGood) {
          if (betaAngle < 110) {
            setIsGood(false);
          }
        }
        if (!isSkip) {
          if (betaAngle < 50) {
            setIsSkip(true);
          }
        } else if (isGood) {
          if (betaAngle > 60) {
            setIsSkip(false);
          }
        }
      }
    } else {
      if (gammaAngle) {
        if (!isGood) {
          if (gammaAngle > 0 && gammaAngle < 25) {
            setIsGood(true);
          }
        } else if (isGood) {
          if (gammaAngle > 45) {
            setIsGood(false);
          }
        }
        if (!isSkip) {
          if (gammaAngle < 0 && gammaAngle > -25) {
            setIsSkip(true);
          }
        } else if (isSkip) {
          if (gammaAngle < -45) {
            setIsSkip(false);
          }
        }
      }
    }
  }, [isGood, isSkip, betaAngle, gammaAngle]);

  const handleGoodAnswer = useCallback(() => {
    currentList[currentList.length - 1].good = true;

    if (activeFilteredTopics.length === 0) {
      setScreen("theend");
    } else {
      const newTopic =
        activeFilteredTopics[
          Math.floor(Math.random() * activeFilteredTopics.length)
        ];
      setCurrentTopic(newTopic);
      updateTopicActiveStatus(newTopic.name, false);
      setCurrentList([...currentList, { ...newTopic, good: false }]);
    }
  }, [
    activeFilteredTopics,
    currentList,
    setCurrentList,
    setCurrentTopic,
    setScreen,
    updateTopicActiveStatus,
  ]);

  const handleSkip = useCallback(() => {
    if (activeFilteredTopics.length === 0) {
      setScreen("theend");
    } else {
      const newTopic =
        activeFilteredTopics[
          Math.floor(Math.random() * activeFilteredTopics.length)
        ];
      setCurrentTopic(newTopic);
      updateTopicActiveStatus(newTopic.name, false);
      setCurrentList([...currentList, { ...newTopic, good: false }]);
    }
  }, [
    activeFilteredTopics,
    currentList,
    setCurrentList,
    setCurrentTopic,
    setScreen,
    updateTopicActiveStatus,
  ]);

  return (
    <main className="game">
      <div>
        Hasło: {currentTopic.name};{" "}
        {isGood ? "Dobrze" : isSkip ? "pomijam" : "czekam"}
      </div>
      <Button onClick={handleGoodAnswer}>Dobrze</Button>
      <Button onClick={handleSkip}>Pomiń</Button>
      <div>{currentTime}</div>
    </main>
  );
};

export default Display;
