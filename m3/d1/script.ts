//creazione di due numeri casuali di due giocatori

let gamer1:number = Math.floor(Math.random() * (100 - 1) + 1);
let gamer2:number = Math.floor(Math.random() * (100 - 1) + 1);

//creazione numero randomico
let randomNumber:number =  Math.floor(Math.random() * (100 - 1) + 1);

// creazione delle due differenze per stabili chi ci è andato più vicino
let d1:any
let d2:any

console.log(gamer1,gamer2,randomNumber); 

if(gamer1 == randomNumber){
    console.log('Gamer1 ha indovinato!')
   }else{
    d1 = Math.abs(randomNumber - gamer1)
   }
   if(gamer2 == randomNumber){
    console.log('Gamer2 ha indovinato!')
   }else{
    d2 = Math.abs(randomNumber - gamer2)
   }
   if(d1 < d2){ 
    console.log('Gamer1 ci è andato più vicino!')
   }
   else if(d1 > d2){
       console.log('Gamer2 ci è andato più vicino!');
   } 