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

  const handleSpeed = (amount) => {
    if (speedTime + amount > 0) {
      setSpeedTime(speedTime + amount);
    }
  };
  const handleEffort = (amount) => {
    if (effortTime + amount > 0) {
      setEffortTime(effortTime + amount);
    }
  };

  return (
    <main className="options">
      {mode === "speed" ? (
        <div className="options-speed">
          <div className="options-speed__title">Ustaw czas</div>
          <div className="options-speed__set">
            <div className="left">
              <Button
                variant="outlined"
                color="warning"
                onClick={() => handleSpeed(-10)}
              >
                -10
              </Button>
              <Button
                variant="outlined"
                color="warning"
                onClick={() => handleSpeed(-1)}
              >
                -
              </Button>
            </div>
            {speedTime}s
            <div className="right">
              <Button
                variant="outlined"
                color="success"
                onClick={() => handleSpeed(1)}
              >
                +
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={() => handleSpeed(+10)}
              >
                +10
              </Button>
            </div>
          </div>
        </div>
      ) : mode === "effort" ? (
        <div className="options-effort">
          <div className="options-effort__title">Czas na 1 odpowiedź</div>
          <div className="options-effort__set">
            <Button
              variant="outlined"
              color="warning"
              onClick={() => handleEffort(-10)}
            >
              -10
            </Button>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => handleEffort(-1)}
            >
              -
            </Button>
            {effortTime}s
            <Button
              variant="outlined"
              color="success"
              onClick={() => handleEffort(+1)}
            >
              +
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={() => handleEffort(+10)}
            >
              +10
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
