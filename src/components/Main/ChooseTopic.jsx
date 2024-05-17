import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Button } from "@mui/base";

const ChooseTopic = () => {
  const { topics, setTopics, setScreen, setResult, setCurrentTime } =
    useContext(AppContext);

  const activeSentences = topics.reduce((acc, topic) => {
    if (topic.active) {
      const activeSentencesCount = topic.sentences.filter(
        (sentence) => sentence.active
      ).length;
      return acc + activeSentencesCount;
    }
    return acc;
  }, 0);
  const allSentences = topics.reduce((acc, topic) => {
    if (topic.active) {
      const activeSentencesCount = topic.sentences.length;
      return acc + activeSentencesCount;
    }
    return acc;
  }, 0);

  return (
    <main className="topic">
      <div className="topic-title">
        <div>Wybierz temat</div>
        <div>
          haseł w wybranych kategoriach: {activeSentences}/{allSentences}
        </div>
      </div>
      <div className="topic-main">
        {topics.map((topic, index) => (
          <Button
            key={topic.name}
            className={topic.active ? "active" : ""}
            onClick={() => {
              const newTopics = topics.map((t, i) =>
                i === index ? { ...t, active: !t.active } : t
              );
              setTopics(newTopics);
            }}
          >
            {topic.name}
          </Button>
        ))}
      </div>
      <div className="topic-confirm">
        <Button
          onClick={() => {
            setScreen("game");
            setResult(0);
            setCurrentTime(3);
          }}
        >
          start
        </Button>
      </div>
    </main>
  );
};

export default ChooseTopic;
