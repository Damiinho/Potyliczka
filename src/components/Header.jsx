import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import LogoStand from "../img/logo_lobe.png";

const Header = () => {
  const { setScreen, setCurrentTopic, setCurrentList, setIsStarted } =
    useContext(AppContext);

  return (
    <header
      onClick={() => {
        setScreen("chooseMode");
        setCurrentTopic({});
        setCurrentList([]);
        setIsStarted(false);
      }}
    >
      <div className="logo">
        <img src={LogoStand} alt="logo" />
      </div>
      <div className="text">
        <div className="text-top">Poty</div>
        <div className="text-bottom">Liczka</div>
        {/* <img src={LogoTxt} alt="logo txt" /> */}
      </div>
    </header>
  );
};

export default Header;
