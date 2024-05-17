import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import ChooseMode from "./Main/ChooseMode";
import ChooseOptions from "./Main/ChooseOptions";
import ChooseTopic from "./Main/ChooseTopic";

const Main = () => {
  const { screen } = useContext(AppContext);
  return screen === null || screen === "chooseMode" ? (
    <ChooseMode />
  ) : screen === "chooseOptions" ? (
    <ChooseOptions />
  ) : screen === "chooseTopic" ? (
    <ChooseTopic />
  ) : null;
};
export default Main;
