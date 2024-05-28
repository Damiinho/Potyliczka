import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import SpeedIcon from "@mui/icons-material/Speed";
import PoolIcon from "@mui/icons-material/Pool";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const ChooseMode = () => {
  const { setMode, setScreen, toggleFullscreen } = useContext(AppContext);
  return (
    <main className="mode">
      {/* <div className="mode-title">Wybierz tryb</div> */}
      <div className="mode-buttons">
        <Button
          variant="outlined"
          className={`fullscreen        `}
          onClick={() => toggleFullscreen()}
        >
          <p>Włącz pełny ekran</p>
          <p>(tak będzie lepiej, polecam)</p>
          <FullscreenIcon style={{ fontSize: 50 }} />
        </Button>
        <Button
          className={`mode`}
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
          className={`mode`}
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
          className={`mode`}
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
