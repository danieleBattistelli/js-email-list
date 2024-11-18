// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// **Bonus**
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

//definisco variabili per la lista in html
const emailList = document.getElementById('email-list');
const generateButton = document.getElementById('generate-btn')

console.log(emailList);
console.log(generateButton);

// Definisco una funzione che viene eseguita al click del pulsante
function generateEmail() {
    emailList.innerHTML ='' //pulisce la lista esistente
    for ( let i =0 ; i<10 ; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = response.data.response;
            emailList.appendChild(li);
        })
        .catch(error => console.error('Error' , error)); //usato per gestire eventuali errori che possono verificarsi durante una richiesta asincrona con Axios.
    console.log(emailList)
    }
}

//aggiungp l'event listener al click del bottone
generateButton.addEventListener('click', generateEmail);
