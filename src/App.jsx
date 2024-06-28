import { useEffect, useRef } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import AppProvider from "./contexts/AppContext";
import NoSleep from "nosleep.js";
// import Entry from "./components/Entry";

function App() {
  const noSleep = useRef(null);
  useEffect(() => {
    noSleep.current = new NoSleep();

    const enableNoSleep = () => {
      noSleep.current.enable();
      document.removeEventListener("click", enableNoSleep, false);
    };

    document.addEventListener("click", enableNoSleep, false);

    return () => {
      noSleep.current.disable();
    };
  }, []);
  return (
    <>
      <AppProvider>
        {/* <Entry /> */}
        <div className="wrapper">
          <Header />
          <Main />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
