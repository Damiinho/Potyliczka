import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Header = () => {
  const {
    setScreen,
    setCurrentTopic,
    setCurrentList,
    setIsStarted,
    alfaAngle,
    betaAngle,
    gammaAngle,
  } = useContext(AppContext);

  return (
    <header
      onClick={() => {
        setScreen("chooseMode");
        setCurrentTopic({});
        setCurrentList([]);
        setIsStarted(false);
      }}
    >
      <div className="logo"></div>
      <div className="text">
        <div className="text-top">Poty</div>
        <div className="text-bottom">
          {alfaAngle ? `${alfaAngle.toFixed(2)}°` : "liczka"}
          {betaAngle ? `${betaAngle.toFixed(2)}°` : "liczka"}
          {gammaAngle ? `${gammaAngle.toFixed(2)}°` : "liczka"}
        </div>
      </div>
    </header>
  );
};

export default Header;
