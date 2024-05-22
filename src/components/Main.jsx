import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import ChooseMode from "./Main/ChooseMode";
import ChooseOptions from "./Main/ChooseOptions";
import ChooseTopic from "./Main/ChooseTopic";
import Game from "./Main/Game";
import TheEnd from "./Main/TheEnd";

const Main = () => {
  const { screen } = useContext(AppContext);
  return screen === null || screen === "chooseMode" ? (
    <ChooseMode />
  ) : screen === "chooseOptions" ? (
    <ChooseOptions />
  ) : screen === "chooseTopic" ? (
    <ChooseTopic />
  ) : screen === "game" ? (
    <Game />
  ) : screen === "theend" ? (
    <TheEnd />
  ) : null;
};
export default Main;
