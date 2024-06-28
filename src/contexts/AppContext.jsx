import { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import PropTypes from "prop-types";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const playSuccessSound = () => {
    const audio = new Audio("/sounds/success.wav");
    audio.play();
  };
  const playFailSound = () => {
    const audio = new Audio("/sounds/fail.mp3");
    audio.play();
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isLandscape = useMediaQuery("(orientation: landscape)");

  const [firstInfo, setFirstInfo] = useState(() => {
    return window.matchMedia("(pointer: coarse)").matches;
  });

  const [screen, setScreen] = useState("chooseMode");
  const [mode, setMode] = useState("");
  const [speedTime, setSpeedTime] = useState(60);
  const [effortTime, setEffortTime] = useState(10);
  const [topics, setTopics] = useState([
    {
      name: "",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "07 zgłoś się",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "12 gniewnych ludzi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "12 prac Asteriksa",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "13 posterunek",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "1670",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "2001: Odyseja kosmiczna",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "300",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "39 i pół",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "4 pokoje",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "50 twarzy Greya",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "8. mila",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "AJ The Polish American",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Ach, ten Andy!",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "AdBuster",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Ada! To nie wypada!",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Adam Małysz",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Adolf Hitler",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Adwokat diabła",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Agnieszka Włodarczyk",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Ajatollah Ruhollah Chomejni",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Ajlawju",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Akademia Pana Kleksa",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Akademia Policyjna",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Al Capone",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Aladyn",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Alan Turing",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Albert Einstein",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Aleksander Doba",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Aleksander Fredro",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Aleksander Wielki",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Alexander Fleming",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Alicja w Krainie Czarów",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Allo Allo!",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ally McBeal",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Alternatywy 4",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Alvin i wiewiórki ",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    {
      name: "Amadeusz",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Amelia",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "American Beauty",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "American Pie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Andrea Bocelli",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Andrzej Gołota",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Andrzej Grabowski",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Andrzej Wajda",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Angielski pacjent",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Animaniacy",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Aniołki Charliego",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Anna Lewandowska",
      active: true,
      category: ["postacie", "internet", "sport"],
    },
    {
      name: "Anna Maria Jopek",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Anna Przybylska",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Antychryst",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Aparatka",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Apetyt na miłość",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Apetyt na życie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Archimedes",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Konfederacja",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Prawoo i Sprawiedliwość",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Lewica",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Prawica",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Konstytucja",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Bazarek",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Cisza wyborcza",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Kiełbasa wyborcza",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Symetryzm",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Unia Europejska",
      active: true,
      category: ["polityka"],
    },
    {
      name: "PolExit",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Faszyzm",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Komunizm",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Libertarianizm",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Konserwatyzm",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Kara śmierci",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Aborcja",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Eutanazja",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Demokracja",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Monarchia",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Rodzina królewska",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Rząd",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Opozycja",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Premier",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Prezydent",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Rada ministrów",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Sejm",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Senat",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Wolna elekcja",
      active: true,
      category: ["polityka", "historia"],
    },
    {
      name: "Autonomia Palestyńska",
      active: true,
      category: ["polityka", "geografia"],
    },
    {
      name: "Poprawność polityczna",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Platforma Obywatelska",
      active: true,
      category: ["polityka"],
    },
    {
      name: "Arnold Schwarzenegger",
      active: true,
      category: ["postacie", "polityka", "kino/tv"],
    },
    {
      name: "Artur Andrus",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Artur Barciś",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Artur Rojek",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Arystoteles",
      active: true,
      category: ["postacie", "historia", "literatura", "nauka"],
    },
    {
      name: "Asterix i Obelix: Misja Kleopatra ",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Asterix na olimpiadzie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Asy przestworzy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Atomówki",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Auta",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    {
      name: "Autostopem przez Galaktykę",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Avatar",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Avengers",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Baby są jakieś inne",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Balladyna",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Barack Obama",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Barbie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Bardzo przygodowe podróże Kulfona",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Barwy szczęścia",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Batman",
      active: true,
      category: ["filmy", "kino/tv", "animacje", "seriale", "kino/tv"],
    },
    {
      name: "Baśń o ludziach stąd",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Beata Kozidrak",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Bejzbolokosz",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ben 10",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Benedict Cumberbatch",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Benedykt XVI",
      active: true,
      category: ["postacie", "polityka", "religia"],
    },
    {
      name: "Beverly Hills, 90210",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Bezsenność",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Biali nie potrafią skakać",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Big Bang",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Bill Gates",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Bill Gates",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Daniel Magical",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Julia Wieniawa",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Bing Lebowski",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Blade Runner 2049",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Blask",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Bliskie spotkania trzeciego stopnia",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Bliźniaki Cramp",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Blokersi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Blonsky",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Blowek",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Blue Velvet",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Bob Dylan",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Bogusław Linda",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Bolek i Lolek",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Bolesław Chrobry",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Borat",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Botoks",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Boxdel",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Bracia Grimm",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Bracia Wright",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Brad Pitt",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Britney Spears",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Brodka",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Bruce Lee",
      active: true,
      category: ["postacie", "kino/tv", "sport"],
    },
    {
      name: "Bruce Wszechmogący",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Brunet wieczorową porą",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Brzydula",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Bulionerzy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Bulwar Zachodzącego Słońca",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Bulwar zachodzącego słońca",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Buntownik z wyboru",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Byle do przodu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Być jak John Malkovich",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Było sobie życie",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Bękarty wojny",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "CSI: Kryminalne zagadki Las Vegas (lub innych)",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Californication",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Camera Café",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Camp Rock",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Casablanca",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Cashback",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Casino Royale",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Cast Away – poza światem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Cała naprzód",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Całka",
      active: true,
      category: ["postacie"],
    },
    {
      name: "CeZik",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Cezary Pazura",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Cezary Żak",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Chaos",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Charlie Chaplin",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Charlie Chaplin",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Che Guevara",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Chichot losu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Chip i Dale Brygada RR",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Chirurdzy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Chojrak – tchórzliwy pies",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Christian Bale",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Chłopaki nie płaczą",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Chłopaki nie płaczą",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Chłopcy z ferajny",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Chłopi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Chłopiec w pasiastej piżamie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ciacho",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ciało",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ciekawy przypadek Benjamina Buttona",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Cleo",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Clint Eastwood",
      active: true,
      category: ["postacie", "kino/tv"],
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
    {
      name: "Co nowego u Scooby'ego?",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Coco",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Coco Chanel",
      active: true,
      category: ["postacie"],
    },
    {
      name: "Cristiano Ronaldo",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Cudowne dziecko",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Cypis",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Cyprian Kamil Norwid",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Czarny czwartek. Janek Wiśniewski padł",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czarny łabędź",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czarodzieje z Waverly Place",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Czarodziejka z Księżyca",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Czas apokalipsy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czas honoru",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czas surferów",
      active: true,
      category: ["filmy", "kino/tv"],
    },
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
    {
      name: "Czesław Miłosz",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Czterdziestolatek",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czterej pancerni i pies",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Cztery pokoje",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czwarta władza",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Czyngis-chan",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Czyż nie dobija się koni?",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Człowiek Biegunka",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Człowiek w ogniu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Człowiek z blizną",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Człowiek z marmuru",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Człowiek z zelaza",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Céline Dion",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "D'Artagnan i trzej muszkieterowie",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Daleko od noszy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Daleko od szosy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Daniel Craig",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Daniel Olbrychski",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Dawid Myśliwiec",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Dawid Podsiadło",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Dawid Podsiadło",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Dawno temu w trawie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Deadpool",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Death Note",
      active: true,
      category: ["filmy", "kino/tv", "seriale", "kino/tv", "animacje"],
    },
    {
      name: "Deja vu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Dekalog",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Desperado",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Detektyw Monk",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Dexter",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Diabelski plan",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Diuna",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Django",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Dobry, zły i brzydki",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Doda",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Doktor Jekyll i pan Hyde",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Doktor Who",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Dom dla zmyślonych przyjaciół pani Foster",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Dom nad rozlewiskiem ",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Donald Trump",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Donald Tusk",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Donnie Darko",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Dr House",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Dragon Ball",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Droga do El Dorado",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Drogówka",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Droopy, superdetektyw",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Drużyna A",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Duma i uprzedzenie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
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
    {
      name: "Dzień wagarowicza",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Dzień świra",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Dzień świstaka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "E.T.",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "E=mc²",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ed, Edd i Eddy",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Eddie Murphy",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Edmund Hillary",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Edward nożycoręki",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Efekt motyla",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Egzorcysta",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ekstradycja",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Elon Musk",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Elton John",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Elvis Presley",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Elżbieta II",
      active: true,
      category: ["postacie", "polityka", "historia"],
    },
    {
      name: "Eminem",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Epoka lodowcowa",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    {
      name: "Ernest Malinowski",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Eugeniusz Bodo",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Euklides",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Eurotrip",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Faceci do wzięcia",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Faceci w czerni",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Fala zbrodni",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Fantastyczna Czwórka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Fantomas",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Fałszywa dwunastka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Fineasz i Ferb",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Flintstonowie ",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Forrest Gump",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Franciszek Pieczka",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Frank Sinatra",
      active: true,
      category: ["postacie", "muzyka", "kino/tv"],
    },
    {
      name: "Franklin Delano Roosevelt",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Freddie Mercury",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Friz",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Fryderyk Chopin",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Fuks",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Full Metal Jacket",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Futurama",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Galerianki",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Galileusz",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Gandhi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Gang Olsena",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Garfield",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    {
      name: "Gdzie drwa rąbią, tam wióry lecą",
      active: true,
      category: ["przysłowia"],
    },
    {
      name: "Gdzie jest Nemo?",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    {
      name: "Generał Italia",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Ghost Rider",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Gimper",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Gladiator",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Glina",
      active: true,
      category: ["seriale", "kino/tv"],
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
    {
      name: "Gra o tron",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Graczykowie",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Gran Torino",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Grzegorz Braun",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Gumisie",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Gustaw Holoubek",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Gwiezdne wojny (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Głowa rodziny (Family Guy)",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "H2O – wystarczy kropla",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Hamilton",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Hannah Montana",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Hannibal",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Hans Christian Andersen",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Harry Potter (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "He-Man i władcy wszechświata",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Hela w opałach",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Helikopter w ogniu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Henry Ford",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Henryk Sienkiewicz",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Henryk Sienkiewicz",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "High School Musical",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Hitman",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Hobbit",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Hotel Transylwania",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Hotel Zacisze",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "House of Cards ",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Hoży Doktorzy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Hubert Urbański",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Hubert Urbański",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Humphrey Bogart",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Hydrozagadka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Hồ Chí Minh",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "I kto to mówi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "I kto tu rządzi?",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Idiokracja",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Iga Świątek",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Ignacy Paderewski",
      active: true,
      category: ["postacie", "muzyka", "polityka", "historia"],
    },
    {
      name: "Ile waży koń trojański?",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Iluzjonista",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Incepcja",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Indiana Jones (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Iniemamocni",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Interstellar",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "JDabrowsky",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Ja to mam szczęście!",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Ja, robot",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Jacek Braciak",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Jacek Kaczmarski",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Jacek Stachursky",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Jak działa jamniczek",
      active: true,
      category: ["animacje", "kino/tv"],
    },
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
      name: "Jak ukraść księżyc",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Jak wytresować smoka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Jakub Błaszczykowski",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Jan Brzechwa",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Jan Gutenberg",
      active: true,
      category: ["postacie", "historia", "literatura", "nauka"],
    },
    {
      name: "Jan Heweliusz",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Jan III Sobieski",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Jan Kalwin",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Jan Matejko",
      active: true,
      category: ["postacie"],
    },
    {
      name: "Jan Paweł II",
      active: true,
      category: ["postacie", "historia", "religia"],
    },
    {
      name: "Jan Sebastian Bach",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Jan Twardowski",
      active: true,
      category: ["postacie", "religia", "literatura"],
    },
    {
      name: "Janosik",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Janusz Gajos",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Janusz Korwin-Mikke",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Jarosław Kaczyński",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Jaś Fasola",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Jerzy Stuhr",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Jerzy Waszyngton",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Jessica Mercedes",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Jestem legendą",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Jetsonowie",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Jezus Chrystus",
      active: true,
      category: ["postacie", "historia", "religia"],
    },
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
      name: "Joaquin Phoenix",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Job, czyli ostatnia szara komórka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Johnny Bravo",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Johnny Depp",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Joker",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Jożin z Bażin",
      active: true,
      category: ["internet", "muzyka"],
    },
    {
      name: "Julia Żugaj",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Julian Tuwim",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Juliusz Słowacki",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Jurek Owsiak",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Justin Bieber",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Justyna Kowalczyk",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "LeBron James",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Neymar",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Roger Federer",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Tiger Woods",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Rafael Nadal",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Usain Bolt",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Novak Djoković",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Hubert Hurkacz",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Serena Williams",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Andrzej Gołota",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Lewis Hamilton",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Robert Kubica",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Kamil Stoch",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Jerzy Dudek",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Piotr Zyła",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Grzegorz Krychowiak",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Wojciech Szczęsny",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Agnieszka Radwańska",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Dawid Kubacki",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Marcin Gortat",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Mariusz Pudzianowski",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Artur Boruc",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Robert Korzeniowski",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Anita Włodarczyk",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Marcin Najman",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Jakub Błaszczykowski",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Otylia Jędrzejczak",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Tomasz Adamek",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Krzysztof Hołowczyc",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Michael Schumacher",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Tomasz Gollob",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Ewa Swoboda",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Jan Błachowicz",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Łukasz Piszczek",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Irena Szewińska",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Jerzy Kulej",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Kazimierz Deyna",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Grzegorz Lato",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Władysław Kozakiewicz",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Zbigniew Boniek",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Szymon Marciniak",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Piłka nożna",
      active: true,
      category: ["sport"],
    },
    {
      name: "Koszykówka",
      active: true,
      category: ["sport"],
    },
    {
      name: "Siatkówka",
      active: true,
      category: ["sport"],
    },
    {
      name: "Spalony",
      active: true,
      category: ["sport"],
    },
    {
      name: "Pole karne",
      active: true,
      category: ["sport"],
    },
    {
      name: "Rzut karny",
      active: true,
      category: ["sport"],
    },
    {
      name: "Tenis ziemny",
      active: true,
      category: ["sport"],
    },
    {
      name: "Serwis",
      active: true,
      category: ["sport"],
    },
    {
      name: "Aut",
      active: true,
      category: ["sport"],
    },
    {
      name: "Poprzeczka",
      active: true,
      category: ["sport"],
    },
    {
      name: "Rzut sędziowski",
      active: true,
      category: ["sport"],
    },
    {
      name: "Blok",
      active: true,
      category: ["sport"],
    },
    {
      name: "Mistrzostwa świata",
      active: true,
      category: ["sport"],
    },
    {
      name: "Igrzyska olimpijskie",
      active: true,
      category: ["sport"],
    },
    {
      name: "Mistrzostwa Europy",
      active: true,
      category: ["sport"],
    },
    {
      name: "Stadion olimpijski",
      active: true,
      category: ["sport"],
    },
    {
      name: "Stadion Narodowy",
      active: true,
      category: ["sport"],
    },
    {
      name: "Stadion dziesięciolecia",
      active: true,
      category: ["sport"],
    },
    {
      name: "Rzut rożny",
      active: true,
      category: ["sport"],
    },
    {
      name: "Mariusz Wlazły",
      active: true,
      category: ["sport", "postacie"],
    },
    {
      name: "Józef Piłsudski",
      active: true,
      category: ["postacie", "polityka", "historia"],
    },
    {
      name: "Kac Vegas",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kac Wawa",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kacze opowieści",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Kaligula",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kamerzysta",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Kamil Bednarek",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Kapitan Ameryka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kapitan Bomba",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Karate Kid",
      active: true,
      category: ["filmy", "kino/tv"],
    },
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
    {
      name: "Karol Darwin",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Karol Strasburger",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Kasia i Tomek",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Katarzyna Nosowska",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Katharine Hepburn",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Katyń",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kayah",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Kazik Staszewski",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Kevin sam w domu (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kiler",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kill Bill",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kim Dzong Il",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Kingsajz",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Klan",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Kler",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Klocuch",
      active: true,
      category: ["postacie", "muzyka", "internet"],
    },
    {
      name: "Kocia ferajna",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Kod da Vinci",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kogel-mogel",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Komisarz Alex ",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Konopskyy",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Kornel Makuszyński",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Kosmiczne jaja",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kosmiczny mecz",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Koszmar z ulicy Wiązów (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kraina lodu",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Kroll",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Krowa i Kurczak",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Kryminalni",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Krystyna Janda",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Krzyk",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Krzysztof Gonciarz",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Krzysztof Ibisz",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Krzysztof Kolumb",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Krzysztof Krawczyk",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Krzysztof Krawczyk",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Krzysztof Stanowski",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Krzyżacy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Król Lew",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Królowie lata",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Krótki film o zabijaniu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Książulo",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Książę Persji: Piaski czasu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Księga dżungli",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Księżniczka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Księżyc w nowiu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Kto pod kim dołki kopie, ten sam w nie wpada",
      active: true,
      category: ["przysłowia"],
    },
    {
      name: "Kung Fu Panda",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Laboratorium Dextera",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Laboratorium Dextera",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Lady Gaga",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Las Vegas Parano",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Last minute",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Latający cyrk Monty Pythona",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Lech Kaczyński",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Lech Wałęsa",
      active: true,
      category: ["postacie", "historia", "polityka"],
    },
    {
      name: "Legalna blondynka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Lejdis",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Leo Messi",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Leon Niemczyk",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Leon zawodowiec",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Leonardo DiCaprio",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Leonardo da Vinci",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Lexy Chaplin",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Lilo i Stich",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Lista Schindlera",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Listy do M.",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Lokatorzy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Londyńczycy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Lord Kruszwil",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Lot nad kukułczym gniazdem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Louis Armstrong",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Ludwig Wittgenstein",
      active: true,
      category: ["postacie", "literatura", "nauka"],
    },
    {
      name: "Ludwik Zamenhof",
      active: true,
      category: ["postacie", "literatura", "nauka"],
    },
    {
      name: "Lśnienie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "M jak miłość",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "MacGyver",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Maciej Stuhr",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Madagaskar",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Madonna",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Maffashion",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Magda Gessler",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Magiczny autobus",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Mahatma Gandhi",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Mahomet",
      active: true,
      category: ["postacie", "religia"],
    },
    {
      name: "Majka Jeżowska",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Malanowski i Partnerzy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Mandzio",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Mao Zedong",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Maqbool",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Marek Kondrat",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Marek Perepeczko",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Margaret Thatcher",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Maria Konopnicka",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Maria Skłodowska-Curie",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Marilyn Monroe",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Mark Zuckerberg",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Marlon Brando",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Marlon Brando",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Marsjanin",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Marta Kruk (Codziennie fit)",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Martin Luther King",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Martin Stankiewicz",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Martyna Wojciechowska",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Mata",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Marcin Matczak",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Matka Teresa z Kalkuty",
      active: true,
      category: ["postacie", "religia"],
    },
    {
      name: "Matki, żony i kochanki",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Matrix",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Max Payne",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Mały książę",
      active: true,
      category: ["animacje", "kino/tv", "literatura"],
    },
    {
      name: "Małżeństwo z rozsądku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Merida Waleczna",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Mezo",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Miasteczko South Park",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Michael Jackson",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Michał Milowicz",
      active: true,
      category: ["postacie", "kino/tv", "muzyka"],
    },
    {
      name: "Michał Szpak",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Michał Wiśniewski",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Michał Żebrowski",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Mieszko I",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Mikołaj Kopernik",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Milczenie jest złotem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Milczenie owiec",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Miley Cyrus",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Miodowe lata",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Mission: Impossible",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Miłość na zamówienie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Miś",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Miś Push-Upek",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Miś Uszatek",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Monika Brodka",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Mroczny rycerz",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Muhammad Ali",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Mulan",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Muminki",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Mérida waleczna",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Mój Nikifor",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Mój brat niedźwiedź ",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Na Wspólnej",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Na celowniku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Na dobre i na złe",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Naga broń",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Napoleon Bonaparte",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Natsu",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Neil Armstrong",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Lance Armstrong",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Nelson Mandela",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Nic śmiesznego",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Nie lubię poniedziałku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Nie ma to jak hotel (statek)",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Nie mów nikomu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Niekończąca się opowieść",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Nietykalni",
      active: true,
      category: ["filmy", "kino/tv"],
    },
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
    {
      name: "Nikola Tesla",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Noc w muzeum",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Noce i dnie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Notre-Dame de Paris",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "NyanCat",
      active: true,
      category: ["internet"],
    },
    {
      name: "Nędznicy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "O.S.T.R.",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Och, Karol",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Odlot",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Odlotowe agentki",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Ogniem i mieczem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ojciec chrzestny (seria)",
      active: true,
      category: ["filmy", "kino/tv", "literatura"],
    },
    {
      name: "Olga Tokarczuk",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Ostatni Mohikanin",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ostry dyżur",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Oszukać przeznaczenie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Owca w Wielkim Mieście",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Pablo Picasso",
      active: true,
      category: ["postacie"],
    },
    {
      name: "Pachnidło",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Palce lizać",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Pan Taduesz",
      active: true,
      category: ["filmy", "kino/tv", "literatura"],
    },
    {
      name: "Pan Wołodyjowski",
      active: true,
      category: ["filmy", "kino/tv", "literatura"],
    },
    {
      name: "Papież Franciszek",
      active: true,
      category: ["postacie", "polityka", "religia"],
    },
    {
      name: "Park Jurajski",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Parszywa dwunastka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Pasja",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Paweł Deląg",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Peja",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Pelé",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Pensjonat pod Różą",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Pezet",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Pezet",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Pianista",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Pierwsza miłość",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Piesek Leszek",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Pingwiny z Madagaskaru",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Pinky i Mózg",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Piotr Cyrwus",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Piotr Fronczewski",
      active: true,
      category: ["postacie", "kino/tv", "muzyka"],
    },
    {
      name: "Piotr Kupicha",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Piotr Rubik",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Piraci z Karaibów (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Pitbull",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Piękna i Bestia",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Piękny umysł",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Piła",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Piłkarski poker",
      active: true,
      category: ["filmy", "kino/tv", "sport"],
    },
    {
      name: "Plebania",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Plotkara",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Pocahontas",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Pod gradobiciem pytań",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Podróż za jeden uśmiech",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Podziemny krąg (Fight Club)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Pogromcy duchów",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Pokłosie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Polskie drogi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Popek",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Poranek kojota",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Poszukiwany, poszukiwana",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Potop",
      active: true,
      category: ["filmy", "kino/tv", "literatura"],
    },
    {
      name: "Potwory i spółka",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Powrót do przyszłości",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Prawo Agaty",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Prawo Marcina",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Predator",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Prestiż",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Prosta historia",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Przedwiośnie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Przekręt",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Przeminęło z wiatrem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Przygody kota Filemona",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Przyjaciółki",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Psy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ptaki ciernistych krzewów",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Pulp Fiction",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Punisher",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Pół żartem, pół serio",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Quebonafide",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Quo Vadis",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "RRRrrrr!!!",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Radosław Kotarski",
      active: true,
      category: ["postacie", "internet", "nauka"],
    },
    {
      name: "Ralph Demolka",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Rambo (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ranczo",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Ratatuj",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Red Lipstick Monster",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Rejs",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Reksio",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Remigiusz Wierzgoń (reZi)",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Requiem dla snu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Rh+",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Robert Biedroń",
      active: true,
      category: ["postacie"],
    },
    {
      name: "Robert De Niro",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Robert Korzeniowski",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Robert Kubica",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Robert Lewandowski",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Robert Makłowicz",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Robert Pasut",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Robert Więckiewicz",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Robin Hood",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Rocky (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
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
    {
      name: "Rodzina Soprano",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Rodzina zastępcza",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Roger Moore",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Roman Giertych",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Roman Polański",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Ronald Reagan",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Roxie Węgiel",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Ryś",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Rzymskie wakacje",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Róża Thun",
      active: true,
      category: ["postacie", "polityka"],
    },
    {
      name: "Różowe lata siedemdziesiąte",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Rękopis znaleziony w Saragossie",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Sabrina, nastoletnia czarownica",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Sami swoi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Samo życie",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Sanah",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Sarnie żniwo, czyli pokusa statuetkowego szlaku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "SciFun",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Scooby Doo",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Seks w wielkim mieście",
      active: true,
      category: ["filmy", "kino/tv", "seriale", "kino/tv"],
    },
    {
      name: "Seksmisja",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Serbski film",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Shaquille O'Neal",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Sherlock",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Shrek (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Siedem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
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
    {
      name: "Siekierezada",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Simpsonowie",
      active: true,
      category: ["animacje", "kino/tv"],
    },
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
    {
      name: "Skazany na bluesa",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Skyfall",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Slumdog. Milioner z ulicy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Smerfy",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Sobel",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Sokrates",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Sonic X",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Spadkobiercy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "SpongeBob Kanciastoporty",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Stanisław August Poniatowski",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Stanisław Lem",
      active: true,
      category: ["postacie", "literatura"],
    },
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
      name: "Steven Spielberg",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Stowarzyszenie Umarłych Poetów",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Straszny film",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Stuu Burton",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Superman",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Sylvester Stallone",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Sylwester Wardęga",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Szczęki",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Szczęśliwego Nowego Jorku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Szeregowiec Ryan",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Szklana pułapka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Sztos",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Szósty zmysł",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Sąsiedzi",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Słodkie kłamstewka",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Taco Hemingway",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Tadeusz Kościuszko",
      active: true,
      category: ["postacie", "polityka", "historia"],
    },
    {
      name: "Taksówkarz",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Tam i z powrotem",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Taxi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Taylor Swift",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Tede",
      active: true,
      category: ["postacie", "muzyka"],
    },
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
    {
      name: "Testosteron",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "The Beatles",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Ich Troje",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Theodore Roosevelt",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Titanic",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "To ja, złodziej",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "To nie jest kraj dla starych ludzi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Tom Hanks",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Tomasz Edison",
      active: true,
      category: ["postacie", "nauka"],
    },
    {
      name: "Tomasz Kot",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Toy Story",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Troja",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Truman Show",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Trzy kolory (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Trzy szalone zera",
      active: true,
      category: ["serial"],
    },
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
    {
      name: "Usain Bolt",
      active: true,
      category: ["postacie", "sport"],
    },
    {
      name: "Usta usta",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "V jak vendetta",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Vabank",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Vaiana: skarb oceanu",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Vanilla Sky",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Vito Bambino",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "W chmurach",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "W garniturach",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "W głowie się nie mieści",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "W.I.T.C.H. Czarodziejki",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "W11 - Wydział Śledczy",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "WALL·E",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Walt Disney",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Wednesday",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Weekend u Berniego",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Wersow",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Wesele",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Wiedźmin",
      active: true,
      category: ["postacie", "kino/tv", "literatura"],
    },
    {
      name: "Wielka szóstka",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Wielki Szu",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Wilk z Wall Street",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Will Smith",
      active: true,
      category: ["postacie", "kino/tv", "muzyka"],
    },
    {
      name: "William Szekspir",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Winston Churchill",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Wisława Szymborska",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Witold Pilecki",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Więzień nienawiści",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Wojciech Mann",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Wojownicze Żółwie Ninja",
      active: true,
      category: ["filmy", "kino/tv", "animacje"],
    },
    {
      name: "Wołyń",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Wszyscy jesteśmy Chrystusami",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Wyrok w Norymberdze",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Wyspa Totalnej Porażki",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Wyspa tajemnic",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Włatcy móch",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Włodzimierz Lenin",
      active: true,
      category: ["postacie", "historia"],
    },
    {
      name: "Włodzimierz Wysocki",
      active: true,
      category: ["postacie", "muzyka", "kino/tv"],
    },
    {
      name: "Wściekłe pięści Węża",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Young Leosia",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Z Archiwum X",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Za wszelką cenę",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zabić drozda",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zabójcza broń",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zadyma w Bangkoku",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zakochana złośnica",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zapach kobiety",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zaplątani",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Załoga G",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zbigniew Buczkowski",
      active: true,
      category: ["postacie", "kino/tv"],
    },
    {
      name: "Zbigniew Herbert",
      active: true,
      category: ["postacie", "literatura"],
    },
    {
      name: "Zbigniew Hołdys",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Zemsta",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zielona mila",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zjawa",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zmiennicy",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zmierzch",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Zodiak",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zostać Miss",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Zwariowane Melodie ",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Zwierzogród",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Korespondent Bryan",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "rodzinka.pl",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Łona",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Łowca androidów",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Ścigany",
      active: true,
      category: ["filmy", "kino/tv"],
    },
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
    {
      name: "Świat według Ludwiczka",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Świnka Peppa",
      active: true,
      category: ["animacje", "kino/tv"],
    },
    {
      name: "Święta wojna",
      active: true,
      category: ["seriale", "kino/tv"],
    },
    {
      name: "Święty Mikołaj",
      active: true,
      category: ["postacie"],
    },
    {
      name: "Żandarm z Saint-Tropez (seria)",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Życie Pi",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Życie jest piękne",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Żywot Briana",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Żądło",
      active: true,
      category: ["filmy", "kino/tv"],
    },
    {
      name: "Prostracja",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "MrBeast",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "PewDiePie",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Paweł Svinarski",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Ojwojtek",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Wykop.pl",
      active: true,
      category: ["internet"],
    },
    {
      name: "Facebook",
      active: true,
      category: ["internet"],
    },
    {
      name: "Twitter / X",
      active: true,
      category: ["internet"],
    },
    {
      name: "Karachan",
      active: true,
      category: ["internet"],
    },
    {
      name: "4chan",
      active: true,
      category: ["internet"],
    },
    {
      name: "Reddit",
      active: true,
      category: ["internet"],
    },
    {
      name: "Instagram",
      active: true,
      category: ["internet"],
    },
    {
      name: "TikTok",
      active: true,
      category: ["internet"],
    },
    {
      name: "YouTube",
      active: true,
      category: ["internet"],
    },
    {
      name: "kurnik.pl",
      active: true,
      category: ["internet"],
    },
    {
      name: "Grono.net",
      active: true,
      category: ["internet"],
    },
    {
      name: "Nasza Klasa (nk.pl)",
      active: true,
      category: ["internet"],
    },
    {
      name: "LinkedIn",
      active: true,
      category: ["internet"],
    },
    {
      name: "Onet.pl",
      active: true,
      category: ["internet"],
    },
    {
      name: "Wp.pl",
      active: true,
      category: ["internet"],
    },
    {
      name: "GMail",
      active: true,
      category: ["internet"],
    },
    {
      name: "Yahoo",
      active: true,
      category: ["internet"],
    },
    {
      name: "Chrome",
      active: true,
      category: ["internet"],
    },
    {
      name: "Firefox",
      active: true,
      category: ["internet"],
    },
    {
      name: "Bazyland",
      active: true,
      category: ["internet"],
    },
    {
      name: "Śpiewające Brzdące",
      active: true,
      category: ["internet"],
    },
    {
      name: "czvjnik",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "GENZIE",
      active: true,
      category: ["internet"],
    },
    {
      name: "Team X",
      active: true,
      category: ["internet"],
    },
    {
      name: "Masza i Niedźwiedź",
      active: true,
      category: ["internet"],
    },
    {
      name: "BEKSY",
      active: true,
      category: ["internet"],
    },
    {
      name: "Abstrachuje",
      active: true,
      category: ["internet"],
    },
    {
      name: "PatecWariatec",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Fit  Lovers",
      active: true,
      category: ["internet"],
    },
    {
      name: "Niekryty krytyk",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Maciej Dąbrowski (Człowiek warga), z dvpy",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Mini Majk",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Krzysztof Kononowicz",
      active: true,
      category: ["postacie", "internet", "polityka"],
    },
    {
      name: "Historia bez cenzury",
      active: true,
      category: ["internet", "polityka"],
    },
    {
      name: "Damianero",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Cyber Marian",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Weronika Truszczyńska",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Jak będzie w akapie (JBWA)",
      active: true,
      category: ["internet"],
    },
    {
      name: "Janusz",
      active: true,
      category: ["internet"],
    },
    {
      name: "Grażyna",
      active: true,
      category: ["internet"],
    },
    {
      name: "Typowy Seba",
      active: true,
      category: ["internet"],
    },
    {
      name: "Karyna",
      active: true,
      category: ["internet"],
    },
    {
      name: "Nosacz sundajski",
      active: true,
      category: ["internet", "zwierzęta"],
    },
    {
      name: "WATAHA - Krulestwo",
      active: true,
      category: ["internet"],
    },
    {
      name: "Demotywatory",
      active: true,
      category: ["internet"],
    },
    {
      name: "Nonsensopedia",
      active: true,
      category: ["internet"],
    },
    {
      name: "Wikipedia",
      active: true,
      category: ["internet"],
    },
    {
      name: "Mamiko",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Marcin Dubiel",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Daniel Magical",
      active: true,
      category: ["postacie", "internet"],
    },
    {
      name: "Poker Face",
      active: true,
      category: ["internet", "muzyka"],
    },
    {
      name: "Pedobear",
      active: true,
      category: ["internet"],
    },
    {
      name: "Nyan Cat",
      active: true,
      category: ["internet", "zwierzęta"],
    },
    {
      name: "Latający potwór spaghetti",
      active: true,
      category: ["internet", "religia"],
    },
    {
      name: "Przypadek? Nie sądzę",
      active: true,
      category: ["internet"],
    },
    {
      name: "kasiu wruć",
      active: true,
      category: ["internet"],
    },
    {
      name: "powrut (Kubicy)",
      active: true,
      category: ["internet"],
    },
    {
      name: "Queen",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Linkin Park",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Dżem",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "The Beatles",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Lady Pank",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Happysad",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "The Rolling Stones",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "The Animals",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Abba",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Raz, Dwa, Trzy",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "T.Love",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Strachy na lachy",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Czerwone gitary",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Red Hot Chilli Peppers",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "U2",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Just V",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Bob Marley",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Black Sabbath",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Led Zeppelin",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "AC/DC",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Metallica",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Nirvana",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Guns N' Roses",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Pink Floyd",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Iron Maiden",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "The Doors",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Aerosmith",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Rammstein",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Marilyn Manson",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Green Day",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Budka Suflera",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Marian Lichtman",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Krzysztof Cugowski",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Perfect",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Bajm",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Varius Manx",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Stan Borys",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Wilki",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Zbigniew Wodecki",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Edyta Geppert",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Maanam",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Kombi(i)",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Papa Dance",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Robert Gawliński",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Artur Rojek",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Myslovitz",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "De Mono",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Elektryczne Gitary",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Czesław Niemen",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Blue Cafe",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Sistars",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Hey",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Edyta Górniak",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Maryla Rodowicz",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Marek Biliński",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Marek Grechuta",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Violetta Villas",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Feel",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Adele",
      active: true,
      category: ["postacie", "muzyka"],
    },
    {
      name: "Liroy",
      active: true,
      category: ["postacie", "polityka", "muzyka"],
    },
    {
      name: "Gang Albanii",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Kaliber 44",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Paweł Kukiz",
      active: true,
      category: ["postacie", "polityka", "muzyka"],
    },
    {
      name: "Coma",
      active: true,
      category: ["muzyka"],
    },
    {
      name: "Kult",
      active: true,
      category: ["muzyka"],
    },
  ]);
  const [category, setCategory] = useState([
    { name: "filmy", active: false },
    { name: "kino/tv", active: false },
    { name: "seriale", active: false },
    { name: "animacje", active: false },
    { name: "internet", active: false },
    { name: "przysłowia", active: false },
    { name: "postacie", active: false },
    { name: "muzyka", active: false },
    { name: "sport", active: false },
    { name: "historia", active: false },
    { name: "literatura", active: false },
    { name: "nauka", active: false },
    { name: "polityka", active: false },
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
    playSuccessSound,
    playFailSound,
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
