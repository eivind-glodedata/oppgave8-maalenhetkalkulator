const convertButton = document.getElementById("convertButton");
const displayResult = document.getElementById("displayResult");

convertButton.addEventListener("click", (event) => {
    event.preventDefault();
    const convertFrom = document.getElementById("convertFrom").value;
    const convertTo = document.getElementById("convertTo").value;
    console.log("did we select right? " + convertFrom);
    console.log("did we select right? " + convertTo);
    if (convertFrom === "Celsius" && convertTo === "Fahrenheit") {
        celsiusToFahrenheit();
    }
    else if (convertFrom === "Fahrenheit" && convertTo === "Celsius"){
        fahrenheitToCelsius();
    }

    else if (convertFrom === "Celsius" && convertTo === "Kelvin") {
        celciusToKelvin();
    }

    else if (convertFrom === "Kelvin" && convertTo === "Celsius") {
        KelvinToCelsius();
    }

    else if (convertFrom === "Kelvin" && convertTo === "Fahrenheit") {
        KelvinToFahrenheit ()
    }

    else if (convertFrom === "Fahrenheit" && convertTo === "Kelvin") {
        FahrenheitToKelvin ()
    }

    else if (convertFrom === "centimeter" && convertTo === "Celsius"){
        displayResult.innerText = "Lengde kan ikke konverteres til temperatur :)"
    }

    else if (convertFrom === "centimeter" && convertTo === "inches") {
        const inputValue = document.getElementById("inputValue").value;
        let inches = inputValue/2.54;
        displayResult.innerText = inputValue + " cm er lik " + inches + " tommer";
    }

    else if (convertFrom === "inches" && convertTo === "centimeter") {
        const inputValue = document.getElementById("inputValue").value;
        let centimeter = inputValue*2.54;
        displayResult.innerText = inputValue + " tommer er lik " + centimeter + " cm";
        }

    else if (convertFrom === "liter" && convertTo === "gallon") {
        const inputValue = document.getElementById("inputValue").value;
        let gallon = inputValue/3.78541;
        displayResult.innerText = inputValue + " liter er lik " + gallon + " gallon";
        }

    else if (convertFrom === "gallon" && convertTo === "liter") {
        const inputValue = document.getElementById("inputValue").value;
        let liter = inputValue*3.78541;
        displayResult.innerText = inputValue + " liter er lik " + liter + " liter";
        }

    else {
        displayResult.innerText = "Denne omregningen er umulig!";
    }
});

function fahrenheitToCelsius () {
  const inputValue = document.getElementById("inputValue").value;
  let degrees = inputValue;
  degrees = (degrees - 32)/(9/5);
  const displayResult = document.getElementById("displayResult");
  displayResult.innerText = inputValue + " °F er lik " + degrees + " grader Celsius";
};

function celsiusToFahrenheit () {
  const inputValue = document.getElementById("inputValue").value;
  let degrees = inputValue;
  //°F = °C × 9/5 + 32
  degrees = degrees*(9/5) + 32;
  const displayResult = document.getElementById('displayResult');
  displayResult.innerText = inputValue + " °C er lik " + degrees + " grader Fahrenheit";
};

function celciusToKelvin () {
    // Formula:	0°C + 273.15 = 273,15K
    const inputValue = document.getElementById("inputValue").value;
    let Celsius = parseFloat(inputValue);
    let Kelvin;
    Kelvin = Celsius + 273.15;
    const displayResult = document.getElementById("displayResult");
    displayResult.innerText = Celsius + " °C er lik " + Kelvin + " grader Kelvin";
};

function KelvinToCelsius () {
    const inputValue = document.getElementById("inputValue").value;
    const Kelvin = parseFloat(inputValue);
    let Celsius = Kelvin - 273.15;
    displayResult.innerText = Kelvin + " °K er lik " + Celsius + " grader Celsius";
};

function KelvinToFahrenheit () {
//F = (K - 273.15) * 9/5 + 32
    const inputValue = document.getElementById("inputValue").value;
    let K = inputValue;
    let F = (K - 273.15)*(9/5) + 32;
    displayResult.innerText = K + " °K er lik " + F + " grader Fahrenheit";
};

function FahrenheitToKelvin () {
//K = (F - 32) * 5/9 + 273.15
//or alternatively K = (F + 459.67) * 5/9
    const inputValue = document.getElementById("inputValue").value;
    let F = inputValue;
    let K = (F - 32)*5/9 + 273.15;
    displayResult.innerText = inputValue + " °F er lik " + K + " grader Kelvin";
};


