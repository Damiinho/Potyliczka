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
  } = useContext(AppContext);

  const [info, setInfo] = useState("");

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
      setInfo(`Device orientation changed: beta=${beta}`);
      if (beta > 45) {
        setInfo("Detected tilt forward");
        handleGoodAnswer();
      } else if (beta < -45) {
        setInfo("Detected tilt backward");
        handleSkip();
      }
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);

    // Check for permission
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === "granted") {
            setInfo("Permission granted");
          } else {
            setInfo("Permission denied");
          }
        })
        .catch(setInfo("błąd"));
    }

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [handleGoodAnswer, handleSkip]);

  return (
    <main className="game">
      <div>hasło: {currentTopic.name}</div>
      <div>{info}</div>
      <Button onClick={handleGoodAnswer}>Dobrze</Button>
      <Button onClick={handleSkip}>Pomiń</Button>
      <div>{currentTime}</div>
    </main>
  );
};

export default Display;
