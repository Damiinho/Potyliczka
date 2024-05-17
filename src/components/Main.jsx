import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Button } from "@mui/material";

const Main = () => {
  const {
    setMode,
    mode,
    screen,
    setScreen,
    speedTime,
    setSpeedTime,
    topics,
    // setTopics,
  } = useContext(AppContext);
  return screen === null || screen === "chooseMode" ? (
    <main className="mode">
      <div className="mode-title">Wybierz tryb {screen}</div>
      <div className="mode-buttons">
        <Button
          onClick={() => {
            setMode("speed");
            setScreen("chooseOptions");
          }}
        >
          Szybkość
        </Button>
        <Button
          onClick={() => {
            setMode("effort");
            setScreen("chooseOptions");
          }}
        >
          Wytrwałość
        </Button>
      </div>
    </main>
  ) : screen === "chooseOptions" ? (
    <main className="options">
      {mode === "speed" ? (
        <div className="options-speed">
          <div className="options-speed__title">Ustaw czas</div>
          <div className="options-speed__set">
            <Button
              onClick={() => {
                setSpeedTime(speedTime - 10);
              }}
            >
              -10s
            </Button>
            {speedTime}s
            <Button
              onClick={() => {
                setSpeedTime(speedTime + 10);
              }}
            >
              +10s
            </Button>
          </div>
        </div>
      ) : null}
      <div className="options-next">
        <Button
          onClick={() => {
            setScreen("chooseTopic");
          }}
        >
          Wybierz temat
        </Button>
      </div>
    </main>
  ) : screen === "chooseTopic" ? (
    <main className="topic">
      <div className="topic-title">Wybierz temat</div>
      <div className="topic-main">
        {topics.map((map) => {
          return (
            <Button
              key={map.name}
              className={map.active && "active"}
              onClick={() => {
                // const newTopics = topics;
              }}
            >
              {map.name}
            </Button>
          );
        })}
      </div>
      <div className="topic-confirm">
        <Button>start</Button>
      </div>
    </main>
  ) : null;
};
export default Main;
