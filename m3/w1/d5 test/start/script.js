var FirstUser = /** @class */ (function () {
    function FirstUser(creditoIniziale, minutiChiamate) {
        this.minutiChiamate = 0;
        this.carica = 20;
    }
    FirstUser.prototype.Ricarica = function (ric) {
        this.carica = this.carica + ric;
        return this.carica;
    };
    FirstUser.prototype.Chiamata = function (min) {
        this.carica = this.carica - (0.20 * min);
        this.minutiChiamate = this.minutiChiamate + min;
        return this.minutiChiamate;
    };
    FirstUser.prototype.Number404 = function () {
        return this.carica;
    };
    FirstUser.prototype.NumeroChiamate = function () {
        return this.minutiChiamate;
    };
    FirstUser.prototype.Azzerachiamate = function () {
        this.minutiChiamate * 0;
    };
    return FirstUser;
}());
var user1 = new FirstUser(20, 15);
console.log(user1.Ricarica(15) + ' €');
console.log('Hai effettuato ' + user1.Chiamata(5) + ' minuti di chiamata');
console.log('Il tuo credito residuo è di ' + user1.Number404() + ' €');
console.log('Hai effettutato ' + user1.NumeroChiamate() + ' chiamate');
var SecondUser = /** @class */ (function () {
    function SecondUser(creditoIniziale, minutiChiamate) {
        this.minutiChiamate = 0;
        this.carica = 20;
    }
    SecondUser.prototype.Ricarica = function (ric) {
        this.carica = this.carica + ric;
        return this.carica;
    };
    SecondUser.prototype.Chiamata = function (min) {
        this.carica = this.carica - (0.20 * min);
        this.minutiChiamate = this.minutiChiamate + min;
        return this.minutiChiamate;
    };
    SecondUser.prototype.Number404 = function () {
        return this.carica;
    };
    SecondUser.prototype.NumeroChiamate = function () {
        return this.minutiChiamate;
    };
    SecondUser.prototype.Azzerachiamate = function () {
        this.minutiChiamate * 0;
    };
    return SecondUser;
}());
var user2 = new SecondUser(5, 50);
console.log(user2);
console.log(user2.Ricarica(15) + ' €');
console.log('hai effettuato ' + user2.Chiamata(15) + ' minuti di chiamata');
console.log('Il tuo credito residuo è di ' + user2.Number404() + ' €');
console.log('Hai effettutato ' + user2.NumeroChiamate() + ' chiamate');
var ThirdUser = /** @class */ (function () {
    function ThirdUser(creditoIniziale, minutiChiamate) {
        this.minutiChiamate = 0;
        this.carica = 20;
    }
    ThirdUser.prototype.Ricarica = function (ric) {
        this.carica = this.carica + ric;
        return this.carica;
    };
    ThirdUser.prototype.Chiamata = function (min) {
        this.carica = this.carica - (0.20 * min);
        this.minutiChiamate = this.minutiChiamate + min;
        return this.minutiChiamate;
    };
    ThirdUser.prototype.Number404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.NumeroChiamate = function () {
        return this.minutiChiamate;
    };
    ThirdUser.prototype.Azzerachiamate = function () {
        this.minutiChiamate * 0;
    };
    return ThirdUser;
}());
var user3 = new ThirdUser(10, 10);
console.log(user2);
console.log(user2.Ricarica(5) + ' €');
console.log('Hai effettuato ' + user2.Chiamata(20) + ' minuti di chiamata');
console.log('Il tuo credito residuo è di ' + user2.Number404() + ' €');
console.log('Hai effettutato ' + user2.NumeroChiamate() + ' chiamate');
