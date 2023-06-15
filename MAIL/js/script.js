// 1. Come poss oottenere l'input dell'utente dalla email e password?
// 2. Come posso vedere e capire se l'email che viene inserita è corretta per accedere?
// 3. quali azioni posso fare se l'email è nella lista di accesso? e se non è nella lista?
// 4. mostrare messaggio di non avvenuto o avvenuto accesso alla pagina.




//---------------------------------------------------------------------------------------------------------//

//Lista delle email autorizzate
let emailApproved = [
    { email: "user0@gmail.com", password: "password0" },
    { email: "user1@yahoo.com", password: "password1" },
    { email: "user2@hotmail.com", password: "password2" },
    { email: "lucavita97@gmail.com", password: "password3" },
    { email: "kulertoast997@gmail.com", password: "password4" }
];

//gestiamo la sottomissione del form
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // preveniamo il comportamento cassico del submit del form

    //otteniamo l'email dall'utente
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let approved = false;  //indichiamo che l'accesso è consentito

    for(let i = 0; i < emailApproved.length; i++) {
        if (emailApproved[i].email === email && emailApproved[i].password === password) { 
            approved = true; //se ne trova una inserita nell'array allora potrà impostare approved su true
            break; //interrompiamo il ciclo grazie all'email corretta
        }
    }
    if (approved) { //se approva allora stampa CONSENTITO
        showMessage('Accesso consentito!');
    } else { //altrimenti stampa NEGATO
        showMessage('Accesso negato!');
    }
});
function showMessage(message) {
    document.querySelector('#message').innerText = message;//stampiamo a schermo il risultaoto del nostro login
}
