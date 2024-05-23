import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import SpeedIcon from "@mui/icons-material/Speed";
import PoolIcon from "@mui/icons-material/Pool";

const ChooseMode = () => {
  const { setMode, setScreen, toggleFullscreen } = useContext(AppContext);
  return (
    <main className="mode">
      <Button
        variant="contained"
        className="fullscreen"
        onClick={() => toggleFullscreen()}
      >
        pełny ekran
      </Button>
      {/* <div className="mode-title">Wybierz tryb</div> */}
      <div className="mode-buttons">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setMode("speed");
            setScreen("chooseOptions");
          }}
        >
          <SpeedIcon /> <p>Szybkość</p>
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setMode("effort");
            setScreen("chooseOptions");
          }}
        >
          <PoolIcon /> <p>Wytrwałość</p>
        </Button>
      </div>
    </main>
  );
};

export default ChooseMode;
