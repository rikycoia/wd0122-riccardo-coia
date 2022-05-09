let nome = document.querySelector('#nome')
let cognome = document.querySelector('#cognome')
let data = document.querySelector('#data')
let first = document.querySelector('#first')
let second = document.querySelector('#second')
let third = document.querySelector('#third')
let fourth = document.querySelector('#fourth')
let anno = new Date().getFullYear()
let eta = anno - data

bottone.addEventListener('click', function(){

    let div1 = document.createElement('div')
    div1.innerHTML = nome.value

    let div2 = document.createElement('div')
    div2.innerHTML = cognome.value

    let div3 = document.createElement('div')
    div3.innerHTML = data.value

    let div4 = document.createElement('div')
    div4.innerHTML = eta.value

    div1.classList.add('border','border-red')
    div2.classList.add('border','border-red')
    div3.classList.add('border','border-red')

    first.append(div1)
    second.append(div2)
    third.append(div3)
    fourth.appen(div4)

    nome.value = " "
    cognome.value = " "
    data.value = " "
    
})