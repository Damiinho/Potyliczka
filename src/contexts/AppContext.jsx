import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [screen, setScreen] = useState("chooseMode");
  const [mode, setMode] = useState("");
  const [speedTime, setSpeedTime] = useState(60);
  const [effortTime, setEffortTime] = useState(10);
  const [topics, setTopics] = useState([
    { name: "Róża Thun", active: true, category: ["ludzie"] },
    { name: "Całka", active: true, category: ["ludzie"] },

    {
      name: "Gdzie drwa rąbią, tam wióry lecą",
      active: true,
      category: ["przysłowia"],
    },
    {
      name: "Kto pod kim dołki kopie, ten sam w nie wpada",
      active: true,
      category: ["przysłowia"],
    },

    { name: "NyanCat", active: true, category: ["internet"] },
    { name: "Jożin z Bażin", active: true, category: ["internet"] },
    { name: "Chłopaki nie płaczą", active: true, category: ["filmy"] },
    { name: "Szklana pułapka", active: true, category: ["filmy"] },
    { name: "07 zgłoś się", active: true, category: ["filmy"] },
    { name: "12 prac Asteriksa", active: true, category: ["filmy"] },
    { name: "13 posterunek", active: true, category: ["seriale"] },
    { name: "2001: Odyseja kosmiczna", active: true, category: ["filmy"] },
    { name: "12 gniewnych ludzi", active: true, category: ["filmy"] },
    { name: "300", active: true, category: ["filmy"] },
    { name: "39 i pół", active: true, category: ["seriale"] },
    { name: "4 pokoje", active: true, category: ["filmy"] },
    { name: "Czterdziestolatek", active: true, category: ["filmy"] },
    { name: "50 twarzy Greya", active: true, category: ["filmy"] },
    { name: "8. mila", active: true, category: ["filmy"] },
    { name: "Czyż nie dobija się koni?", active: true, category: ["filmy"] },
    { name: "Wednesday", active: true, category: ["seriale"] },
    { name: "Ach, ten Andy!", active: true, category: ["kreskówki"] },
    { name: "Odlotowe agentki", active: true, category: ["kreskówki"] },
    { name: "Atomówki", active: true, category: ["kreskówki"] },
    { name: "Bolek i Lolek", active: true, category: ["kreskówki"] },
    { name: "Reksio", active: true, category: ["kreskówki"] },
    { name: "Ada! To nie wypada!", active: true, category: ["filmy"] },
    { name: "Adwokat diabła", active: true, category: ["filmy"] },
    { name: "Ajlawju", active: true, category: ["filmy"] },
    { name: "Akademia Policyjna ", active: true, category: ["filmy"] },
    { name: "Aladyn", active: true, category: ["filmy", "kreskówki"] },
    { name: "Allo Allo!", active: true, category: ["filmy"] },
    {
      name: "Alvin i wiewiórki ",
      active: true,
      category: ["filmy", "kreskówki"],
    },
    { name: "Amadeusz", active: true, category: ["filmy"] },
    { name: "Amelia", active: true, category: ["filmy"] },
    { name: "American Beauty", active: true, category: ["filmy"] },
    { name: "American Pie", active: true, category: ["filmy"] },
    { name: "Alternatywy 4", active: true, category: ["filmy"] },
    { name: "Aniołki Charliego", active: true, category: ["filmy"] },
    { name: "Antychryst", active: true, category: ["filmy"] },
    { name: "Aparatka", active: true, category: ["kreskówki"] },
    { name: "Apetyt na miłość", active: true, category: ["filmy"] },
    { name: "Apetyt na życie", active: true, category: ["filmy"] },
    { name: "Asterix na olimpiadzie", active: true, category: ["filmy"] },
    {
      name: "Asterix i Obelix: Misja Kleopatra ",
      active: true,
      category: ["filmy"],
    },
    { name: "Auta", active: true, category: ["filmy", "kreskówki"] },
    { name: "Avatar", active: true, category: ["filmy"] },
    { name: "Avengers", active: true, category: ["filmy"] },
    { name: "Animaniacy", active: true, category: ["kreskówki"] },
    { name: "Angielski pacjent", active: true, category: ["filmy"] },
    { name: "Alicja w Krainie Czarów", active: true, category: ["filmy"] },
    { name: "Akademia Pana Kleksa", active: true, category: ["filmy"] },
    { name: "Ally McBeal", active: true, category: ["seriale"] },
    { name: "Autostopem przez Galaktykę", active: true, category: ["filmy"] },
    { name: "Baby są jakieś inne", active: true, category: ["filmy"] },
    { name: "Balladyna", active: true, category: ["filmy"] },
    { name: "Barwy szczęścia", active: true, category: ["seriale"] },
    { name: "Baśń o ludziach stąd", active: true, category: ["filmy"] },
    {
      name: "Batman",
      active: true,
      category: ["filmy", "kreskówki", "seriale"],
    },
    { name: "Ben 10", active: true, category: ["kreskówki"] },
    { name: "Beverly Hills, 90210", active: true, category: ["filmy"] },
    { name: "Bezsenność", active: true, category: ["filmy"] },
    { name: "Bękarty wojny", active: true, category: ["filmy"] },
    { name: "Biali nie potrafią skakać", active: true, category: ["filmy"] },
    { name: "Big Bang", active: true, category: ["filmy"] },
    { name: "Bing Lebowski", active: true, category: ["filmy"] },
    { name: "Teoria wielkiego podrywy", active: true, category: ["seriale"] },
    { name: "Blade Runner 2049", active: true, category: ["filmy"] },
    { name: "Blask", active: true, category: ["filmy"] },
    {
      name: "Bliskie spotkania trzeciego stopnia",
      active: true,
      category: ["filmy"],
    },
    { name: "Bliźniaki Cramp", active: true, category: ["kreskówki"] },
    { name: "Blokersi", active: true, category: ["filmy"] },
    { name: "Barbie", active: true, category: ["filmy"] },
    { name: "Blue Velvet", active: true, category: ["filmy"] },
    { name: "Borat", active: true, category: ["filmy"] },
    { name: "Botoks", active: true, category: ["filmy"] },
    { name: "Brunet wieczorową porą", active: true, category: ["filmy"] },
    { name: "Brzydula", active: true, category: ["seriale"] },
    { name: "Bulionerzy", active: true, category: ["seriale"] },
    { name: "Bulwar Zachodzącego Słońca", active: true, category: ["filmy"] },
    { name: "Buntownik z wyboru", active: true, category: ["filmy"] },
    { name: "Być jak John Malkovich", active: true, category: ["filmy"] },
    { name: "Byle do przodu", active: true, category: ["filmy"] },
    { name: "Było sobie życie", active: true, category: ["kreskówki"] },
    {
      name: "Bardzo przygodowe podróże Kulfona",
      active: true,
      category: ["kreskówki"],
    },
    { name: "Californication", active: true, category: ["filmy"] },
    { name: "Cała naprzód", active: true, category: ["filmy"] },
    { name: "Camera Café", active: true, category: ["filmy"] },
    { name: "Casablanca", active: true, category: ["filmy"] },
    { name: "Cashback", active: true, category: ["filmy"] },
    { name: "Casino Royale", active: true, category: ["filmy"] },
    { name: "Chaos", active: true, category: ["filmy"] },
    { name: "Chip i Dale Brygada RR", active: true, category: ["kreskówki"] },
    { name: "Chichot losu", active: true, category: ["filmy"] },
    { name: "Chirurdzy", active: true, category: ["filmy"] },
    { name: "Chłopaki nie płaczą", active: true, category: ["filmy"] },
    { name: "Chłopcy z ferajny", active: true, category: ["filmy"] },
    { name: "Chłopi", active: true, category: ["filmy"] },
    { name: "Chłopiec w pasiastej piżamie", active: true, category: ["filmy"] },
    {
      name: "Chojrak – tchórzliwy pies",
      active: true,
      category: ["kreskówki"],
    },
    { name: "Ciacho", active: true, category: ["filmy"] },
    {
      name: "Ciekawy przypadek Benjamina Buttona",
      active: true,
      category: ["filmy"],
    },
    { name: "Co gryzie Gilberta Grape'a", active: true, category: ["filmy"] },
    {
      name: "Co mi zrobisz jak mnie złapiesz",
      active: true,
      category: ["filmy"],
    },
    { name: "Co nowego u Scooby'ego?", active: true, category: ["kreskówki"] },
    {
      name: "CSI: Kryminalne zagadki Las Vegas (lub innych)",
      active: true,
      category: ["seriale"],
    },
    { name: "Cudowne dziecko", active: true, category: ["filmy"] },
    { name: "Czarny łabędź", active: true, category: ["filmy"] },
    {
      name: "Czarny czwartek. Janek Wiśniewski padł",
      active: true,
      category: ["filmy"],
    },
    { name: "Czarodziejka z Księżyca", active: true, category: ["seriale"] },
    {
      name: "Czarodzieje z Waverly Place",
      active: true,
      category: ["seriale"],
    },
    { name: "Czas apokalipsy", active: true, category: ["filmy"] },
    { name: "Czas honoru", active: true, category: ["filmy"] },
    { name: "Czas surferów", active: true, category: ["filmy"] },
    { name: "Czasem słońce, czasem deszcz", active: true, category: ["filmy"] },
    {
      name: "Czego się boją faceci, czyli seks w mniejszym mieście",
      active: true,
      category: ["filmy"],
    },
    { name: "Serbski film", active: true, category: ["filmy"] },
    { name: "Człowiek Biegunka", active: true, category: ["kreskówki"] },
    { name: "Miś Push-Upek", active: true, category: ["kreskówki"] },
    { name: "Piesek Leszek", active: true, category: ["kreskówki"] },
    { name: "Kapitan Bomba", active: true, category: ["kreskówki"] },
    { name: "Owca w Wielkim Mieście", active: true, category: ["kreskówki"] },
    { name: "Generał Italia", active: true, category: ["kreskówki"] },
    { name: "Pod gradobiciem pytań", active: true, category: ["kreskówki"] },
    { name: "Człowiek w ogniu", active: true, category: ["filmy"] },
    { name: "Człowiek z blizną", active: true, category: ["filmy"] },
    { name: "Człowiek z zelaza", active: true, category: ["filmy"] },
    { name: "Człowiek z marmuru", active: true, category: ["filmy"] },
    { name: "Czterej pancerni i pies", active: true, category: ["seriale"] },
    { name: "Cztery pokoje", active: true, category: ["filmy"] },
    { name: "Czwarta władza", active: true, category: ["filmy"] },
    { name: "Ciało", active: true, category: ["filmy"] },
    {
      name: "D'Artagnan i trzej muszkieterowie",
      active: true,
      category: ["kreskówki"],
    },
    { name: "Daleko od noszy", active: true, category: ["seriale"] },
  ]);
  const [category, setCategory] = useState([
    { name: "ludzie", active: false },
    { name: "filmy", active: false },
    { name: "seriale", active: false },
    { name: "kreskówki", active: false },
    { name: "internet", active: false },
    { name: "przysłowia", active: false },
  ]);

  const [result, setResult] = useState(0);
  const [currentTime, setCurrentTime] = useState(3);
  const [isStarted, setIsStarted] = useState(false);

  const activeCategories = category
    .filter((cat) => cat.active)
    .map((cat) => cat.name);

  const filteredTopics = topics.filter((t) =>
    t.category.some((c) => activeCategories.includes(c))
  );
  const activeFilteredTopics = filteredTopics.filter((t) => t.active);
  const [currentTopic, setCurrentTopic] = useState({});
  const [currentList, setCurrentList] = useState([]);

  const [alphaAngle, setAlphaAngle] = useState(0);
  const [betaAngle, setBetaAngle] = useState(0);
  const [gammaAngle, setGammaAngle] = useState(0);

  const toggleFullscreen = (action) => {
    const element = document.documentElement;
    if (
      action === "leave" &&
      (document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement)
    ) {
      // Wyjdź z trybu pełnoekranowego, jeśli jesteśmy już w nim
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    } else if (
      action === "enter" &&
      !(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement
      )
    ) {
      // Wejdź w tryb pełnoekranowy
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      }
    } else if (!action) {
      if (
        !(
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement
        )
      ) {
        // Wejdź w tryb pełnoekranowy
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        }
      }
    }
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    ) {
      // Wejdź w tryb pełnoekranowy
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    }
  };

  const providerValue = {
    windowWidth,
    setWindowWidth,
    screen,
    setScreen,
    mode,
    setMode,
    speedTime,
    setSpeedTime,
    effortTime,
    setEffortTime,
    topics,
    setTopics,
    isStarted,
    setIsStarted,
    result,
    setResult,
    currentTime,
    setCurrentTime,
    category,
    setCategory,
    activeCategories,
    filteredTopics,
    activeFilteredTopics,
    currentTopic,
    setCurrentTopic,
    currentList,
    setCurrentList,
    alphaAngle,
    betaAngle,
    gammaAngle,
    toggleFullscreen,
  };

  useEffect(() => {
    const handleOrientation = (event) => {
      setAlphaAngle(event.alpha);
      setBetaAngle(event.beta);
      setGammaAngle(event.gamma);
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
