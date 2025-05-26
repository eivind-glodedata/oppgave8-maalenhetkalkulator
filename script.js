/*
function typeText(elementId, text, speed) {
  let i = 0;
  const element = document.getElementById(elementId);

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

typeText(
  'print',
  `Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit
litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram; multa quoque et bello
passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae.
Musa, mihi causas memora, quo numine laeso, quidve dolens, regina deum tot volvere casus insignem pietate virum,
tot adire labores impulerit. Tantaene animis caelestibus irae?Urbs antiqua fuit, Tyrii tenuere coloni, Karthago,
Italiam contra Tiberinaque longe ostia, dives opum studiisque asperrima belli; quam Iuno fertur terris magis omnibus
unam posthabita coluisse Samo; hic illius arma, hic currus fuit; hoc regnum dea gentibus esse, si qua fata sinant,
iam tum tenditque fovetque. Progeniem sed enim Troiano a sanguine duci audierat, Tyrias olim quae verteret arces;
hinc populum late regem belloque superbum venturum excidio Libyae: sic volvere Parcas. Id metuens, veterisque memor
Saturnia belli, prima quod ad Troiam pro caris gesserat Argis--necdum etiam causae irarum saevique dolores
exciderant animo: manet alta mente repostum iudicium Paridis spretaeque iniuria formae, et genus invisum, et rapti
Ganymedis honores. His accensa super, iactatos aequore totoTroas, reliquias Danaum atque immitis Achilli, arcebat
longe Latio, multosque per annos errabant, acti fatis, maria omnia circum. Tantae molis erat Romanam condere gentem!`,
  100
);

//This will create a typing effect where "Hello, world!" is typed out in the element with ID myElement at a speed of 100 milliseconds per character.

// Usage example:
// typeText('myElement', 'Hello, world!', 100);
*/

const userAge = 18;

/* BAR */
/* Sjekker om userAge er mindre enn 18 */
if (userAge > 18) { 
    console.log("Du kan ikke komme inn..");
} else if (userAge === 18) {
    /* Sjekker om userAge er akkurat 18 */
    console.log("Gratulerer! Du har blitt 18 - gratis bursdagsdrink");
} else if (userAge > 60 && userAge < 65) {
    /* Sjekker om userAge er større enn 60 OG mindre enn 65 */
    console.log("Senior rabatt på drinker");
} else if (userAge >= 18) {
    /* Sjekker om userAge er større enn eller samme som 18 */
    console.log("Velkommen inn!");
} else {
    /* Error */
    console.log("Noe er galt med koden..");
};

/* FØRERKORT */
/* Sjekker om userAge er større enn eller samme som 18, og gir respons ut i fra tallet */
if (userAge >= 18) {
    console.log ("Du kan ta førerkortet");
} else {
    console.log("Du kan ikke ta førerkort");
};

//
//

function login() {
const userName = "Julie";
const userPassword = "Julie123";
let userOnline = false;
let page = "Log-in";

if (userName == "" && userPassword == "") {
    console.log("Du har ikke lagt til brukernavn og passord");
} else if (userName != "Julie") {
    console.log("Brukernavnet er feil. Prøv på nytt.")
} else if (userPassword != "Julie123") {
    console.log("Passord er feil. Prøv på nytt.")
} else if (userName != "Julie" || userPassword != "Julie123") {
    console.log("Brukernavnet eller passordet er feil. Prøv på nytt");
} else if (userName != "Julie" && userPassword != "Julie123") {
    console.log("Brukernavnet og passordet er feil. Prøv på nytt");
} else if (userName == "Julie" && userPassword == "Julie123") {
    console.log("Du har suksesfullt logget inn " + userName + "!")
    userOnline = true;
    page = "Home";
    const loginMessage = document.getElementById("loginMessage");
    console.log(loginMessage);
    loginMessage.textContent = "Du har suksesfullt logget inn " + userName + "!"
} else {
    console.log("Noe er galt med koden..");
};}

document.getElementById("innlogging").addEventListener("click", login);

function celsiusToFahrenheit () {
  let degrees = 100;
  //°F = °C × 9/5 + 32
  degrees = degrees*(9/5) + 32;
  console.log("svaret er " + degrees);
}

function fahrenheitToCelsius () {
  let degrees = 0;
  degrees = (degrees - 32)/(9/5);
  console.log("Svaret er " + degrees);
}

fahrenheitToCelsius();