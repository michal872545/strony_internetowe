"use strict";

let counter = 0;
function addPoint() {
    counter = counter + 1;
    document.getElementById("counter-display").textContent = counter;
}
function minusPoint() {
    counter = counter - 1;
    document.getElementById("counter-display").textContent = counter;
}
function resetPoint() {
    counter = 0;
    document.getElementById("counter-display").textContent = counter;
}


let items = ["Wojownik", "Łucznik", "Hazardzista", "Czołg", "Bombowiec", "Lotniskowiec", "Lekarz"];
function drawItem() {
    let index = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").textContent = items[index];
}
function changeBackground() {
    let colors = ["#1e1a2e", "#1a1a", "#1a1e", "#6a1a2e", "#1a4a2e"]
    let index = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[index]
}
