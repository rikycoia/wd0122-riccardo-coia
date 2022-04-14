//caratteri maiuscoli e minuscoli//
let str1 = 'oggi a Milano piove';
let str2 = ' almeno le strade sono pulite'

let maiuscolo = str1.toUpperCase()
let minuscolo = str2.toLowerCase()

console.log(maiuscolo)
console.log(minuscolo)

//concatenazione//
 let str3 = 'si è allagata la cantina '
 let strnew = str3.concat(str1 + str2)
 console.log(strnew)

 //array//
 var family = ['Franca','Omar','Lorenzo','Riccardo'];
 console.log(family)

 //terzo elemento array//
 var terzoel = family[2]
 console.log(terzoel)

 //push-pop//
 
family.push('Paola')
 console.log(family)


 family.pop('Paola')
 console.log(family)


 //shift-unshift//

 family.shift('Franca')
 console.log(family)

 family.unshift('Paola')
 console.log(family)


 //array numerico e relativa funzione//
 //length// 
 var numeri = [1,2,3,4,5,6]
 
  console.log(numeri.length)

function somma(numeri){
    return 1 + 2
}
 console.log(somma)
