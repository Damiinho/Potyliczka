import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const Header = () => {
  const { setScreen, setCurrentTopic, setCurrentList, setIsStarted } =
    useContext(AppContext);
  const [betaAngle, setBetaAngle] = useState(0);

  useEffect(() => {
    const handleOrientation = (event) => {
      setBetaAngle(event.beta);
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

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
          {betaAngle ? `${betaAngle.toFixed(2)}°` : "liczka"}
        </div>
      </div>
    </header>
  );
};

export default Header;
