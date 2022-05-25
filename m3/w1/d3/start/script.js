var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(codredd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codredd = codredd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    Lavoratori.prototype.getUtileTasse = function () {
        var getUtileTasse = this.redditoAnnuoLordo * this.codredd / 100;
        return getUtileTasse;
    };
    return Lavoratori;
}());
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        var RedditoAnnuoNetto = this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef() + this.codredd);
        return RedditoAnnuoNetto;
    };
    Artigiano.prototype.getTasseInps = function () {
        var getTasseInps = ((this.redditoAnnuoLordo * this.tasseInps) / 100);
        return getTasseInps;
    };
    Artigiano.prototype.getTasseIrpef = function () {
        var getTasseIrpef = ((this.redditoAnnuoLordo * this.tasseIrpef) / 100);
        return getTasseIrpef;
    };
    return Artigiano;
}(Lavoratori));
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
        var RedditoAnnuoNetto = this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef() + this.codredd);
        return RedditoAnnuoNetto;
    };
    LiberoProfessionista.prototype.getTasseInps = function () {
        var getTasseInps = ((this.redditoAnnuoLordo * this.tasseInps) / 100);
        return getTasseInps;
    };
    LiberoProfessionista.prototype.getTasseIrpef = function () {
        var getTasseIrpef = ((this.redditoAnnuoLordo * this.tasseIrpef) / 100);
        return getTasseIrpef;
    };
    return LiberoProfessionista;
}(Lavoratori));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        var RedditoAnnuoNetto = this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef() + this.codredd);
        return RedditoAnnuoNetto;
    };
    Commerciante.prototype.getTasseInps = function () {
        var getTasseInps = ((this.redditoAnnuoLordo * this.tasseInps) / 100);
        return getTasseInps;
    };
    Commerciante.prototype.getTasseIrpef = function () {
        var getTasseIrpef = ((this.redditoAnnuoLordo * this.tasseIrpef) / 100);
        return getTasseIrpef;
    };
    return Commerciante;
}(Lavoratori));
var l1 = new Artigiano(2.5, 10000, 5, 7);
console.table('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.table('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.table('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.table('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.table('-------------------------------------------------');
var l2 = new LiberoProfessionista(2.5, 20000, 8, 7);
console.table('utile tasse ARTIGIANO:' + l2.getUtileTasse() + '€');
console.table('tasse inps ARTIGIANO:' + l2.getTasseInps() + '€');
console.table('tasse irpef ARTIGIANO:' + l2.getTasseIrpef() + '€');
console.table('reddito annuo netto ARTIGIANO:' + l2.getRedditoAnnuoNetto() + '€');
console.table('-------------------------------------------------');
var l3 = new Commerciante(2.5, 25000, 7, 7);
console.table('utile tasse ARTIGIANO:' + l3.getUtileTasse() + '€');
console.table('tasse inps ARTIGIANO:' + l3.getTasseInps() + '€');
console.table('tasse irpef ARTIGIANO:' + l3.getTasseIrpef() + '€');
console.table('reddito annuo netto ARTIGIANO:' + l3.getRedditoAnnuoNetto() + '€');
console.table('-------------------------------------------------');
