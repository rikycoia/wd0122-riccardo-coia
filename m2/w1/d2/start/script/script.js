function listaSpese(){
    let budget = 1000;
    let spese = 0;


while (budget > 100) {
    let fattura = Math.floor(Math.random() * 100);
   

    if(fattura <= budget) {
        spese += 1;
        budget -= fattura;

        document.getElementById('Budget').innerHTML += '<p> Totale Fattura: € ' + fattura + '<br> Budget aggiornato €' + budget + '</p>'
        }

        if (budget < 500 && budget + fattura >= 500) {
            document.getElementById('Budget').innerHTML += 'Il budget aziendale è attualmente dimezzato';
            
        }

        if (budget <= 100 ) {
            document.getElementById('Budget').innerHTML += 'Il budget aziendale è in esaurimento';
        }

}
}
