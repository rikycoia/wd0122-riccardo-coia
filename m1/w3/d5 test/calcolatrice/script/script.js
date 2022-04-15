function aggiungiNumero(bottone){

let numero = bottone.innerHTML;

let display = document.querySelector('#display')

display.value += numero 
}

function risultato(){
    let display = document.querySelector('#display');

    let totale = eval(display.value)
    display.value = totale
}


function del(){
    let display = document.querySelector('#display')

    display.value = ''
 }

//<button class="tasto" id="moltip" onclick="aggiungiNumero(this)">*</button>//

function moltiplicazione(){ let display = document.querySelector('#display'); display.value += '*'}

