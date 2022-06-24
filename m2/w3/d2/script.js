/////esercizio1/////

class persone {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    calcolaEta(obj2){
        if (this.age > obj2.age){
            console.log(this.name + ' è più vecchio di ' + obj2.name);
        }
        else if(this.age < obj2.age){
            console.log(this.name + ' è più giovane di ' + obj2.name);
        }
        else if(this.age == obj2.age){
            console.log(this.name + ' e ' + obj2.name + ' hanno la stessa età ');
        }
    }

}

let p1 = new persone ('Simone',19)
let p2 = new persone ('Matteo',22)
let p3 = new persone ('Giacomo',19)


/////esercizio2/////

class Classe{
    constructor(nome,cognome, eta){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
}

const users = [
    { id: 1, nome: 'Mario', cognome: 'Fantoni', classe: 'A' },
    { id: 2, nome: 'Davide', cognome: 'Barbieri', classe: 'A' },
    { id: 3, nome: 'Matteo', cognome: 'Verdi', classe: 'A' },
    { id: 4, nome: 'Giovanni', cognome: 'Rossi', classe: 'A' },
    { id: 5, nome: 'Alessio', cognome: 'Bianchi', classe: 'A' },
    { id: 6, nome: 'Mattia', cognome: 'Neri', classe: 'A' },
    { id: 7, nome: 'Ivan', cognome: 'Martini', classe: 'A' },
    { id: 8, nome: 'Simone', cognome: 'Ferrari', classe: 'A' },
];

let pg1 = new users ('Mario','Fantoni',25)
let pg2 = new users ('','',25)
let pg3 = new users ('')
let pg4 = new users ('')
let pg5 = new users ('')
let pg6 = new users ('')
let pg7 = new users ('')
let pg8 = new users ('')
