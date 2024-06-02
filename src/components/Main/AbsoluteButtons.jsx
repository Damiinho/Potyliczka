import { Button, ButtonGroup } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { SimpleDialogContainer, simpleAlert } from "react-simple-dialogs";

const AbsoluteButtons = () => {
  const { firstInfo, isStarted, toggleFullscreen, isLandscape } =
    useContext(AppContext);

  const alert = () =>
    simpleAlert({
      message: (
        <div
          style={{
            fontFamily: "Ubuntu Sans Mono, monospace",
            fontSize: 15,
          }}
        >
          <div style={{ margin: "20px 0" }}>
            <p style={{ marginBottom: 10 }}>
              <strong>Szybkość</strong> – zgadnij jak najwięcej haseł w ciągu z
              góry określonego czasu rundy
            </p>
            <p>
              <strong>Wytrwałość</strong>– zdobądź jak najwięcej poprawnych
              odpowiedzi z rzędu w określonym czasie na każde hasło
            </p>
          </div>
          <h1> Jak grać?</h1>
          <div style={{ margin: "20px 0" }}>
            Użyj przycisków lub pochyl ekran w dół, by zatwierdzić odpowiedź,
            albo w górę, by pominąć hasło
          </div>
        </div>
      ),
      closeLabel: "Zamknij",
      title: (
        <div
          style={{ fontSize: 30, fontFamily: "Ubuntu Sans Mono, monospace" }}
        >
          Tryby gry
        </div>
      ),
      stule: { maxWidth: "90%" },
    });

  return (
    <>
      <ButtonGroup
        orientation={isLandscape ? "horizontal" : "vertical"}
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
          onClick={alert}
          sx={{ backgroundColor: "#2b76d0cc" }}
        >
          <p>jak</p>
          <p>grać?</p>
        </Button>
      </ButtonGroup>
      <SimpleDialogContainer />
    </>
  );
};

export default AbsoluteButtons;
