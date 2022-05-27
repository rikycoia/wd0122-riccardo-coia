interface ISmartphone{
    carica:number;
    minutiChiamate:number;
      
    Ricarica(ric:number):void
    Chiamata(min:number):void
    Number404():number //credito ancora disponibile
    NumeroChiamate():void//numero di chiamate effettuate
    Azzerachiamate():void

}

class FirstUser implements ISmartphone{

    carica:number;
    minutiChiamate:number;
    
    constructor(creditoIniziale:number, minutiChiamate:number){
        this.minutiChiamate = 0;
        this.carica = 20;
   } 

     public Ricarica(ric:number): number {
          this.carica = this.carica + ric;
          return this.carica;
   }

   public Chiamata(min:number):number {
       this.carica = this.carica - (0.20 * min)
       this.minutiChiamate = this.minutiChiamate + min;
       return this.minutiChiamate
   }

   public Number404():number {
   return this.carica
   }

   public NumeroChiamate():number{
    return this.minutiChiamate
   }

   public Azzerachiamate():void{
      this.minutiChiamate * 0
   }

}

let user1 = new FirstUser(20,15)

console.log(user1.Ricarica(15) + ' €');
console.log('Hai effettuato ' + user1.Chiamata(5) + ' minuti di chiamata');
console.log('Il tuo credito residuo è di ' + user1.Number404() + ' €');
console.log('Hai effettutato ' + user1.NumeroChiamate() + ' chiamate');






class SecondUser implements ISmartphone{

    carica:number;
    minutiChiamate:number;
    
    constructor(creditoIniziale:number, minutiChiamate:number){
        this.minutiChiamate = 0;
        this.carica = 20;
   } 

   public Ricarica(ric:number): number {
    this.carica = this.carica + ric;
    return this.carica;
}

public Chiamata(min:number):number {
 this.carica = this.carica - (0.20 * min)
 this.minutiChiamate = this.minutiChiamate + min;
 return this.minutiChiamate
}

   public Number404():number {
   return this.carica

   }

   public NumeroChiamate():number{
    return this.minutiChiamate
   }

   public Azzerachiamate():void{
      this.minutiChiamate * 0
   }

}     

let user2 = new SecondUser(5,50)
console.log(user2);

console.log(user2.Ricarica(15) + ' €');
console.log('hai effettuato ' + user2.Chiamata(15) + ' minuti di chiamata');
console.log('Il tuo credito residuo è di ' + user2.Number404() + ' €');
console.log('Hai effettutato ' + user2.NumeroChiamate() + ' chiamate');




class ThirdUser implements ISmartphone{

    carica:number;
    minutiChiamate:number;
    
    constructor(creditoIniziale:number, minutiChiamate:number){
        this.minutiChiamate = 0;
        this.carica = 20;
   } 

   public Ricarica(ric:number): number {
    this.carica = this.carica + ric;
    return this.carica;
}

public Chiamata(min:number):number {
 this.carica = this.carica - (0.20 * min)
 this.minutiChiamate = this.minutiChiamate + min;
 return this.minutiChiamate
}

   public Number404():number {
   return this.carica

   }

   public NumeroChiamate():number{
    return this.minutiChiamate
   }

   public Azzerachiamate():void{
      this.minutiChiamate * 0
   }
}     


let user3 = new ThirdUser(10,10)
console.log(user2);

console.log(user2.Ricarica(5) + ' €');
console.log('Hai effettuato ' + user2.Chiamata(20) + ' minuti di chiamata');
console.log('Il tuo credito residuo è di ' + user2.Number404() + ' €');
console.log('Hai effettutato ' + user2.NumeroChiamate() + ' chiamate');

  


