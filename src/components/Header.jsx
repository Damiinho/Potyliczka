import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Header = () => {
  const { setScreen } = useContext(AppContext);
  return (
    <header
      onClick={() => {
        setScreen("chooseMode");
      }}
    >
      <div className="logo"></div>
      <div className="text">
        <div className="text-top">Poty</div>
        <div className="text-bottom">liczka</div>
      </div>
    </header>
  );
};
export default Header;
