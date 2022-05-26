class Vestiti {
    constructor(id, codProd, collezione, capo, modello, quantita, colore, prezzoIvaEsclusa, prezzoIvaInclusa, disponibile, saldo) {
        this.id = id;
        this.codProd = codProd;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoIvaEsclusa = prezzoIvaEsclusa;
        this.prezzoIvaInclusa = prezzoIvaInclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        let scontoCapo = ((this.prezzoIvaInclusa * this.saldo) / 100);
        return scontoCapo;
    }
    getAcquistoCapo() {
        let capoScontato = this.prezzoIvaInclusa - this.getSaldoCapo();
        return capoScontato;
    }
}

//FETCH//
const APPURL = 'Abbigliamento.json';
fetch(APPURL)
    .then(res => res.json())
    .then(res => {
    for (let capo of res) {
        capo = new Vestiti(capo.id, capo.codProd, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoIvaEsclusa, capo.prezzoIvaInclusa, capo.disponibile, capo.saldo);
        console.table(`Capo: ${capo.capo}`);
        console.table(`Disponibilità:  ${capo.disponibile}`);
        console.table(`Prezzo capo:  ${capo.prezzoIvaInclusa} €`);
        console.table(`Sconto in percentuale ed euro: ${capo.saldo} % | ${capo.getSaldoCapo()} €`);
        console.table(`Prezzo del capo scontato: ${capo.getAcquistoCapo()} €`);
        console.table('---');
        console.table(capo);
    }

});