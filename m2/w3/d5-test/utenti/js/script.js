const APPURL = 'utenti/json/users.json'

let table = document.querySelector('#users')

fetch(APPURL)
.then(res => res.json())
.then(res => {

    for(let utente of res){
        let tr = document.createElement('tr')
    

        let tdUsername = document.createElement('td')
        tdUsername.innerHTML = utente.username
       
        let tdNome = document.createElement('td')
        tdNome.innerHTML = utente.firstName

        let tdCognome = document.createElement('td')
        tdCognome.innerHTML = utente.lastName

        let tdGender = document.createElement('td')
        tdGender.innerHTML = utente.gender

        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = utente.email

        let tdImg1 = document.createElement('td')
        tdImg1.innerHTML = `<img src=" ${utente.profileURL} " width=75px>`

        tr.append(tdImg1,tdUsername,tdNome,tdCognome,tdGender,tdEmail)

        table.append(tr)
    }

    })
