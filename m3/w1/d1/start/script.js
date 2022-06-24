//creazione di due numeri casuali di due giocatori
var gamer1 = Math.floor(Math.random() * (100 - 1) + 1);
var gamer2 = Math.floor(Math.random() * (100 - 1) + 1);
//creazione numero randomico
var randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
// creazione delle due differenze per stabilire chi ci è andato più vicino
var d1;
var d2;
//Creazione bottoni
var btng1 = document.getElementById("btng1");
var button1 = document.createElement("button");
button1.textContent = 'PLAYER 1';
btng1 === null || btng1 === void 0 ? void 0 : btng1.appendChild(button1);
var btng2 = document.getElementById("btng1");
var button2 = document.createElement("button");
button2.textContent = 'PLAYER 2';
btng2 === null || btng2 === void 0 ? void 0 : btng2.appendChild(button2);
var result = document.getElementById("result");
var winner = document.createElement('p');
winner.textContent = "THE WINNER IS ";
result === null || result === void 0 ? void 0 : result.appendChild(winner);
console.log(gamer1, gamer2, randomNumber);
if (gamer1 == randomNumber) {
    console.log('Gamer1 ha indovinato!');
}
else {
    d1 = Math.abs(randomNumber - gamer1);
}
if (gamer2 == randomNumber) {
    console.log('Gamer2 ha indovinato!');
}
else {
    d2 = Math.abs(randomNumber - gamer2);
}
if (d1 < d2) {
    console.log('Gamer1 ci è andato più vicino!');
}
else if (d1 > d2) {
    console.log('Gamer2 ci è andato più vicino!');
}
