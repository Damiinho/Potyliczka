import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Button } from "@mui/base";

const ChooseTopic = () => {
  const { topics, setTopics } = useContext(AppContext);

  return (
    <main className="topic">
      <div className="topic-title">Wybierz temat</div>
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
        <Button>start</Button>
      </div>
    </main>
  );
};

export default ChooseTopic;
