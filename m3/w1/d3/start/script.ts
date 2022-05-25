abstract class Lavoratori{
    public codredd:number;
    public redditoAnnuoLordo:number;
    public tasseInps:number;
    public tasseIrpef:number;

    constructor(codredd:number, redditoAnnuoLordo:number, tasseInps:number, tasseIrpef:number){
        this.codredd = codredd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }

    getUtileTasse():number {
        let getUtileTasse:number = this.redditoAnnuoLordo * this.codredd/100
        return getUtileTasse 
    }
    abstract getRedditoAnnuoNetto():number;
}

class Artigiano extends Lavoratori{
    getRedditoAnnuoNetto():number {
        let RedditoAnnuoNetto:number = this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef() + this.codredd)
        return RedditoAnnuoNetto
    }
    getTasseInps():number {
        let getTasseInps:number = ((this.redditoAnnuoLordo * this.tasseInps) / 100)
        return getTasseInps
    }

    getTasseIrpef():number {
        let getTasseIrpef:number = ((this.redditoAnnuoLordo * this.tasseIrpef) / 100)
        return getTasseIrpef
    }
}

class LiberoProfessionista extends Lavoratori{
    getRedditoAnnuoNetto():number {
        let RedditoAnnuoNetto:number = this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef() + this.codredd)
        return RedditoAnnuoNetto
    }
    getTasseInps():number {
        let getTasseInps:number = ((this.redditoAnnuoLordo * this.tasseInps) / 100)
        return getTasseInps
    }

    getTasseIrpef():number {
        let getTasseIrpef:number = ((this.redditoAnnuoLordo * this.tasseIrpef) / 100)
        return getTasseIrpef
    }
}


class Commerciante extends Lavoratori{
    getRedditoAnnuoNetto():number {
        let RedditoAnnuoNetto:number = this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef() + this.codredd)
        return RedditoAnnuoNetto
    }
    getTasseInps():number {
        let getTasseInps:number = ((this.redditoAnnuoLordo * this.tasseInps) / 100)
        return getTasseInps
    }

    getTasseIrpef():number {
        let getTasseIrpef:number = ((this.redditoAnnuoLordo * this.tasseIrpef) / 100)
        return getTasseIrpef
    }
}


let l1 = new Artigiano(2.5, 10000, 5, 7);
console.table('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.table('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.table('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.table('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.table('-------------------------------------------------');
let l2 = new LiberoProfessionista(2.5, 20000, 8, 7);
console.table('utile tasse ARTIGIANO:' + l2.getUtileTasse() + '€');
console.table('tasse inps ARTIGIANO:' + l2.getTasseInps() + '€');
console.table('tasse irpef ARTIGIANO:' + l2.getTasseIrpef() + '€');
console.table('reddito annuo netto ARTIGIANO:' + l2.getRedditoAnnuoNetto() + '€');
console.table('-------------------------------------------------');
let l3 = new Commerciante(2.5, 25000, 7, 7);
console.table('utile tasse ARTIGIANO:' + l3.getUtileTasse() + '€');
console.table('tasse inps ARTIGIANO:' + l3.getTasseInps() + '€');
console.table('tasse irpef ARTIGIANO:' + l3.getTasseIrpef() + '€');
console.table('reddito annuo netto ARTIGIANO:' + l3.getRedditoAnnuoNetto() + '€');
console.table('-------------------------------------------------');