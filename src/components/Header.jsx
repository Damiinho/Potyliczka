import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import LogoIMG from "../img/Occipital_bone.gif";

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
        <img src={LogoIMG} alt="logo" />
      </div>
      <div className="text">
        <div className="text-top">Poty</div>
        <div className="text-bottom">Liczka</div>
      </div>
    </header>
  );
};

export default Header;
