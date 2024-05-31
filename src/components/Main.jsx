import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import ChooseMode from "./Main/ChooseMode";
import ChooseOptions from "./Main/ChooseOptions";
import ChooseTopic from "./Main/ChooseTopic";
import Game from "./Main/Game";
import TheEnd from "./Main/TheEnd";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { Button, ButtonGroup } from "@mui/material";

const Main = () => {
  const { screen, toggleFullscreen, firstInfo, isStarted } =
    useContext(AppContext);

  return (
    <>
      <ButtonGroup
        orientation="vertical"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          display: firstInfo ? "none" : isStarted ? "none" : "flex",
          gap: 20,
        }}
      >
        <Button
          variant="contained"
          className="fullscreen-absolute"
          onClick={() => {
            toggleFullscreen();
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
          }}
          sx={{ backgroundColor: "#3c493f99" }}
        >
          <FullscreenIcon style={{ fontSize: 50 }} />
        </Button>
        <Button
          variant="contained"
          className="howtoplay"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
          }}
          sx={{ backgroundColor: "#2b76d0cc" }}
        >
          <p>jak</p>
          <p>grać?</p>
        </Button>
      </ButtonGroup>

      {screen === null || screen === "chooseMode" ? (
        <ChooseMode />
      ) : screen === "chooseOptions" ? (
        <ChooseOptions />
      ) : screen === "chooseTopic" ? (
        <ChooseTopic />
      ) : screen === "game" ? (
        <Game />
      ) : screen === "theend" ? (
        <TheEnd />
      ) : null}
    </>
  );
};
export default Main;
