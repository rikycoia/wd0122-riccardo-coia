//calcolo range di età//

function calcolaEtà(età) {
    return 2022 - età
}
alert(calcolaEtà(30));

const anno = calcolaEtà(1992)
console.log(anno)

const calcolaEtà2 = anno => 2022 - anno;

let anno2=calcolaEtà2(1999)
console.log(anno2);

const maggiorenne=(età, nome) => {
    const magg = età - 18;
    
    return `${nome} è maggiorenne da ${magg} anni`;
}
console.log(maggiorenne(29,'riccardo'))


//Funzione dentro una funzione//

function scegliGas(combustibile){
    return combustibile * 2;
}

function scegliGas(gas, petrolio) {
    const parteGas = scegliGas(gas);
    const partePetrolio = scegliGas (petrolio)

    const combustibile = `Stoccaggio con ${parteGas} mq di gas e ${partePetrolio} mq di petrolio.`;
    return combustibile;
}

console.log(scegliGas(1000,1555))