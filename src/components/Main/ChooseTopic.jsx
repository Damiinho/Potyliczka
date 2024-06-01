import { useCallback, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Button, ButtonGroup } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const ChooseTopic = () => {
  const {
    setScreen,
    setResult,
    setCurrentTime,
    category,
    setCategory,
    activeFilteredTopics,
    filteredTopics,
    setCurrentTopic,
    topics,
    setTopics,
    setCurrentList,
    currentList,
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

  const handleClear = () => {
    const newTopics = topics.map((topic) => ({
      ...topic,
      active: true,
    }));
    setTopics(newTopics);
  };

  const handleAll = (boolean) => {
    const newCategory = category.map((cat) => ({
      ...cat,
      active: boolean,
    }));
    setCategory(newCategory);
  };

  const TitleTop = () => (
    <div className="topic-title__top">
      <p>Wybierz temat</p>
      <ButtonGroup aria-label="Basic button group">
        <Button
          onClick={() => handleAll(true)}
          variant="contained"
          disabled={category.every((i) => i.active)}
          className={`${category.every((i) => i.active) ? "disabled" : ""}`}
          sx={{ backgroundColor: "#3C493F" }}
        >
          wszystkie
        </Button>
        <Button
          onClick={() => handleAll(false)}
          variant="contained"
          disabled={category.every((i) => !i.active)}
          sx={{ backgroundColor: "#ae7171" }}
        >
          Odznacz
        </Button>
      </ButtonGroup>
    </div>
  );

  const TitleBottom = () => (
    <div className="topic-title__bottom">
      <p>
        haseł w wybranych kategoriach: {activeFilteredTopics.length}/
        {filteredTopics.length}
      </p>
      {activeFilteredTopics.length / filteredTopics.length ===
      1 ? null : filteredTopics.length === 0 ? null : (
        <Button onClick={handleClear} variant="contained">
          <ClearIcon />
        </Button>
      )}
    </div>
  );

  const StartButton = () => (
    <Button
      variant="contained"
      onClick={() => {
        if (!(activeFilteredTopics.length === 0)) {
          setScreen("game");
          setResult(0);
          setCurrentTime(3);
          const newTopic =
            activeFilteredTopics[
              Math.floor(Math.random() * activeFilteredTopics.length)
            ];
          setCurrentTopic(newTopic);
          updateTopicActiveStatus(newTopic.name, false);
          setCurrentList([...currentList, { ...newTopic, good: false }]);
        } else return null;
      }}
    >
      start
    </Button>
  );

  return (
    <main className="topic">
      <div className="topic-title">
        <TitleTop />
        <TitleBottom />
      </div>
      <div className="topic-main">
        {category.map((cat, index) => (
          <Button
            key={cat.name}
            variant="contained"
            className={cat.active ? "active" : ""}
            onClick={() => {
              const newCategory = category.map((t, i) =>
                i === index ? { ...t, active: !t.active } : t
              );
              setCategory(newCategory);
            }}
          >
            {cat.name}
          </Button>
        ))}
      </div>
      <div className="topic-confirm">
        <StartButton />
      </div>
    </main>
  );
};

export default ChooseTopic;
