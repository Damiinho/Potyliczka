import { useContext, useEffect, useCallback } from "react";
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

  useEffect(() => {
    const handleDeviceOrientation = (event) => {
      const { beta } = event; // beta - tilt front-to-back
      if (beta > 45) {
        handleGoodAnswer();
      } else if (beta < -45) {
        handleSkip();
      }
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);
    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [handleGoodAnswer, handleSkip]);

  return (
    <main className="game">
      <div>hasło: {currentTopic.name}</div>
      <Button onClick={() => handleGoodAnswer()}>Dobrze</Button>
      <Button onClick={() => handleSkip()}>Pomiń</Button>
      <div>{currentTime}</div>
    </main>
  );
};

export default Display;
