"use strict";


/*-----------------------------------------------
DOM elementer
-------------------------------------------------*/ 
//hent DOM elementer med document.getElementById og document.querySelector

const getRedCar = document.getElementById("redCar");  //tager fat i bil elementet rød bil, med id "redCar"
const getPoliceCar = document.getElementById("policeCar");
const getBlueCar = document.getElementById("blueCar");
const getTruck = document.getElementById("truck");

const getSun = document.querySelector(".sun");  //tager fat i sol elementet med class "sun" derfor sætter vi også "." på
const getScene = document.querySelector(".scene");



/*-----------------------------------------------
Audio objekter
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










