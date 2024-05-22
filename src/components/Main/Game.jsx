import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import Starter from "./Game/Starter";
import Display from "./Game/Display";

const Game = () => {
  const { isStarted } = useContext(AppContext);

  return isStarted ? <Display /> : <Starter />;
};

export default Game;
