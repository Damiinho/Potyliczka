import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Button } from "@mui/material";

const ChooseOptions = () => {
  const {
    mode,
    setSpeedTime,
    speedTime,
    setScreen,
    effortTime,
    setEffortTime,
  } = useContext(AppContext);
  return (
    <main className="options">
      {mode === "speed" ? (
        <div className="options-speed">
          <div className="options-speed__title">Ustaw czas</div>
          <div className="options-speed__set">
            <Button
              variant="outlined"
              color="warning"
              onClick={() => {
                setSpeedTime(speedTime - 10);
              }}
            >
              -10s
            </Button>
            {speedTime}s
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                setSpeedTime(speedTime + 10);
              }}
            >
              +10s
            </Button>
          </div>
        </div>
      ) : mode === "effort" ? (
        <div className="options-effort">
          <div className="options-effort__title">Czas na 1 odpowiedź</div>
          <div className="options-effort__set">
            <Button
              variant="outlined"
              color="warning"
              onClick={() => {
                setEffortTime(effortTime - 1);
              }}
            >
              -
            </Button>
            {effortTime}s
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                setEffortTime(effortTime + 1);
              }}
            >
              +
            </Button>
          </div>
        </div>
      ) : null}
      <div className="options-next">
        <Button
          variant="contained"
          onClick={() => {
            setScreen("chooseTopic");
          }}
        >
          Wybierz temat
        </Button>
      </div>
    </main>
  );
};

export default ChooseOptions;
