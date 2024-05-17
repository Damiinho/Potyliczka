import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const ChooseMode = () => {
  const { setMode, setScreen } = useContext(AppContext);
  return (
    <main className="mode">
      <div className="mode-title">Wybierz tryb</div>
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
  );
};

export default ChooseMode;
