import { useCallback, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Button } from "@mui/base";

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

  return (
    <main className="topic">
      <div className="topic-title">
        <div>Wybierz temat</div>
        <div>
          haseł w wybranych kategoriach: {activeFilteredTopics.length}/
          {filteredTopics.length}
        </div>
      </div>
      <div className="topic-main">
        {category.map((cat, index) => (
          <Button
            key={cat.name}
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
        <Button
          onClick={() => {
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
          }}
        >
          start
        </Button>
      </div>
    </main>
  );
};

export default ChooseTopic;
