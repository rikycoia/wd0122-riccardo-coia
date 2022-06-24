//creo la classe per il conto del figlio
class sonAccount{

    public balanceInit:number;
    constructor(balanceInit:number){
        this.balanceInit = balanceInit;
    }
    deposit(deposito:number){
        return this.balanceInit = this.balanceInit + deposito
    }
    oneWithdraw(prelievo:number){

        this.balanceInit = this.balanceInit - prelievo
        return prelievo
    }
    twoWithdraw(prelievo:number){
        this.balanceInit = this.balanceInit - prelievo
        return prelievo
    }
    totalBalance(){
        return this.balanceInit + ' €'
    }
}

console.log('------------son account----------------- ' + '\n');
// set della proprietà al costruttore
let son = new sonAccount(0)
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());


//creo la classe per il conto della madre

class MotherAccount{

    public balanceInit:number;
    constructor(balanceInit:number){
        this.balanceInit = balanceInit;
    }
    deposit(deposito:number){
        return this.balanceInit = this.balanceInit + deposito
    }
    oneWithdraw(prelievo:number){

        this.balanceInit = this.balanceInit - prelievo
        return prelievo
    }
    twoWithdraw(prelievo:number){
        this.balanceInit = this.balanceInit - prelievo
        return prelievo
    }

//calcolo tasso di interesse

    totalBalance(){
        var interesse:number = 10;
        return this.balanceInit - ((this.balanceInit * interesse / 100)) + ' €';
    }  
}


let mother = new MotherAccount(0)
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());