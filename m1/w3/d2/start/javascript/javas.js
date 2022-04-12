var titolo = 'prove numeri JS <br>'
document.write(titolo);

var b = '<br>'

var n1 = 1;
var n2 = 2;
console.log(n1 + n2)
document.write(n1 + n2)
document.write(b)


var n3 = 5
var n4 = 10
console.log(n1 - n2)
document.write(n2 - n1)
document.write(b)


var ricetta = 'prova testo ricetta JS' 
console.log(ricetta)
document.write(ricetta)
document.write(b)

{ 
  let ing1 = ' pasta '
  let ing2 = ' sugo '  
  let ing3 = ' cipolla '
  let ing4 = ' olio '
  console.log(ing1 + ing2 + ing3 + ing4)

document.write('<ul>')
document.write('<li>' + ing1 + '</li>')
document.write('<li>' + ing2 + '</li>')
document.write('<li>' + ing3 + '</li>')
document.write('<li>' + ing4 + '</li>')
document.write('</ul>')

document.write(b)

var sugo = 'preparazione sugo:'
console.log(sugo)
document.write(sugo)
document.write(b)
document.write(ing4 + ing3 + ing2)
}


let eta = prompt('quanti anni hai?') || 21;
if(eta >=21 && eta <= 100){
    document.write('puoi entare<br>')
}else if(eta < 100){
        document.write('sei troppo giovane<br>')
    }


