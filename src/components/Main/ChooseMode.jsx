import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import SpeedIcon from "@mui/icons-material/Speed";
import PoolIcon from "@mui/icons-material/Pool";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

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
          <p>Szybkość</p>
          <SpeedIcon />
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setMode("effort");
            setScreen("chooseOptions");
          }}
        >
          <p>Wytrwałość</p>
          <PoolIcon />
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setMode("effort");
            setScreen("chooseOptions");
          }}
          disabled
          style={{ backgroundColor: "grey", color: "#B3BFB8" }}
        >
          <p>inne</p>
          <HourglassTopIcon />
        </Button>
      </div>
    </main>
  );
};

export default ChooseMode;
