"use strict";

/*------------------------------------------
DATA OBJEKTER I ARRAY - OBYGGER DATASTRUKTUR
--------------------------------------------*/
const carInfo = [
    {
        className: "car1", 
        carBrand: "Ford", 
        carModel: "Mustang", 
        releaseYear: 1974, 
        color: "red", 
        fuelType: "Diesel"
    },

    {
        className: "car2", 
        carBrand: "Skoda", 
        carModel: "Fabia", 
        releaseYear: 2020,
        color: "Grey", 
        fuelType: "Diesel"
    }, 

    {
        className: "car3", 
        carBrand: "Hyundai", 
        carModel: "Turbo", 
        releaseYear: 2016, 
        color: "Blue", 
        fuelType: "Benzin"
    },

    {
        className: "car4",
        carBrand: "Volvo",
        carModel: "Nimbus",
        releaseYear: 2003,
        color: "Yellow",
        fuelType: "Benzin"
    }
]


/*--------------------------------------------------
DOM CONTENT LOAD FUNKTION OG FOR EACH LOOP MED INFO
----------------------------------------------------*/

//DOMContentLoaded, venter med at kører JS, indtil hele html-siden er indlæst
//hele koden er inde i denne funktion
document.addEventListener("DOMContentLoaded", () => {

//finder tooltip id og gemmer det i en variabel
const tooltip = document.getElementById("tooltip");


//funktion der viser tooltip boksen med biloplysninger
//parmeter: html = den tekst indeholdende html-tags som vi vil vise i tooltip'en
function showTooltip (html) {
    if (tooltip) {
        //indsætter teksten i tooltip'en
        tooltip.innerHTML = html; 

        //gør tooltip'en synlig med css class
        tooltip.classList.add("is-visible");  
        
        setTimeout(function() {
            tooltip.classList.remove("is-visible");
        },5000);  //,5000 fortæller hvor lang tid boksen skal være synlig, 
    }
}
 
carInfo.forEach((car) => {     //tager fat i alt der har med "car" at gøre i html'en og loop'er det
    document.querySelectorAll("." + car.className).forEach((elem) => {
        elem.addEventListener("mouseover", () => {
            const carDetails = `
            <strong> ${car.carBrand}</strong> <br>
            Model: ${car.carModel}<br>
            Release year: ${car.releaseYear}<br>
            Color: ${car.color}<br>
            Fuel type: ${car.fuelType}
            `;

            showTooltip(carDetails); //funktionen showTooltip bliver kaldt, med variablen carDetails (med html) i
        });

    });
});



/*------------------------------------------------
DOM ELEMENTER, VARIABLER
-------------------------------------------------*/ 
//hent DOM elementer med document.getElementById og document.querySelector

const getRedCar = document.getElementById("redCar");  //tager fat i bil elementet rød bil, med id "redCar"
const getPoliceCar = document.getElementById("policeCar");
const getBlueCar = document.getElementById("blueCar");
const getTruck = document.getElementById("truck");
const getSun = document.querySelector(".sun");  //tager fat i sol elementet med class "sun" derfor sætter vi også "." på
const getScene = document.querySelector(".scene");


/*-----------------------------------------------
AUDIO OBJEKTER
-------------------------------------------------*/ 

const soundRedCar = new Audio();
soundRedCar.src = "sound/red-car-horn.wav";

const soundPoliceCar = new Audio();
soundPoliceCar.src = "sound/police-car-sound.wav";

const soundBlueCar = new Audio();
soundBlueCar.src = "sound/blue-car-sound.wav";



/*---------------------------------------------
addEventListeners på DOM elementerne
-----------------------------------------------*/

//den røde bil
if (getRedCar) {
    getRedCar.addEventListener("click", function() {
        soundRedCar.play();
    });
}

//politi bilen 
if (getPoliceCar) {
    getPoliceCar.addEventListener("click", function() {
        soundPoliceCar.play();
    });
}

//den blå bil 
if (getBlueCar) {
    getBlueCar.addEventListener("click", function() {
        soundBlueCar.play();
    });
}

//skift fra nat til dag med click 
// && syntaksen ligesom at == betyder lig med 
if (getSun && getScene) {
    getSun.addEventListener("click", function() {
        getScene.classList.toggle("night");
    });
}


}); //slut fra DOMContentLoaded funktionen


















