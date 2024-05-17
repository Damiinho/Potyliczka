import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import AppProvider from "./contexts/AppContext";
function App() {
  return (
    <>
      <AppProvider>
        <div className="wrapper">
          <Header />
          <Main />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
