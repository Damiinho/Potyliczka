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
    { name: "Nietykalni", active: true, category: ["filmy"] },
    { name: "Hamilton", active: true, category: ["filmy"] },
    { name: "Jożin z Bażin", active: true, category: ["internet"] },
    { name: "Chłopaki nie płaczą", active: true, category: ["filmy"] },
    { name: "Szklana pułapka", active: true, category: ["filmy"] },
    { name: "07 zgłoś się", active: true, category: ["filmy"] },
    { name: "12 prac Asteriksa", active: true, category: ["filmy"] },
    { name: "13 posterunek", active: true, category: ["seriale"] },
    { name: "2001: Odyseja kosmiczna", active: true, category: ["filmy"] },
    { name: "Maqbol", active: true, category: ["filmy"] },
    { name: "12 gniewnych ludzi", active: true, category: ["filmy"] },
    { name: "300", active: true, category: ["filmy"] },
    { name: "39 i pół", active: true, category: ["seriale"] },
    { name: "4 pokoje", active: true, category: ["filmy"] },
    { name: "Czterdziestolatek", active: true, category: ["filmy"] },
    { name: "50 twarzy Greya", active: true, category: ["filmy"] },
    { name: "8. mila", active: true, category: ["filmy"] },
    { name: "Czyż nie dobija się koni?", active: true, category: ["filmy"] },
    { name: "Wednesday", active: true, category: ["seriale"] },
    { name: "Ach, ten Andy!", active: true, category: ["animacje"] },
    { name: "Odlotowe agentki", active: true, category: ["animacje"] },
    { name: "Atomówki", active: true, category: ["animacje"] },
    { name: "Bolek i Lolek", active: true, category: ["animacje"] },
    { name: "Reksio", active: true, category: ["animacje"] },
    { name: "Ada! To nie wypada!", active: true, category: ["filmy"] },
    { name: "Adwokat diabła", active: true, category: ["filmy"] },
    { name: "Ajlawju", active: true, category: ["filmy"] },
    { name: "Akademia Policyjna", active: true, category: ["filmy"] },
    { name: "Wilk z Wall Street", active: true, category: ["filmy"] },
    { name: "Aladyn", active: true, category: ["animacje"] },
    { name: "Allo Allo!", active: true, category: ["filmy"] },
    {
      name: "Alvin i wiewiórki ",
      active: true,
      category: ["filmy", "animacje"],
    },
    { name: "Amadeusz", active: true, category: ["filmy"] },
    { name: "Amelia", active: true, category: ["filmy"] },
    { name: "Bulwar zachodzącego słońca", active: true, category: ["filmy"] },
    { name: "American Beauty", active: true, category: ["filmy"] },
    { name: "American Pie", active: true, category: ["filmy"] },
    { name: "Alternatywy 4", active: true, category: ["filmy"] },
    { name: "Aniołki Charliego", active: true, category: ["filmy"] },
    { name: "Antychryst", active: true, category: ["filmy"] },
    { name: "Aparatka", active: true, category: ["animacje"] },
    { name: "Iniemamocni", active: true, category: ["animacje"] },
    { name: "Hotel Transylwania", active: true, category: ["animacje"] },
    { name: "Merida Waleczna", active: true, category: ["animacje"] },
    { name: "Jak ukraść księżyc", active: true, category: ["animacje"] },
    { name: "Vaiana: skarb oceanu", active: true, category: ["animacje"] },
    { name: "Apetyt na miłość", active: true, category: ["filmy"] },
    { name: "Apetyt na życie", active: true, category: ["filmy"] },
    { name: "Asterix na olimpiadzie", active: true, category: ["filmy"] },
    {
      name: "Asterix i Obelix: Misja Kleopatra ",
      active: true,
      category: ["filmy"],
    },
    { name: "Auta", active: true, category: ["filmy", "animacje"] },
    { name: "Avatar", active: true, category: ["filmy"] },
    { name: "Avengers", active: true, category: ["filmy"] },
    { name: "Animaniacy", active: true, category: ["animacje"] },
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
      category: ["filmy", "animacje", "seriale"],
    },
    { name: "Ben 10", active: true, category: ["animacje"] },
    { name: "Beverly Hills, 90210", active: true, category: ["filmy"] },
    { name: "Bezsenność", active: true, category: ["filmy"] },
    { name: "Bękarty wojny", active: true, category: ["filmy"] },
    { name: "Biali nie potrafią skakać", active: true, category: ["filmy"] },
    { name: "Big Bang", active: true, category: ["filmy"] },
    { name: "Bing Lebowski", active: true, category: ["filmy"] },
    { name: "Podziemny krąg (Fight Club)", active: true, category: ["filmy"] },
    { name: "Teoria wielkiego podrywy", active: true, category: ["seriale"] },
    { name: "Blade Runner 2049", active: true, category: ["filmy"] },
    { name: "Blask", active: true, category: ["filmy"] },
    {
      name: "Bliskie spotkania trzeciego stopnia",
      active: true,
      category: ["filmy"],
    },
    { name: "Bliźniaki Cramp", active: true, category: ["animacje"] },
    { name: "Kraina lodu", active: true, category: ["animacje"] },
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
    { name: "Było sobie życie", active: true, category: ["animacje"] },
    {
      name: "Bardzo przygodowe podróże Kulfona",
      active: true,
      category: ["animacje"],
    },
    { name: "Californication", active: true, category: ["filmy"] },
    { name: "Cała naprzód", active: true, category: ["filmy"] },
    { name: "Camera Café", active: true, category: ["filmy"] },
    { name: "Casablanca", active: true, category: ["filmy"] },
    { name: "Cast Away – poza światem", active: true, category: ["filmy"] },
    { name: "Cashback", active: true, category: ["filmy"] },
    { name: "Casino Royale", active: true, category: ["filmy"] },
    { name: "Chaos", active: true, category: ["filmy"] },
    { name: "Chip i Dale Brygada RR", active: true, category: ["animacje"] },
    { name: "Chichot losu", active: true, category: ["filmy"] },
    { name: "Chirurdzy", active: true, category: ["filmy"] },
    { name: "Coco", active: true, category: ["animacje"] },
    { name: "Wyrok w Norymberdze", active: true, category: ["filmy"] },
    { name: "Chłopaki nie płaczą", active: true, category: ["filmy"] },
    { name: "Chłopcy z ferajny", active: true, category: ["filmy"] },
    { name: "Chłopi", active: true, category: ["filmy"] },
    { name: "Chłopiec w pasiastej piżamie", active: true, category: ["filmy"] },
    {
      name: "Chojrak – tchórzliwy pies",
      active: true,
      category: ["animacje"],
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
    { name: "Co nowego u Scooby'ego?", active: true, category: ["animacje"] },
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
    { name: "Człowiek Biegunka", active: true, category: ["animacje"] },
    { name: "Miś Push-Upek", active: true, category: ["animacje"] },
    { name: "Piesek Leszek", active: true, category: ["animacje"] },
    { name: "Kapitan Bomba", active: true, category: ["animacje"] },
    { name: "Owca w Wielkim Mieście", active: true, category: ["animacje"] },
    { name: "Generał Italia", active: true, category: ["animacje"] },
    { name: "Pod gradobiciem pytań", active: true, category: ["animacje"] },
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
      category: ["animacje"],
    },
    { name: "Daleko od noszy", active: true, category: ["seriale"] },
    { name: "Daleko od szosy", active: true, category: ["filmy"] },
    { name: "Deadpool", active: true, category: ["filmy"] },
    { name: "Dawno temu w trawie", active: true, category: ["filmy"] },
    { name: "Deja vu", active: true, category: ["filmy"] },
    {
      name: "Death Note",
      active: true,
      category: ["filmy", "seriale", "animacje"],
    },
    { name: "Dekalog", active: true, category: ["filmy"] },
    { name: "Desperado", active: true, category: ["filmy"] },
    { name: "Detektyw Monk", active: true, category: ["seriale"] },
    { name: "Dexter", active: true, category: ["seriale"] },
    { name: "Laboratorium Dextera", active: true, category: ["animacje"] },
    { name: "Bruce Wszechmogący", active: true, category: ["filmy"] },
    { name: "Diuna", active: true, category: ["filmy"] },
    { name: "Django", active: true, category: ["filmy"] },
    { name: "Dobry, zły i brzydki", active: true, category: ["filmy"] },
    { name: "Dr House", active: true, category: ["seriale"] },
    { name: "Doktor Who", active: true, category: ["seriale"] },
    {
      name: "Dom dla zmyślonych przyjaciół pani Foster",
      active: true,
      category: ["animacje"],
    },
    { name: "Dom nad rozlewiskiem ", active: true, category: ["seriale"] },
    { name: "Dragon Ball", active: true, category: ["animacje"] },
    { name: "Droga do El Dorado", active: true, category: ["animacje"] },
    { name: "Droopy, superdetektyw", active: true, category: ["animacje"] },
    { name: "Drogówka", active: true, category: ["seriale"] },
    { name: "Drużyna A", active: true, category: ["seriale"] },
    { name: "Duma i uprzedzenie", active: true, category: ["filmy"] },
    { name: "Dzień świra", active: true, category: ["filmy"] },
    { name: "Dzień wagarowicza", active: true, category: ["filmy"] },
    { name: "Dzień świstaka", active: true, category: ["filmy"] },
    { name: "Dziewczyna z Alabamy", active: true, category: ["filmy"] },
    { name: "Dziewczyny do wzięcia", active: true, category: ["filmy"] },
    { name: "Diabelski plan", active: true, category: ["seriale"] },
    { name: "Donnie Darko", active: true, category: ["filmy"] },
    { name: "Doktor Jekyll i pan Hyde", active: true, category: ["filmy"] },
    { name: "Bejzbolokosz", active: true, category: ["filmy"] },
    { name: "E.T.", active: true, category: ["filmy"] },
    { name: "E=mc²", active: true, category: ["filmy"] },
    { name: "Ed, Edd i Eddy", active: true, category: ["animacje"] },
    { name: "Efekt motyla", active: true, category: ["filmy"] },
    { name: "Egzorcysta", active: true, category: ["filmy"] },
    { name: "Ekstradycja", active: true, category: ["seriale"] },
    { name: "Epoka lodowcowa", active: true, category: ["filmy", "animacje"] },
    { name: "Eurotrip", active: true, category: ["filmy"] },
    { name: "Faceci do wzięcia", active: true, category: ["seriale"] },
    { name: "Faceci w czerni", active: true, category: ["filmy"] },
    { name: "Fala zbrodni", active: true, category: ["seriale"] },
    { name: "Fałszywa dwunastka", active: true, category: ["filmy"] },
    { name: "Fantastyczna Czwórka", active: true, category: ["filmy"] },
    { name: "Fantomas", active: true, category: ["filmy"] },
    { name: "Fineasz i Ferb", active: true, category: ["animacje"] },
    { name: "Flintstonowie ", active: true, category: ["animacje"] },
    { name: "Forrest Gump", active: true, category: ["filmy"] },
    { name: "Fuks", active: true, category: ["filmy"] },
    { name: "Full Metal Jacket", active: true, category: ["filmy"] },
    { name: "Futurama", active: true, category: ["animacje"] },
    { name: "Galerianki", active: true, category: ["filmy"] },
    { name: "Gandhi", active: true, category: ["filmy"] },
    { name: "Gang Olsena", active: true, category: ["filmy"] },
    { name: "Garfield", active: true, category: ["filmy", "animacje"] },
    {
      name: "Gdzie jest Nemo?",
      active: true,
      category: ["filmy", "animacje"],
    },
    { name: "Ghost Rider", active: true, category: ["filmy"] },
    { name: "Gladiator", active: true, category: ["filmy"] },
    { name: "Glina", active: true, category: ["seriale"] },
    {
      name: "Głowa rodziny (Family Guy)",
      active: true,
      category: ["animacje"],
    },
    {
      name: "Gnijąca panna młoda",
      active: true,
      category: ["filmy", "animacje"],
    },
    { name: "Gorączka sobotniej nocy", active: true, category: ["filmy"] },
    { name: "Gotowe na wszystko", active: true, category: ["seriale"] },
    { name: "Gra o tron", active: true, category: ["seriale"] },
    { name: "Graczykowie", active: true, category: ["seriale"] },
    { name: "Gran Torino", active: true, category: ["filmy"] },
    { name: "Gumisie", active: true, category: ["animacje"] },
    { name: "Gwiezdne wojny (seria)", active: true, category: ["filmy"] },
    { name: "H2O – wystarczy kropla", active: true, category: ["seriale"] },
    { name: "Camp Rock", active: true, category: ["filmy"] },
    { name: "Hannah Montana", active: true, category: ["seriale"] },
    { name: "Hannibal", active: true, category: ["filmy"] },
    { name: "Harry Potter (seria)", active: true, category: ["filmy"] },
    {
      name: "He-Man i władcy wszechświata",
      active: true,
      category: ["animacje"],
    },
    { name: "Hela w opałach", active: true, category: ["seriale"] },
    { name: "Helikopter w ogniu", active: true, category: ["filmy"] },
    { name: "High School Musical", active: true, category: ["filmy"] },
    { name: "Hitman", active: true, category: ["filmy"] },
    { name: "Hobbit", active: true, category: ["filmy"] },
    { name: "Hotel Zacisze", active: true, category: ["seriale"] },
    { name: "House of Cards ", active: true, category: ["seriale"] },
    { name: "Hoży Doktorzy", active: true, category: ["seriale"] },
    { name: "Hydrozagadka", active: true, category: ["filmy"] },
    { name: "I kto to mówi", active: true, category: ["filmy"] },
    { name: "I kto tu rządzi?", active: true, category: ["seriale"] },
    { name: "Idiokracja", active: true, category: ["filmy"] },
    { name: "Ile waży koń trojański?", active: true, category: ["filmy"] },
    { name: "Iluzjonista", active: true, category: ["filmy"] },
    { name: "Incepcja", active: true, category: ["filmy"] },
    { name: "Interstellar", active: true, category: ["filmy"] },
    { name: "Indiana Jones (seria)", active: true, category: ["filmy"] },
    { name: "Ja to mam szczęście!", active: true, category: ["seriale"] },
    { name: "Ja, robot", active: true, category: ["filmy"] },
    { name: "Zjawa", active: true, category: ["filmy"] },
    { name: "Jak działa jamniczek", active: true, category: ["animacje"] },
    { name: "Jak poznałem waszą matkę", active: true, category: ["seriale"] },
    {
      name: "Jak rozpętałem drugą wojnę światową",
      active: true,
      category: ["filmy"],
    },
    { name: "Jak wytresować smoka", active: true, category: ["filmy"] },
    { name: "Janosik", active: true, category: ["seriale"] },
    { name: "Jaś Fasola", active: true, category: ["seriale"] },
    { name: "Jetsonowie", active: true, category: ["animacje"] },
    { name: "Odlot", active: true, category: ["animacje"] },
    { name: "Jeździec bez głowy", active: true, category: ["filmy"] },
    { name: "Jeż Jerzy", active: true, category: ["filmy", "animacje"] },
    {
      name: "Job, czyli ostatnia szara komórka",
      active: true,
      category: ["filmy"],
    },
    { name: "Joker", active: true, category: ["filmy"] },
    { name: "Johnny Bravo", active: true, category: ["animacje"] },
    { name: "Zwierzogród", active: true, category: ["animacje"] },
    { name: "Kac Vegas", active: true, category: ["filmy"] },
    { name: "Kac Wawa", active: true, category: ["filmy"] },
    { name: "Kacze opowieści", active: true, category: ["seriale"] },
    { name: "Kapitan Ameryka", active: true, category: ["filmy"] },
    { name: "Kaligula", active: true, category: ["filmy"] },
    { name: "Kod da Vinci", active: true, category: ["filmy"] },
    { name: "Karate Kid", active: true, category: ["filmy"] },
    { name: "Kariera Nikodema Dyzmy", active: true, category: ["filmy"] },
    { name: "Kariera Nikosia Dyzmy", active: true, category: ["filmy"] },
    { name: "Kasia i Tomek", active: true, category: ["seriale"] },
    { name: "Katyń", active: true, category: ["filmy"] },
    { name: "Kevin sam w domu (seria)", active: true, category: ["filmy"] },
    { name: "Kiler", active: true, category: ["filmy"] },
    { name: "Kill Bill", active: true, category: ["filmy"] },
    { name: "Kingsajz", active: true, category: ["filmy"] },
    { name: "Klan", active: true, category: ["seriale"] },
    { name: "Kler", active: true, category: ["filmy"] },
    { name: "Kocia ferajna", active: true, category: ["animacje"] },
    { name: "Kogel-mogel", active: true, category: ["filmy"] },
    { name: "Komisarz Alex ", active: true, category: ["seriale"] },
    { name: "Kosmiczne jaja", active: true, category: ["filmy"] },
    { name: "Kosmiczny mecz", active: true, category: ["filmy"] },
    {
      name: "Koszmar z ulicy Wiązów (seria)",
      active: true,
      category: ["filmy"],
    },
    { name: "Kroll", active: true, category: ["filmy"] },
    { name: "Krowa i Kurczak", active: true, category: ["animacje"] },
    { name: "Król Lew", active: true, category: ["animacje"] },
    { name: "Królowie lata", active: true, category: ["filmy"] },
    { name: "Krótki film o zabijaniu", active: true, category: ["filmy"] },
    { name: "Kryminalni", active: true, category: ["seriale"] },
    { name: "Krzyk", active: true, category: ["filmy"] },
    { name: "Krzyżacy", active: true, category: ["filmy"] },
    { name: "Książę Persji: Piaski czasu", active: true, category: ["filmy"] },
    { name: "Księga dżungli", active: true, category: ["filmy"] },
    { name: "Księżniczka", active: true, category: ["filmy"] },
    { name: "Księżyc w nowiu", active: true, category: ["filmy"] },
    { name: "Kung Fu Panda", active: true, category: ["animacje"] },
    { name: "Laboratorium Dextera", active: true, category: ["animacje"] },
    { name: "Las Vegas Parano", active: true, category: ["filmy"] },
    { name: "Last minute", active: true, category: ["filmy"] },
    {
      name: "Latający cyrk Monty Pythona",
      active: true,
      category: ["seriale"],
    },
    { name: "Legalna blondynka", active: true, category: ["filmy"] },
    { name: "Lejdis", active: true, category: ["filmy"] },
    { name: "Leon zawodowiec", active: true, category: ["filmy"] },
    { name: "Lilo i Stich", active: true, category: ["animacje"] },
    { name: "Lista Schindlera", active: true, category: ["filmy"] },
    { name: "Życie jest piękne", active: true, category: ["filmy"] },
    { name: "Listy do M.", active: true, category: ["filmy"] },
    { name: "Lokatorzy", active: true, category: ["seriale"] },
    { name: "Londyńczycy", active: true, category: ["seriale"] },
    { name: "Lot nad kukułczym gniazdem", active: true, category: ["filmy"] },
    { name: "Zadyma w Bangkoku", active: true, category: ["filmy"] },
    { name: "Asy przestworzy", active: true, category: ["filmy"] },
    { name: "Lśnienie", active: true, category: ["filmy"] },
    { name: "Łowca androidów", active: true, category: ["filmy"] },
    { name: "M jak miłość", active: true, category: ["seriale"] },
    { name: "MacGyver", active: true, category: ["seriale"] },
    { name: "Madagaskar", active: true, category: ["filmy"] },
    { name: "Magiczny autobus", active: true, category: ["animacje"] },
    { name: "Malanowski i Partnerzy", active: true, category: ["seriale"] },
    { name: "Małżeństwo z rozsądku", active: true, category: ["filmy"] },
    { name: "Marsjanin", active: true, category: ["filmy"] },
    { name: "Matki, żony i kochanki", active: true, category: ["filmy"] },
    { name: "Matrix", active: true, category: ["filmy"] },
    { name: "Max Payne", active: true, category: ["filmy"] },
    { name: "Mérida waleczna", active: true, category: ["animacje"] },
    { name: "Miasteczko South Park", active: true, category: ["animacje"] },
    { name: "Milczenie owiec", active: true, category: ["filmy"] },
    { name: "Milczenie jest złotem", active: true, category: ["filmy"] },
    { name: "Miłość na zamówienie", active: true, category: ["filmy"] },
    { name: "Miodowe lata", active: true, category: ["seriale"] },
    { name: "Mission: Impossible", active: true, category: ["filmy"] },
    { name: "Mój Nikifor", active: true, category: ["filmy"] },
    { name: "Mroczny rycerz", active: true, category: ["filmy"] },
    { name: "Na celowniku", active: true, category: ["filmy"] },
    { name: "Na dobre i na złe", active: true, category: ["seriale"] },
    { name: "Na Wspólne", active: true, category: ["seriale"] },
    { name: "Naga broń", active: true, category: ["filmy"] },
    { name: "Nędznicy", active: true, category: ["filmy"] },
    { name: "Nic śmiesznego", active: true, category: ["filmy"] },
    { name: "Nie lubię poniedziałku", active: true, category: ["filmy"] },
    { name: "Nie mów nikomu", active: true, category: ["filmy"] },
    {
      name: "Nie ma to jak hotel (statek)",
      active: true,
      category: ["seriale"],
    },
    { name: "Niekończąca się opowieść", active: true, category: ["filmy"] },
    { name: "Miś", active: true, category: ["filmy"] },
    { name: "Miś Uszatek", active: true, category: ["animacje"] },
    { name: "Mój brat niedźwiedź ", active: true, category: ["animacje"] },
    { name: "Mulan", active: true, category: ["animacje"] },
    { name: "Muminki", active: true, category: ["animacje"] },
    { name: "Niewolnica Isaura", active: true, category: ["seriale"] },
    { name: "Nigdy nie mów nigdy", active: true, category: ["filmy"] },
    { name: "Noc w muzeum", active: true, category: ["filmy"] },
    { name: "Noce i dnie", active: true, category: ["filmy"] },
    { name: "Och, Karol", active: true, category: ["filmy"] },
    { name: "Odlotowe agentki", active: true, category: ["animacje"] },
    { name: "Ogniem i mieczem", active: true, category: ["filmy"] },
    { name: "Ojciec chrzestny", active: true, category: ["filmy"] },
    { name: "Ostatni Mohikanin", active: true, category: ["filmy"] },
    { name: "Ostry dyżur", active: true, category: ["seriale"] },
    { name: "Oszukać przeznaczenie", active: true, category: ["filmy"] },
    { name: "Pachnidło", active: true, category: ["filmy"] },
    { name: "Palce lizać", active: true, category: ["filmy"] },
    { name: "Pan Taduesz", active: true, category: ["filmy"] },
    { name: "Pan Wołodyjowski", active: true, category: ["filmy"] },
    { name: "Park Jurajski", active: true, category: ["filmy"] },
    { name: "Parszywa dwunastka", active: true, category: ["filmy"] },
    { name: "Pasja", active: true, category: ["filmy"] },
    { name: "Żądło", active: true, category: ["filmy"] },
    { name: "Pensjonat pod Różą", active: true, category: ["seriale"] },
    { name: "Pianista", active: true, category: ["filmy"] },
    { name: "Pierwsza miłość", active: true, category: ["filmy"] },
    { name: "Piękny umysł", active: true, category: ["filmy"] },
    { name: "Piła", active: true, category: ["filmy"] },
    { name: "Piłkarski poker", active: true, category: ["filmy"] },
    { name: "Pingwiny z Madagaskaru", active: true, category: ["animacje"] },
    { name: "Pinky i Mózg", active: true, category: ["animacje"] },
    { name: "Piraci z Karaibów (seria)", active: true, category: ["filmy"] },
    { name: "Pitbull", active: true, category: ["filmy"] },
    { name: "Plebania", active: true, category: ["seriale"] },
    { name: "Plotkara", active: true, category: ["seriale"] },
    { name: "Podróż za jeden uśmiech", active: true, category: ["filmy"] },
    { name: "Pogromcy duchów", active: true, category: ["filmy"] },
    { name: "Pokłosie", active: true, category: ["filmy"] },
    { name: "Polskie drogi", active: true, category: ["filmy"] },
    { name: "Poranek kojota", active: true, category: ["filmy"] },
    { name: "Potop", active: true, category: ["filmy"] },
    { name: "Poszukiwany, poszukiwana", active: true, category: ["filmy"] },
    { name: "Potwory i spółka", active: true, category: ["animacje"] },
    { name: "Wielka szóstka", active: true, category: ["animacje"] },
    { name: "Mały książę", active: true, category: ["animacje"] },
    { name: "Pocahontas", active: true, category: ["animacje"] },
    { name: "Piękna i Bestia", active: true, category: ["animacje"] },
    { name: "Powrót do przyszłości", active: true, category: ["filmy"] },
    { name: "Pół żartem, pół serio", active: true, category: ["filmy"] },
    { name: "Prawo Agaty", active: true, category: ["seriale"] },
    { name: "Predator", active: true, category: ["filmy"] },
    { name: "Prestiż", active: true, category: ["filmy"] },
    { name: "Prosta historia", active: true, category: ["filmy"] },
    { name: "Przedwiośnie", active: true, category: ["filmy"] },
    { name: "Przekręt", active: true, category: ["filmy"] },
    { name: "Przeminęło z wiatrem", active: true, category: ["filmy"] },
    { name: "Przyjaciółki", active: true, category: ["seriale"] },
    { name: "Przygody kota Filemona", active: true, category: ["animacje"] },
    { name: "Psy", active: true, category: ["filmy"] },
    { name: "Ptaki ciernistych krzewów", active: true, category: ["seriale"] },
    { name: "Pulp Fiction", active: true, category: ["filmy"] },
    { name: "korespondent Bryan", active: true, category: ["filmy"] },
    { name: "", active: true, category: ["filmy"] },
    { name: "Punisher", active: true, category: ["filmy"] },
    { name: "Quo Vadis", active: true, category: ["filmy"] },
    { name: "Ralph Demolka", active: true, category: ["animacje"] },
    { name: "Rambo (seria)", active: true, category: ["filmy"] },
    { name: "Ranczo", active: true, category: ["seriale"] },
    { name: "Ratatuj", active: true, category: ["animacje"] },
    { name: "Rejs", active: true, category: ["filmy"] },
    { name: "Requiem dla snu", active: true, category: ["filmy"] },
    { name: "Notre-Dame de Paris", active: true, category: ["filmy"] },
    {
      name: "Rękopis znaleziony w Saragossie",
      active: true,
      category: ["filmy"],
    },
    { name: "Rh+", active: true, category: ["filmy"] },
    { name: "Robin Hood", active: true, category: ["filmy"] },
    { name: "Rocky (seria)", active: true, category: ["filmy"] },
    { name: "Rodzina Addamsów", active: true, category: ["filmy", "seriale"] },
    { name: "Rodzina Leśniewskich", active: true, category: ["seriale"] },
    { name: "Rodzina Soprano", active: true, category: ["seriale"] },
    { name: "Rodzina zastępcza", active: true, category: ["seriale"] },
    { name: "rodzinka.pl", active: true, category: ["seriale"] },
    { name: "1670", active: true, category: ["seriale"] },
    {
      name: "Różowe lata siedemdziesiąte",
      active: true,
      category: ["seriale"],
    },
    { name: "RRRrrrr!!!", active: true, category: ["filmy"] },
    { name: "Ryś", active: true, category: ["filmy"] },
    { name: "Rzymskie wakacje", active: true, category: ["filmy"] },
    {
      name: "Sabrina, nastoletnia czarownica",
      active: true,
      category: ["seriale"],
    },
    { name: "Sami swoi", active: true, category: ["filmy"] },
    { name: "Samo życie", active: true, category: ["seriale"] },
    {
      name: "Sarnie żniwo, czyli pokusa statuetkowego szlaku",
      active: true,
      category: ["filmy"],
    },
    { name: "Sąsiedzi", active: true, category: ["seriale"] },
    { name: "Scooby Doo", active: true, category: ["animacje"] },
    {
      name: "Seks w wielkim mieście",
      active: true,
      category: ["filmy", "seriale"],
    },
    { name: "Seksmisja", active: true, category: ["filmy"] },
    { name: "Sherlock", active: true, category: ["seriale"] },
    { name: "Shrek (seria)", active: true, category: ["filmy"] },
    { name: "Siedem lat w Tybecie", active: true, category: ["filmy"] },
    { name: "Siedmiu wspaniałych", active: true, category: ["filmy"] },
    { name: "Siekierezada", active: true, category: ["filmy"] },
    { name: "Simpsonowie", active: true, category: ["animacje"] },
    { name: "Sin City: Miasto grzechu", active: true, category: ["filmy"] },
    { name: "Skazani na Shawshank", active: true, category: ["filmy"] },
    { name: "Skazany na bluesa", active: true, category: ["filmy"] },
    { name: "Skyfall", active: true, category: ["filmy"] },
    { name: "Edward nożycoręki", active: true, category: ["filmy"] },
    { name: "Slumdog. Milioner z ulicy", active: true, category: ["filmy"] },
    { name: "Słodkie kłamstewka", active: true, category: ["filmy"] },
    { name: "Więzień nienawiści", active: true, category: ["filmy"] },
    { name: "Smerfy", active: true, category: ["animacje"] },
    { name: "SpongeBob Kanciastoporty", active: true, category: ["animacje"] },
    { name: "Sonic X", active: true, category: ["animacje"] },
    { name: "Spadkobiercy", active: true, category: ["seriale"] },
    { name: "Star Trek (seria)", active: true, category: ["filmy", "seriale"] },
    { name: "Stawka większa niż życie ", active: true, category: ["seriale"] },
    {
      name: "Stowarzyszenie Umarłych Poetów",
      active: true,
      category: ["filmy"],
    },
    { name: "Straszny film", active: true, category: ["filmy"] },
    { name: "Superman", active: true, category: ["filmy"] },
    { name: "Szczęki", active: true, category: ["filmy"] },
    { name: "Szczęśliwego Nowego Jorku", active: true, category: ["filmy"] },
    { name: "Szeregowiec Ryan", active: true, category: ["filmy"] },
    { name: "Szósty zmysł", active: true, category: ["filmy"] },
    { name: "Sztos", active: true, category: ["filmy"] },
    { name: "Ścigany", active: true, category: ["filmy"] },
    { name: "Świat według Bundych", active: true, category: ["seriale"] },
    { name: "Świat według Kiepskich", active: true, category: ["seriale"] },
    { name: "Świat według Ludwiczka", active: true, category: ["animacje"] },
    { name: "Święta wojna", active: true, category: ["seriale"] },
    { name: "Świnka Peppa", active: true, category: ["animacje"] },
    { name: "Taksówkarz", active: true, category: ["filmy"] },
    { name: "Tam i z powrotem", active: true, category: ["filmy"] },
    { name: "Taxi", active: true, category: ["filmy"] },
    { name: "Teoria wielkiego podrywu", active: true, category: ["seriale"] },
    { name: "Terminator (seria)", active: true, category: ["filmy"] },
    { name: "Testosteron", active: true, category: ["filmy"] },
    { name: "Titanic", active: true, category: ["filmy"] },
    { name: "To ja, złodziej", active: true, category: ["filmy"] },
    {
      name: "To nie jest kraj dla starych ludzi",
      active: true,
      category: ["filmy"],
    },
    { name: "Toy Story", active: true, category: ["animacje"] },
    { name: "Troja", active: true, category: ["filmy"] },
    { name: "Truman Show", active: true, category: ["filmy"] },
    { name: "Trzy kolory (seria)", active: true, category: ["filmy"] },
    { name: "Trzy szalone zera", active: true, category: ["serial"] },
    { name: "U Pana Boga w ogródku", active: true, category: ["filmy"] },
    { name: "U Pana Boga za piecem", active: true, category: ["filmy"] },
    { name: "Ucieczka z Alcatraz", active: true, category: ["filmy"] },
    { name: "Usta usta", active: true, category: ["seriale"] },
    { name: "V jak vendetta", active: true, category: ["filmy"] },
    { name: "Vabank", active: true, category: ["filmy"] },
    { name: "Vanilla Sky", active: true, category: ["filmy"] },
    { name: "W.I.T.C.H. Czarodziejki", active: true, category: ["animacje"] },
    { name: "W chmurach", active: true, category: ["filmy"] },
    { name: "W garniturach", active: true, category: ["seriale"] },
    { name: "W głowie się nie mieści", active: true, category: ["animacje"] },
    { name: "W11 - Wydział Śledczy", active: true, category: ["seriale"] },
    { name: "WALL·E", active: true, category: ["animacje"] },
    { name: "Weekend u Berniego", active: true, category: ["filmy"] },
    { name: "Wesele", active: true, category: ["filmy"] },
    { name: "Wiedźmin", active: true, category: ["seriale"] },
    { name: "Wielki Szu", active: true, category: ["filmy"] },
    { name: "Włatcy móch", active: true, category: ["animacje"] },
    {
      name: "Wojownicze Żółwie Ninja",
      active: true,
      category: ["filmy", "animacje"],
    },
    { name: "Wołyń", active: true, category: ["filmy"] },
    { name: "Jestem legendą", active: true, category: ["filmy"] },
    { name: "Wszyscy jesteśmy Chrystusami", active: true, category: ["filmy"] },
    { name: "Wściekłe pięści Węża", active: true, category: ["filmy"] },
    { name: "Wyspa tajemnic", active: true, category: ["filmy"] },
    { name: "Siedem", active: true, category: ["filmy"] },
    { name: "Wyspa Totalnej Porażki", active: true, category: ["animacje"] },
    { name: "Z Archiwum X", active: true, category: ["seriale"] },
    { name: "Za wszelką cenę", active: true, category: ["filmy"] },
    { name: "Zabójcza broń", active: true, category: ["filmy"] },
    { name: "Załoga G", active: true, category: ["filmy"] },
    { name: "Zakochana złośnica", active: true, category: ["filmy"] },
    { name: "Zabić drozda", active: true, category: ["filmy"] },
    { name: "Zapach kobiety", active: true, category: ["filmy"] },
    { name: "Zaplątani", active: true, category: ["animacje"] },
    { name: "Zemsta", active: true, category: ["filmy"] },
    { name: "Zielona mila", active: true, category: ["filmy"] },
    { name: "Zmiennicy", active: true, category: ["filmy"] },
    { name: "Zmierzch", active: true, category: ["seriale"] },
    { name: "Zostać Miss", active: true, category: ["filmy"] },
    { name: "Zodiak", active: true, category: ["filmy"] },
    {
      name: "Żandarm z Saint-Tropez (seria)",
      active: true,
      category: ["filmy"],
    },
    { name: "Zwariowane Melodie ", active: true, category: ["animacje"] },
    { name: "Życie Pi", active: true, category: ["filmy"] },
    { name: "Żywot Briana", active: true, category: ["filmy"] },
  ]);
  const [category, setCategory] = useState([
    { name: "ludzie", active: false },
    { name: "filmy", active: false },
    { name: "seriale", active: false },
    { name: "animacje", active: false },
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
