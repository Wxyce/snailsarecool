const noMoneySound = new Audio('sounds/nomoney.m4a');
const boughtSound = new Audio('sounds/chaching.m4a');
const kissSound = new Audio('sounds/smoochykiss.mp3');
const yaySound = new Audio('sounds/yay.m4a');

const moneycontainer = document.getElementById("money-container");
const moneyText = document.getElementById("money-text");
const rebirthText = document.getElementById("rebirth-text");

const dogsContainer = document.getElementById("dogs");
const evilDogContainer = document.getElementById("evil-dog-container");
const cupidDogContainer = document.getElementById("cupid-dog-container");
const addDogButton = document.getElementById("addDogButton");
const rebirthButton = document.getElementById("rebirth-button");

const snail = document.getElementById("snail");

let dogCost = 10;
let money = 10;
let rebirth_cost = 1000000;
let rebirths = 0;