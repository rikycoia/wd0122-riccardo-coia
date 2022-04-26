let data = new Date
console.log(data)
document.write(data)
document.write("<br>")

/////


let ora = new Date
console.log(ora.getHours())
document.write("<br>")
document.write(ora.getHours())

let min = new Date
console.log(min.getMinutes());
document.write("<br>")
document.write(min.getMinutes())

let sec = new Date
console.log(sec.getSeconds())
document.write("<br>")
document.write(sec.getSeconds())

let msec = new Date
console.log(msec.getMilliseconds())
document.write("<br>")
document.write(msec.getMilliseconds())
document.write("<br>")

///////

let giorno = new Date 
console.log(giorno.getDay())

let mese = new Date
console.log(mese.getMonth())

let anno = new Date
console.log(anno.getFullYear())

/////

var date = new Date();
const formatDate = (date)=>{
let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
 return formatted_date;
}
console.log(formatDate(date));

document.write(formatDate(date));