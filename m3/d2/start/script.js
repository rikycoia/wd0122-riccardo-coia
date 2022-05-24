//creo la classe per il conto del figlio
var sonAccount = /** @class */ (function () {
    function sonAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    sonAccount.prototype.deposit = function (deposito) {
        return this.balanceInit = this.balanceInit + deposito;
    };
    sonAccount.prototype.oneWithdraw = function (prelievo) {
        this.balanceInit = this.balanceInit - prelievo;
        return prelievo;
    };
    sonAccount.prototype.twoWithdraw = function (prelievo) {
        this.balanceInit = this.balanceInit - prelievo;
        return prelievo;
    };
    sonAccount.prototype.totalBalance = function () {
        return this.balanceInit + ' €';
    };
    return sonAccount;
}());
console.log('------------son account----------------- ' + '\n');
// set della proprietà al costruttore
var son = new sonAccount(0);
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());
//creo la classe per il conto della madre
var MotherAccount = /** @class */ (function () {
    function MotherAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    MotherAccount.prototype.deposit = function (deposito) {
        return this.balanceInit = this.balanceInit + deposito;
    };
    MotherAccount.prototype.oneWithdraw = function (prelievo) {
        this.balanceInit = this.balanceInit - prelievo;
        return prelievo;
    };
    MotherAccount.prototype.twoWithdraw = function (prelievo) {
        this.balanceInit = this.balanceInit - prelievo;
        return prelievo;
    };
    //calcolo tasso di interesse
    MotherAccount.prototype.totalBalance = function () {
        var interesse = 10;
        return this.balanceInit - ((this.balanceInit * interesse / 100)) + ' €';
    };
    return MotherAccount;
}());
var mother = new MotherAccount(0);
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());
