import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import SpeedIcon from "@mui/icons-material/Speed";
import PoolIcon from "@mui/icons-material/Pool";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

const ChooseMode = () => {
  const { setMode, setScreen, toggleFullscreen, firstInfo, setFirstInfo } =
    useContext(AppContext);
  return (
    <main className="mode">
      <div className="mode-buttons">
        {firstInfo ? (
          <Button
            variant="outlined"
            className="fullscreen"
            onClick={() => {
              toggleFullscreen();
              setFirstInfo(false);
            }}
          >
            <div className="text">
              <p>Trzymaj ekran poziomo</p>
              <p>(możesz też pionowo, spoko)</p>
              <p>Włącz pełny ekran</p>
              <p>(po prostu kliknij)</p>
              <p>Miłej zabawy</p>
            </div>
            <FullscreenIcon style={{ fontSize: 50 }} />
          </Button>
        ) : (
          <>
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
                setMode("endless");
                setScreen("chooseOptions");
              }}
            >
              <p>Bez końca</p>
              <AllInclusiveIcon />
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
          </>
        )}
      </div>
    </main>
  );
};

export default ChooseMode;
