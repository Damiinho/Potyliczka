import { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import PropTypes from "prop-types";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isLandscape = useMediaQuery("(orientation: landscape)");

  const [firstInfo, setFirstInfo] = useState(true);

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
    { name: "Nietykalni", active: true, category: ["filmy", "kino/tv"] },
    { name: "Hamilton", active: true, category: ["filmy", "kino/tv"] },
    { name: "Jożin z Bażin", active: true, category: ["internet", "muzyka"] },
    {
      name: "Chłopaki nie płaczą",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Szklana pułapka", active: true, category: ["filmy", "kino/tv"] },
    { name: "07 zgłoś się", active: true, category: ["filmy", "kino/tv"] },
    { name: "12 prac Asteriksa", active: true, category: ["filmy", "kino/tv"] },
    { name: "13 posterunek", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "2001: Odyseja kosmiczna",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Maqbol", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "12 gniewnych ludzi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "300", active: true, category: ["filmy", "kino/tv"] },
    { name: "39 i pół", active: true, category: ["seriale", "kino/tv"] },
    { name: "4 pokoje", active: true, category: ["filmy", "kino/tv"] },
    { name: "Czterdziestolatek", active: true, category: ["filmy", "kino/tv"] },
    { name: "50 twarzy Greya", active: true, category: ["filmy", "kino/tv"] },
    { name: "8. mila", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Czyż nie dobija się koni?",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Wednesday", active: true, category: ["seriale", "kino/tv"] },
    { name: "Ach, ten Andy!", active: true, category: ["animacje"] },
    { name: "Odlotowe agentki", active: true, category: ["animacje"] },
    { name: "Atomówki", active: true, category: ["animacje"] },
    { name: "Bolek i Lolek", active: true, category: ["animacje"] },
    { name: "Reksio", active: true, category: ["animacje"] },
    {
      name: "Ada! To nie wypada!",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Adwokat diabła", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ajlawju", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Akademia Policyjna",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Wilk z Wall Street",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Aladyn", active: true, category: ["animacje"] },
    { name: "Allo Allo!", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Alvin i wiewiórki ",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    { name: "Amadeusz", active: true, category: ["filmy", "kino/tv"] },
    { name: "Amelia", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Bulwar zachodzącego słońca",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "American Beauty", active: true, category: ["filmy", "kino/tv"] },
    { name: "American Pie", active: true, category: ["filmy", "kino/tv"] },
    { name: "Alternatywy 4", active: true, category: ["filmy", "kino/tv"] },
    { name: "Aniołki Charliego", active: true, category: ["filmy", "kino/tv"] },
    { name: "Antychryst", active: true, category: ["filmy", "kino/tv"] },
    { name: "Aparatka", active: true, category: ["animacje"] },
    { name: "Iniemamocni", active: true, category: ["animacje"] },
    { name: "Hotel Transylwania", active: true, category: ["animacje"] },
    { name: "Merida Waleczna", active: true, category: ["animacje"] },
    { name: "Jak ukraść księżyc", active: true, category: ["animacje"] },
    { name: "Vaiana: skarb oceanu", active: true, category: ["animacje"] },
    { name: "Apetyt na miłość", active: true, category: ["filmy", "kino/tv"] },
    { name: "Apetyt na życie", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Asterix na olimpiadzie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Asterix i Obelix: Misja Kleopatra ",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Auta", active: true, category: ["filmy", "kino/tv", "animacje"] },
    { name: "Avatar", active: true, category: ["filmy", "kino/tv"] },
    { name: "Avengers", active: true, category: ["filmy", "kino/tv"] },
    { name: "Animaniacy", active: true, category: ["animacje"] },
    { name: "Angielski pacjent", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Alicja w Krainie Czarów",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Akademia Pana Kleksa",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Ally McBeal", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Autostopem przez Galaktykę",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Baby są jakieś inne",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Balladyna", active: true, category: ["filmy", "kino/tv"] },
    { name: "Barwy szczęścia", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Baśń o ludziach stąd",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Batman",
      active: true,
      category: ["filmy", "kino/tv", "animacje", "seriale", "kino/tv"],
    },
    { name: "Ben 10", active: true, category: ["animacje"] },
    {
      name: "Beverly Hills, 90210",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Bezsenność", active: true, category: ["filmy", "kino/tv"] },
    { name: "Bękarty wojny", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Biali nie potrafią skakać",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Big Bang", active: true, category: ["filmy", "kino/tv"] },
    { name: "Bing Lebowski", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Podziemny krąg (Fight Club)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Teoria wielkiego podrywy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Blade Runner 2049", active: true, category: ["filmy", "kino/tv"] },
    { name: "Blask", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Bliskie spotkania trzeciego stopnia",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Bliźniaki Cramp", active: true, category: ["animacje"] },
    { name: "Kraina lodu", active: true, category: ["animacje"] },
    { name: "Blokersi", active: true, category: ["filmy", "kino/tv"] },
    { name: "Barbie", active: true, category: ["filmy", "kino/tv"] },
    { name: "Blue Velvet", active: true, category: ["filmy", "kino/tv"] },
    { name: "Borat", active: true, category: ["filmy", "kino/tv"] },
    { name: "Botoks", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Brunet wieczorową porą",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Brzydula", active: true, category: ["seriale", "kino/tv"] },
    { name: "Bulionerzy", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Bulwar Zachodzącego Słońca",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Buntownik z wyboru",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Być jak John Malkovich",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Byle do przodu", active: true, category: ["filmy", "kino/tv"] },
    { name: "Było sobie życie", active: true, category: ["animacje"] },
    {
      name: "Bardzo przygodowe podróże Kulfona",
      active: true,
      category: ["animacje"],
    },
    { name: "Californication", active: true, category: ["filmy", "kino/tv"] },
    { name: "Cała naprzód", active: true, category: ["filmy", "kino/tv"] },
    { name: "Camera Café", active: true, category: ["filmy", "kino/tv"] },
    { name: "Casablanca", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Cast Away – poza światem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Cashback", active: true, category: ["filmy", "kino/tv"] },
    { name: "Casino Royale", active: true, category: ["filmy", "kino/tv"] },
    { name: "Chaos", active: true, category: ["filmy", "kino/tv"] },
    { name: "Chip i Dale Brygada RR", active: true, category: ["animacje"] },
    { name: "Chichot losu", active: true, category: ["filmy", "kino/tv"] },
    { name: "Chirurdzy", active: true, category: ["filmy", "kino/tv"] },
    { name: "Coco", active: true, category: ["animacje"] },
    {
      name: "Wyrok w Norymberdze",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Chłopaki nie płaczą",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Chłopcy z ferajny", active: true, category: ["filmy", "kino/tv"] },
    { name: "Chłopi", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Chłopiec w pasiastej piżamie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Chojrak – tchórzliwy pies",
      active: true,
      category: ["animacje"],
    },
    { name: "Ciacho", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Ciekawy przypadek Benjamina Buttona",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Co gryzie Gilberta Grape'a",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Co mi zrobisz jak mnie złapiesz",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Co nowego u Scooby'ego?", active: true, category: ["animacje"] },
    {
      name: "CSI: Kryminalne zagadki Las Vegas (lub innych)",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Cudowne dziecko", active: true, category: ["filmy", "kino/tv"] },
    { name: "Czarny łabędź", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Czarny czwartek. Janek Wiśniewski padł",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czarodziejka z Księżyca",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Czarodzieje z Waverly Place",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Czas apokalipsy", active: true, category: ["filmy", "kino/tv"] },
    { name: "Czas honoru", active: true, category: ["filmy", "kino/tv"] },
    { name: "Czas surferów", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Czasem słońce, czasem deszcz",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czego się boją faceci, czyli seks w mniejszym mieście",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Serbski film", active: true, category: ["filmy", "kino/tv"] },
    { name: "Człowiek Biegunka", active: true, category: ["animacje"] },
    { name: "Miś Push-Upek", active: true, category: ["animacje"] },
    { name: "Piesek Leszek", active: true, category: ["animacje"] },
    { name: "Kapitan Bomba", active: true, category: ["animacje"] },
    { name: "Owca w Wielkim Mieście", active: true, category: ["animacje"] },
    { name: "Generał Italia", active: true, category: ["animacje"] },
    { name: "Pod gradobiciem pytań", active: true, category: ["animacje"] },
    { name: "Człowiek w ogniu", active: true, category: ["filmy", "kino/tv"] },
    { name: "Człowiek z blizną", active: true, category: ["filmy", "kino/tv"] },
    { name: "Człowiek z zelaza", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Człowiek z marmuru",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czterej pancerni i pies",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Cztery pokoje", active: true, category: ["filmy", "kino/tv"] },
    { name: "Czwarta władza", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ciało", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "D'Artagnan i trzej muszkieterowie",
      active: true,
      category: ["animacje"],
    },
    { name: "Daleko od noszy", active: true, category: ["seriale", "kino/tv"] },
    { name: "Daleko od szosy", active: true, category: ["filmy", "kino/tv"] },
    { name: "Deadpool", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Dawno temu w trawie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Deja vu", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Death Note",
      active: true,
      category: ["filmy", "kino/tv", "seriale", "kino/tv", "animacje"],
    },
    { name: "Dekalog", active: true, category: ["filmy", "kino/tv"] },
    { name: "Desperado", active: true, category: ["filmy", "kino/tv"] },
    { name: "Detektyw Monk", active: true, category: ["seriale", "kino/tv"] },
    { name: "Dexter", active: true, category: ["seriale", "kino/tv"] },
    { name: "Laboratorium Dextera", active: true, category: ["animacje"] },
    {
      name: "Bruce Wszechmogący",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Diuna", active: true, category: ["filmy", "kino/tv"] },
    { name: "Django", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Dobry, zły i brzydki",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Dr House", active: true, category: ["seriale", "kino/tv"] },
    { name: "Doktor Who", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Dom dla zmyślonych przyjaciół pani Foster",
      active: true,
      category: ["animacje"],
    },
    {
      name: "Dom nad rozlewiskiem ",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Dragon Ball", active: true, category: ["animacje"] },
    { name: "Droga do El Dorado", active: true, category: ["animacje"] },
    { name: "Droopy, superdetektyw", active: true, category: ["animacje"] },
    { name: "Drogówka", active: true, category: ["seriale", "kino/tv"] },
    { name: "Drużyna A", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Duma i uprzedzenie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Dzień świra", active: true, category: ["filmy", "kino/tv"] },
    { name: "Dzień wagarowicza", active: true, category: ["filmy", "kino/tv"] },
    { name: "Dzień świstaka", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Dziewczyna z Alabamy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Dziewczyny do wzięcia",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Diabelski plan", active: true, category: ["seriale", "kino/tv"] },
    { name: "Donnie Darko", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Doktor Jekyll i pan Hyde",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Bejzbolokosz", active: true, category: ["filmy", "kino/tv"] },
    { name: "E.T.", active: true, category: ["filmy", "kino/tv"] },
    { name: "E=mc²", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ed, Edd i Eddy", active: true, category: ["animacje"] },
    { name: "Efekt motyla", active: true, category: ["filmy", "kino/tv"] },
    { name: "Egzorcysta", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ekstradycja", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Epoka lodowcowa",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    { name: "Eurotrip", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Faceci do wzięcia",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Faceci w czerni", active: true, category: ["filmy", "kino/tv"] },
    { name: "Fala zbrodni", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Fałszywa dwunastka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Fantastyczna Czwórka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Fantomas", active: true, category: ["filmy", "kino/tv"] },
    { name: "Fineasz i Ferb", active: true, category: ["animacje"] },
    { name: "Flintstonowie ", active: true, category: ["animacje"] },
    { name: "Forrest Gump", active: true, category: ["filmy", "kino/tv"] },
    { name: "Fuks", active: true, category: ["filmy", "kino/tv"] },
    { name: "Full Metal Jacket", active: true, category: ["filmy", "kino/tv"] },
    { name: "Futurama", active: true, category: ["animacje"] },
    { name: "Galerianki", active: true, category: ["filmy", "kino/tv"] },
    { name: "Gandhi", active: true, category: ["filmy", "kino/tv"] },
    { name: "Gang Olsena", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Garfield",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    {
      name: "Gdzie jest Nemo?",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    { name: "Ghost Rider", active: true, category: ["filmy", "kino/tv"] },
    { name: "Gladiator", active: true, category: ["filmy", "kino/tv"] },
    { name: "Glina", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Głowa rodziny (Family Guy)",
      active: true,
      category: ["animacje"],
    },
    {
      name: "Gnijąca panna młoda",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    {
      name: "Gorączka sobotniej nocy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Gotowe na wszystko",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Gra o tron", active: true, category: ["seriale", "kino/tv"] },
    { name: "Graczykowie", active: true, category: ["seriale", "kino/tv"] },
    { name: "Gran Torino", active: true, category: ["filmy", "kino/tv"] },
    { name: "Gumisie", active: true, category: ["animacje"] },
    {
      name: "Gwiezdne wojny (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "H2O – wystarczy kropla",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Camp Rock", active: true, category: ["filmy", "kino/tv"] },
    { name: "Hannah Montana", active: true, category: ["seriale", "kino/tv"] },
    { name: "Hannibal", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Harry Potter (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "He-Man i władcy wszechświata",
      active: true,
      category: ["animacje"],
    },
    { name: "Hela w opałach", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Helikopter w ogniu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "High School Musical",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Hitman", active: true, category: ["filmy", "kino/tv"] },
    { name: "Hobbit", active: true, category: ["filmy", "kino/tv"] },
    { name: "Hotel Zacisze", active: true, category: ["seriale", "kino/tv"] },
    { name: "House of Cards ", active: true, category: ["seriale", "kino/tv"] },
    { name: "Hoży Doktorzy", active: true, category: ["seriale", "kino/tv"] },
    { name: "Hydrozagadka", active: true, category: ["filmy", "kino/tv"] },
    { name: "I kto to mówi", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "I kto tu rządzi?",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Idiokracja", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Ile waży koń trojański?",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Iluzjonista", active: true, category: ["filmy", "kino/tv"] },
    { name: "Incepcja", active: true, category: ["filmy", "kino/tv"] },
    { name: "Interstellar", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Indiana Jones (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ja to mam szczęście!",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Ja, robot", active: true, category: ["filmy", "kino/tv"] },
    { name: "Zjawa", active: true, category: ["filmy", "kino/tv"] },
    { name: "Jak działa jamniczek", active: true, category: ["animacje"] },
    {
      name: "Jak poznałem waszą matkę",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Jak rozpętałem drugą wojnę światową",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Jak wytresować smoka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Janosik", active: true, category: ["seriale", "kino/tv"] },
    { name: "Jaś Fasola", active: true, category: ["seriale", "kino/tv"] },
    { name: "Jetsonowie", active: true, category: ["animacje"] },
    { name: "Odlot", active: true, category: ["animacje"] },
    {
      name: "Jeździec bez głowy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Jeż Jerzy",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    {
      name: "Job, czyli ostatnia szara komórka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Joker", active: true, category: ["filmy", "kino/tv"] },
    { name: "Johnny Bravo", active: true, category: ["animacje"] },
    { name: "Zwierzogród", active: true, category: ["animacje"] },
    { name: "Kac Vegas", active: true, category: ["filmy", "kino/tv"] },
    { name: "Kac Wawa", active: true, category: ["filmy", "kino/tv"] },
    { name: "Kacze opowieści", active: true, category: ["seriale", "kino/tv"] },
    { name: "Kapitan Ameryka", active: true, category: ["filmy", "kino/tv"] },
    { name: "Kaligula", active: true, category: ["filmy", "kino/tv"] },
    { name: "Kod da Vinci", active: true, category: ["filmy", "kino/tv"] },
    { name: "Karate Kid", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Kariera Nikodema Dyzmy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kariera Nikosia Dyzmy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Kasia i Tomek", active: true, category: ["seriale", "kino/tv"] },
    { name: "Katyń", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Kevin sam w domu (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Kiler", active: true, category: ["filmy", "kino/tv"] },
    { name: "Kill Bill", active: true, category: ["filmy", "kino/tv"] },
    { name: "Kingsajz", active: true, category: ["filmy", "kino/tv"] },
    { name: "Klan", active: true, category: ["seriale", "kino/tv"] },
    { name: "Kler", active: true, category: ["filmy", "kino/tv"] },
    { name: "Kocia ferajna", active: true, category: ["animacje"] },
    { name: "Kogel-mogel", active: true, category: ["filmy", "kino/tv"] },
    { name: "Komisarz Alex ", active: true, category: ["seriale", "kino/tv"] },
    { name: "Kosmiczne jaja", active: true, category: ["filmy", "kino/tv"] },
    { name: "Kosmiczny mecz", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Koszmar z ulicy Wiązów (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Kroll", active: true, category: ["filmy", "kino/tv"] },
    { name: "Krowa i Kurczak", active: true, category: ["animacje"] },
    { name: "Król Lew", active: true, category: ["animacje"] },
    { name: "Królowie lata", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Krótki film o zabijaniu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Kryminalni", active: true, category: ["seriale", "kino/tv"] },
    { name: "Krzyk", active: true, category: ["filmy", "kino/tv"] },
    { name: "Krzyżacy", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Książę Persji: Piaski czasu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Księga dżungli", active: true, category: ["filmy", "kino/tv"] },
    { name: "Księżniczka", active: true, category: ["filmy", "kino/tv"] },
    { name: "Księżyc w nowiu", active: true, category: ["filmy", "kino/tv"] },
    { name: "Kung Fu Panda", active: true, category: ["animacje"] },
    { name: "Laboratorium Dextera", active: true, category: ["animacje"] },
    { name: "Las Vegas Parano", active: true, category: ["filmy", "kino/tv"] },
    { name: "Last minute", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Latający cyrk Monty Pythona",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Legalna blondynka", active: true, category: ["filmy", "kino/tv"] },
    { name: "Lejdis", active: true, category: ["filmy", "kino/tv"] },
    { name: "Leon zawodowiec", active: true, category: ["filmy", "kino/tv"] },
    { name: "Lilo i Stich", active: true, category: ["animacje"] },
    { name: "Lista Schindlera", active: true, category: ["filmy", "kino/tv"] },
    { name: "Życie jest piękne", active: true, category: ["filmy", "kino/tv"] },
    { name: "Listy do M.", active: true, category: ["filmy", "kino/tv"] },
    { name: "Lokatorzy", active: true, category: ["seriale", "kino/tv"] },
    { name: "Londyńczycy", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Lot nad kukułczym gniazdem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Zadyma w Bangkoku", active: true, category: ["filmy", "kino/tv"] },
    { name: "Asy przestworzy", active: true, category: ["filmy", "kino/tv"] },
    { name: "Lśnienie", active: true, category: ["filmy", "kino/tv"] },
    { name: "Łowca androidów", active: true, category: ["filmy", "kino/tv"] },
    { name: "M jak miłość", active: true, category: ["seriale", "kino/tv"] },
    { name: "MacGyver", active: true, category: ["seriale", "kino/tv"] },
    { name: "Madagaskar", active: true, category: ["filmy", "kino/tv"] },
    { name: "Magiczny autobus", active: true, category: ["animacje"] },
    {
      name: "Malanowski i Partnerzy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Małżeństwo z rozsądku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Marsjanin", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Matki, żony i kochanki",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Matrix", active: true, category: ["filmy", "kino/tv"] },
    { name: "Max Payne", active: true, category: ["filmy", "kino/tv"] },
    { name: "Mérida waleczna", active: true, category: ["animacje"] },
    { name: "Miasteczko South Park", active: true, category: ["animacje"] },
    { name: "Milczenie owiec", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Milczenie jest złotem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Miłość na zamówienie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Miodowe lata", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Mission: Impossible",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Mój Nikifor", active: true, category: ["filmy", "kino/tv"] },
    { name: "Mroczny rycerz", active: true, category: ["filmy", "kino/tv"] },
    { name: "Na celowniku", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Na dobre i na złe",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Na Wspólne", active: true, category: ["seriale", "kino/tv"] },
    { name: "Naga broń", active: true, category: ["filmy", "kino/tv"] },
    { name: "Nędznicy", active: true, category: ["filmy", "kino/tv"] },
    { name: "Nic śmiesznego", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Nie lubię poniedziałku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Nie mów nikomu", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Nie ma to jak hotel (statek)",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Niekończąca się opowieść",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Miś", active: true, category: ["filmy", "kino/tv"] },
    { name: "Miś Uszatek", active: true, category: ["animacje"] },
    { name: "Mój brat niedźwiedź ", active: true, category: ["animacje"] },
    { name: "Mulan", active: true, category: ["animacje"] },
    { name: "Muminki", active: true, category: ["animacje"] },
    {
      name: "Niewolnica Isaura",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Nigdy nie mów nigdy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Noc w muzeum", active: true, category: ["filmy", "kino/tv"] },
    { name: "Noce i dnie", active: true, category: ["filmy", "kino/tv"] },
    { name: "Och, Karol", active: true, category: ["filmy", "kino/tv"] },
    { name: "Odlotowe agentki", active: true, category: ["animacje"] },
    { name: "Ogniem i mieczem", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ojciec chrzestny", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ostatni Mohikanin", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ostry dyżur", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Oszukać przeznaczenie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Pachnidło", active: true, category: ["filmy", "kino/tv"] },
    { name: "Palce lizać", active: true, category: ["filmy", "kino/tv"] },
    { name: "Pan Taduesz", active: true, category: ["filmy", "kino/tv"] },
    { name: "Pan Wołodyjowski", active: true, category: ["filmy", "kino/tv"] },
    { name: "Park Jurajski", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Parszywa dwunastka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Pasja", active: true, category: ["filmy", "kino/tv"] },
    { name: "Żądło", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Pensjonat pod Różą",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Pianista", active: true, category: ["filmy", "kino/tv"] },
    { name: "Pierwsza miłość", active: true, category: ["filmy", "kino/tv"] },
    { name: "Piękny umysł", active: true, category: ["filmy", "kino/tv"] },
    { name: "Piła", active: true, category: ["filmy", "kino/tv"] },
    { name: "Piłkarski poker", active: true, category: ["filmy", "kino/tv"] },
    { name: "Pingwiny z Madagaskaru", active: true, category: ["animacje"] },
    { name: "Pinky i Mózg", active: true, category: ["animacje"] },
    {
      name: "Piraci z Karaibów (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Pitbull", active: true, category: ["filmy", "kino/tv"] },
    { name: "Plebania", active: true, category: ["seriale", "kino/tv"] },
    { name: "Plotkara", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Podróż za jeden uśmiech",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Pogromcy duchów", active: true, category: ["filmy", "kino/tv"] },
    { name: "Pokłosie", active: true, category: ["filmy", "kino/tv"] },
    { name: "Polskie drogi", active: true, category: ["filmy", "kino/tv"] },
    { name: "Poranek kojota", active: true, category: ["filmy", "kino/tv"] },
    { name: "Potop", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Poszukiwany, poszukiwana",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Potwory i spółka", active: true, category: ["animacje"] },
    { name: "Wielka szóstka", active: true, category: ["animacje"] },
    { name: "Mały książę", active: true, category: ["animacje"] },
    { name: "Pocahontas", active: true, category: ["animacje"] },
    { name: "Piękna i Bestia", active: true, category: ["animacje"] },
    {
      name: "Powrót do przyszłości",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Pół żartem, pół serio",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Prawo Agaty", active: true, category: ["seriale", "kino/tv"] },
    { name: "Predator", active: true, category: ["filmy", "kino/tv"] },
    { name: "Prestiż", active: true, category: ["filmy", "kino/tv"] },
    { name: "Prosta historia", active: true, category: ["filmy", "kino/tv"] },
    { name: "Przedwiośnie", active: true, category: ["filmy", "kino/tv"] },
    { name: "Przekręt", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Przeminęło z wiatrem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Przyjaciółki", active: true, category: ["seriale", "kino/tv"] },
    { name: "Przygody kota Filemona", active: true, category: ["animacje"] },
    { name: "Psy", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Ptaki ciernistych krzewów",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Pulp Fiction", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "korespondent Bryan",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "", active: true, category: ["filmy", "kino/tv"] },
    { name: "Punisher", active: true, category: ["filmy", "kino/tv"] },
    { name: "Quo Vadis", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ralph Demolka", active: true, category: ["animacje"] },
    { name: "Rambo (seria)", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ranczo", active: true, category: ["seriale", "kino/tv"] },
    { name: "Ratatuj", active: true, category: ["animacje"] },
    { name: "Rejs", active: true, category: ["filmy", "kino/tv"] },
    { name: "Requiem dla snu", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Notre-Dame de Paris",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Rękopis znaleziony w Saragossie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Rh+", active: true, category: ["filmy", "kino/tv"] },
    { name: "Robin Hood", active: true, category: ["filmy", "kino/tv"] },
    { name: "Rocky (seria)", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Rodzina Addamsów",
      active: true,
      category: ["filmy", "kino/tv", "seriale", "kino/tv"],
    },
    {
      name: "Rodzina Leśniewskich",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Rodzina Soprano", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Rodzina zastępcza",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "rodzinka.pl", active: true, category: ["seriale", "kino/tv"] },
    { name: "1670", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Różowe lata siedemdziesiąte",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "RRRrrrr!!!", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ryś", active: true, category: ["filmy", "kino/tv"] },
    { name: "Rzymskie wakacje", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Sabrina, nastoletnia czarownica",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Sami swoi", active: true, category: ["filmy", "kino/tv"] },
    { name: "Samo życie", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Sarnie żniwo, czyli pokusa statuetkowego szlaku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Sąsiedzi", active: true, category: ["seriale", "kino/tv"] },
    { name: "Scooby Doo", active: true, category: ["animacje"] },
    {
      name: "Seks w wielkim mieście",
      active: true,
      category: ["filmy", "kino/tv", "seriale", "kino/tv"],
    },
    { name: "Seksmisja", active: true, category: ["filmy", "kino/tv"] },
    { name: "Sherlock", active: true, category: ["seriale", "kino/tv"] },
    { name: "Shrek (seria)", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Siedem lat w Tybecie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Siedmiu wspaniałych",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Siekierezada", active: true, category: ["filmy", "kino/tv"] },
    { name: "Simpsonowie", active: true, category: ["animacje"] },
    {
      name: "Sin City: Miasto grzechu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Skazani na Shawshank",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Skazany na bluesa", active: true, category: ["filmy", "kino/tv"] },
    { name: "Skyfall", active: true, category: ["filmy", "kino/tv"] },
    { name: "Edward nożycoręki", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Slumdog. Milioner z ulicy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Słodkie kłamstewka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Więzień nienawiści",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Smerfy", active: true, category: ["animacje"] },
    { name: "SpongeBob Kanciastoporty", active: true, category: ["animacje"] },
    { name: "Sonic X", active: true, category: ["animacje"] },
    { name: "Spadkobiercy", active: true, category: ["seriale", "kino/tv"] },
    {
      name: "Star Trek (seria)",
      active: true,
      category: ["filmy", "kino/tv", "seriale", "kino/tv"],
    },
    {
      name: "Stawka większa niż życie ",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Stowarzyszenie Umarłych Poetów",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Straszny film", active: true, category: ["filmy", "kino/tv"] },
    { name: "Superman", active: true, category: ["filmy", "kino/tv"] },
    { name: "Szczęki", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Szczęśliwego Nowego Jorku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Szeregowiec Ryan", active: true, category: ["filmy", "kino/tv"] },
    { name: "Szósty zmysł", active: true, category: ["filmy", "kino/tv"] },
    { name: "Sztos", active: true, category: ["filmy", "kino/tv"] },
    { name: "Ścigany", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Świat według Bundych",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Świat według Kiepskich",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "Świat według Ludwiczka", active: true, category: ["animacje"] },
    { name: "Święta wojna", active: true, category: ["seriale", "kino/tv"] },
    { name: "Świnka Peppa", active: true, category: ["animacje"] },
    { name: "Taksówkarz", active: true, category: ["filmy", "kino/tv"] },
    { name: "Tam i z powrotem", active: true, category: ["filmy", "kino/tv"] },
    { name: "Taxi", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Teoria wielkiego podrywu",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Terminator (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Testosteron", active: true, category: ["filmy", "kino/tv"] },
    { name: "Titanic", active: true, category: ["filmy", "kino/tv"] },
    { name: "To ja, złodziej", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "To nie jest kraj dla starych ludzi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Toy Story", active: true, category: ["animacje"] },
    { name: "Troja", active: true, category: ["filmy", "kino/tv"] },
    { name: "Truman Show", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Trzy kolory (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Trzy szalone zera", active: true, category: ["serial"] },
    {
      name: "U Pana Boga w ogródku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "U Pana Boga za piecem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ucieczka z Alcatraz",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Usta usta", active: true, category: ["seriale", "kino/tv"] },
    { name: "V jak vendetta", active: true, category: ["filmy", "kino/tv"] },
    { name: "Vabank", active: true, category: ["filmy", "kino/tv"] },
    { name: "Vanilla Sky", active: true, category: ["filmy", "kino/tv"] },
    { name: "W.I.T.C.H. Czarodziejki", active: true, category: ["animacje"] },
    { name: "W chmurach", active: true, category: ["filmy", "kino/tv"] },
    { name: "W garniturach", active: true, category: ["seriale", "kino/tv"] },
    { name: "W głowie się nie mieści", active: true, category: ["animacje"] },
    {
      name: "W11 - Wydział Śledczy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    { name: "WALL·E", active: true, category: ["animacje"] },
    {
      name: "Weekend u Berniego",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Wesele", active: true, category: ["filmy", "kino/tv"] },
    { name: "Wiedźmin", active: true, category: ["seriale", "kino/tv"] },
    { name: "Wielki Szu", active: true, category: ["filmy", "kino/tv"] },
    { name: "Włatcy móch", active: true, category: ["animacje"] },
    {
      name: "Wojownicze Żółwie Ninja",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    { name: "Wołyń", active: true, category: ["filmy", "kino/tv"] },
    { name: "Jestem legendą", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Wszyscy jesteśmy Chrystusami",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Wściekłe pięści Węża",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Wyspa tajemnic", active: true, category: ["filmy", "kino/tv"] },
    { name: "Siedem", active: true, category: ["filmy", "kino/tv"] },
    { name: "Wyspa Totalnej Porażki", active: true, category: ["animacje"] },
    { name: "Z Archiwum X", active: true, category: ["seriale", "kino/tv"] },
    { name: "Za wszelką cenę", active: true, category: ["filmy", "kino/tv"] },
    { name: "Zabójcza broń", active: true, category: ["filmy", "kino/tv"] },
    { name: "Załoga G", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Zakochana złośnica",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Zabić drozda", active: true, category: ["filmy", "kino/tv"] },
    { name: "Zapach kobiety", active: true, category: ["filmy", "kino/tv"] },
    { name: "Zaplątani", active: true, category: ["animacje"] },
    { name: "Zemsta", active: true, category: ["filmy", "kino/tv"] },
    { name: "Zielona mila", active: true, category: ["filmy", "kino/tv"] },
    { name: "Zmiennicy", active: true, category: ["filmy", "kino/tv"] },
    { name: "Zmierzch", active: true, category: ["seriale", "kino/tv"] },
    { name: "Zostać Miss", active: true, category: ["filmy", "kino/tv"] },
    { name: "Zodiak", active: true, category: ["filmy", "kino/tv"] },
    {
      name: "Żandarm z Saint-Tropez (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    { name: "Zwariowane Melodie ", active: true, category: ["animacje"] },
    { name: "Życie Pi", active: true, category: ["filmy", "kino/tv"] },
    { name: "Żywot Briana", active: true, category: ["filmy", "kino/tv"] },
    { name: "Hồ Chí Minh", active: true, category: ["postacie", "historia"] },
    {
      name: "Winston Churchill",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Mahatma Gandhi",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Ajatollah Ruhollah Chomejni",
      active: true,
      category: ["postacie", "historia"],
    },
    { name: "Adolf Hitler", active: true, category: ["postacie", "historia"] },
    {
      name: "Martin Luther King",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Włodzimierz Lenin",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Nelson Mandela",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Jan Paweł II",
      active: true,
      category: ["postacie", "historia", "religia"],
    },
    { name: "Ronald Reagan", active: true, category: ["postacie", "historia"] },
    {
      name: "Franklin Delano Roosevelt",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Theodore Roosevelt",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Margaret Thatcher",
      active: true,
      category: ["postacie", "historia"],
    },
    { name: "Lech Wałęsa", active: true, category: ["postacie", "historia"] },
    { name: "Mao Zedong", active: true, category: ["postacie", "historia"] },
    { name: "Louis Armstrong", active: true, category: ["postacie", "muzyka"] },
    {
      name: "Neil Armstrong",
      active: true,
      category: ["postacie", "historia"],
    },
    { name: "The Beatles", active: true, category: ["postacie", "muzyka"] },
    { name: "Marlon Brando", active: true, category: ["postacie", "kino/tv"] },
    { name: "Coco Chanel", active: true, category: ["postacie"] },
    {
      name: "Charlie Chaplin",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    { name: "Bob Dylan", active: true, category: ["postacie", "muzyka"] },
    { name: "Pablo Picasso", active: true, category: ["postacie"] },
    {
      name: "Steven Spielberg",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    { name: "Michael Jackson", active: true, category: ["postacie", "muzyka"] },
    { name: "Elvis Presley", active: true, category: ["postacie", "muzyka"] },
    { name: "Walt Disney", active: true, category: ["postacie", "kino/tv"] },
    { name: "Henry Ford", active: true, category: ["postacie", "nauka"] },
    { name: "Bill Gates", active: true, category: ["postacie", "nauka"] },
    { name: "Albert Einstein", active: true, category: ["postacie", "nauka"] },
    {
      name: "Alexander Fleming",
      active: true,
      category: ["postacie", "nauka"],
    },
    { name: "Alan Turing", active: true, category: ["postacie", "nauka"] },
    {
      name: "Ludwig Wittgenstein",
      active: true,
      category: ["postacie", "literatura", "nauka"],
    },
    { name: "Bracia Wright", active: true, category: ["postacie", "nauka"] },
    { name: "Muhammad Ali", active: true, category: ["postacie", "sport"] },
    { name: "Pelé", active: true, category: ["postacie", "sport"] },
    {
      name: "Matka Teresa z Kalkuty",
      active: true,
      category: ["postacie", "religia"],
    },
    { name: "Che Guevara", active: true, category: ["postacie", "historia"] },
    {
      name: "Edmund Hillary",
      active: true,
      category: ["postacie", "historia"],
    },
    { name: "Marilyn Monroe", active: true, category: ["postacie", "kino/tv"] },
    {
      name: "Bruce Lee",
      active: true,
      category: ["postacie", "kino/tv", "sport"],
    },
    {
      name: "Aleksander Wielki",
      active: true,
      category: ["postacie", "historia"],
    },
    { name: "Archimedes", active: true, category: ["postacie", "nauka"] },
    {
      name: "Arystoteles",
      active: true,
      category: ["postacie", "historia", "literatura", "nauka"],
    },
    { name: "Usain Bolt", active: true, category: ["postacie", "sport"] },
    {
      name: "Napoleon Bonaparte",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Jan Sebastian Bach",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Jan Brzechwa",
      active: true,
      category: ["postacie", "literatura"],
    },
    { name: "Fryderyk Chopin", active: true, category: ["postacie", "muzyka"] },
    { name: "Al Capone", active: true, category: ["postacie", "historia"] },
    {
      name: "Winston Churchill",
      active: true,
      category: ["postacie", "historia"],
    },
    { name: "Czyngis-chan", active: true, category: ["postacie", "historia"] },
    { name: "Karol Darwin", active: true, category: ["postacie", "nauka"] },
    { name: "Euklides", active: true, category: ["postacie", "nauka"] },
    {
      name: "Aleksander Fredro",
      active: true,
      category: ["postacie", "literatura"],
    },
    { name: "Galileusz", active: true, category: ["postacie", "nauka"] },
    {
      name: "Bracia Grimm",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Jan Gutenberg",
      active: true,
      category: ["postacie", "historia", "literatura", "nauka"],
    },
    {
      name: "Zbigniew Herbert",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Jezus Chrystus",
      active: true,
      category: ["postacie", "historia", "religia"],
    },
    { name: "Jan Kalwin", active: true, category: ["postacie", "nauka"] },
    {
      name: "Krzysztof Kolumb",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Maria Konopnicka",
      active: true,
      category: ["postacie", "literatura"],
    },
    { name: "Mikołaj Kopernik", active: true, category: ["postacie", "nauka"] },
    {
      name: "Stanisław Lem",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Ernest Malinowski",
      active: true,
      category: ["postacie", "nauka"],
    },
    { name: "Święty Mikołaj", active: true, category: ["postacie"] },
    {
      name: "Cyprian Kamil Norwid",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Henryk Sienkiewicz",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "William Szekspir",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Juliusz Słowacki",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Maria Skłodowska-Curie",
      active: true,
      category: ["postacie", "nauka"],
    },
    { name: "Sokrates", active: true, category: ["postacie", "historia"] },
    {
      name: "Wisława Szymborska",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Julian Tuwim",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Jerzy Waszyngton",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Robert Lewandowski",
      active: true,
      category: ["postacie", "sport"],
    },
    { name: "Iga Świątek", active: true, category: ["postacie", "sport"] },
    { name: "Adam Małysz", active: true, category: ["postacie", "sport"] },
    {
      name: "Cristiano Ronaldo",
      active: true,
      category: ["postacie", "sport"],
    },
    { name: "Leo Messi", active: true, category: ["postacie", "sport"] },
    {
      name: "Jakub Błaszczykowski",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Krzysztof Gonciarz",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Piotr Fronczewski",
      active: true,
      category: ["postacie", "kino/tv", "muzyka"],
    },
    { name: "Artur Rojek", active: true, category: ["postacie", "muzyka"] },
    {
      name: "Robert Makłowicz",
      active: true,
      category: ["postacie", "internet"],
    },
    { name: "Aleksander Doba", active: true, category: ["postacie", "sport"] },
    { name: "Robert Biedroń", active: true, category: ["postacie"] },
    { name: "Wojciech Mann", active: true, category: ["postacie", "muzyka"] },
    {
      name: "Hubert Urbański",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    { name: "Magda Gessler", active: true, category: ["postacie", "kino/tv"] },
    { name: "Jurek Owsiak", active: true, category: ["postacie", "muzyka"] },
    {
      name: "Olga Tokarczuk",
      active: true,
      category: ["postacie", "literatura"],
    },
    { name: "Taco Hemingway", active: true, category: ["postacie", "muzyka"] },
    { name: "Robert Kubica", active: true, category: ["postacie", "sport"] },
    {
      name: "Justyna Kowalczyk",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Krzysztof Krawczyk",
      active: true,
      category: ["postacie", "muzyka"],
    },
    { name: "Dawid Podsiadło", active: true, category: ["postacie", "muzyka"] },
    {
      name: "Klocuch",
      active: true,
      category: ["postacie", "muzyka", "internet"],
    },
    { name: "Łona", active: true, category: ["postacie", "muzyka"] },
    { name: "Pezet", active: true, category: ["postacie", "muzyka"] },
    { name: "Monika Brodka", active: true, category: ["postacie", "muzyka"] },
    {
      name: "Wiedźmin",
      active: true,
      category: ["postacie", "kino/tv", "literatura"],
    },
    {
      name: "Robert Korzeniowski",
      active: true,
      category: ["postacie", "sport"],
    },
    { name: "Piotr Cyrwus", active: true, category: ["postacie", "kino/tv"] },
    {
      name: "Karol Strasburger",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Frank Sinatra",
      active: true,
      category: ["postacie", "muzyka", "kino/tv"],
    },
  ]);
  const [category, setCategory] = useState([
    { name: "ludzie", active: false },
    { name: "filmy", active: false },
    { name: "kino/tv", active: false },
    { name: "seriale", active: false },
    { name: "animacje", active: false },
    { name: "internet", active: false },
    { name: "przysłowia", active: false },
    { name: "posiacie", active: false },
    { name: "muzyka", active: false },
    { name: "sport", active: false },
    { name: "historia", active: false },
    { name: "literatura", active: false },
    { name: "nauka", active: false },
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
    isLandscape,
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
    firstInfo,
    setFirstInfo,
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
