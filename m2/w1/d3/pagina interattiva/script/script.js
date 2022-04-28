//tendina//
function toggleMenu() {
    document.getElementById('push').classList.toggle('espandi');

}

//interattività//

const titolo = document.querySelector(".titolo")
function changeColor(){
   titolo.style.color = "blue"
}


 //agenda//

 let lista = document.querySelectorAll('li');

 for (var i = 0; i < lista.length; i++) {
 
     lista[i].addEventListener('mouseover', function() {
         this.classList.add('selezione');
     });
 
     lista[i].addEventListener('mouseout', function() {
         this.classList.remove('selezione');
     });
 
     lista[i].addEventListener('click', function() {
         this.classList.toggle('fatto');
     });
 }