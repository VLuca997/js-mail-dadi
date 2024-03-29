//-------------------------------DADI--------------------------------------//
/* 1: Funzione per generare un numero casuale tra 1 e 6 (inclusi)
    -generare i lanci dei dadi per pg1 e computer
*/
/* funzione per visualizzare il risultato
    - selezioniamo l'elemento html che deve mostrare il risultato
    - immettiamo il testo all'interno dell'elemento html con il risultato
    - verificare il risultato per determinare il vincitore e imposta il colore di sfondo corrispondente ( win in green )
    - con un if, else if, else, decidiamo che colore di sfondo dare ai vincitori, nell'else finale diamo il colore per il pareggio.
    - 
*/
/* Funzione per generare il lancio dei dadi
    -generiamo dei punteggi randomici per player 1 e computer
    -selezioniamo gli elementi HTML del player 1 e computer
    -mostriamo i risultati randomici nei 2 div creati nell'html
    -diamo colore di sfondo agli elementi html ( lose in red )
    -Determina il vincitore in base ai punteggi dei giocatori e imposta il colore di sfondo corrispondenteù
    -Se il giocatore ha il punteggio più alto, imposta il colore di sfondo del suo elemento su verde
    - Mostriamo il messaggio di vittoria del giocatore utilizzando la funzione showResult
    -Se il computer ha il punteggio più alto, imposta il colore di sfondo del suo elemento su verde
    -Mostra il messaggio di vittoria del computer utilizzando la funzione showResult
    -Se i punteggi sono uguali, imposta il colore di sfondo di entrambi gli elementi su giallo
    -Mostra il messaggio di pareggio utilizzando la funzione showResult

*/

/* Funzione per resettare il gioco
    -
*/

// Event listener per il pulsante "Lancia i dadi"

// Event listener per il pulsante "Reset"
















//generiamo un numero casuale:
function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;  // la funzione scritta restituisce un numero casuale tra il minimo e il massimo. (1 / 6 da aggiungere in seguito)
}

//funzione per vedere il risultato
function showResult(result) { // result è il paramentro che rappresenterà il risultato.

    let resultDiv = document.getElementById('result'); //Seleziona l'elemento HTML con l'id result e lo assegna alal variabile resultDiv

    resultDiv.innerHTML = result; // impostiamo il contenuto html con il valore del parametro result

    if (result === "Hai Vinto, Stupidissimo Umano!"){
        resultDiv.style.backgroundColor ="green"; // se vince impsota il colore della barra dei risultati a Verde
    }
    else if (result === "Ha Vinto il Computer, Looooooser!"){ 
        resultDiv.style.backgroundColor = "green"; // se vince impsota il colore della barra dei risultati a Verde
    }
    else {
        resultDiv.style.backgroundColor = "yellow"; // nel caso di pareggio, impostiamo lo sfondo della barra dei risultati a Giallo
    }
}

//Generiamo numeri casuali e li attribuiamo ai rispettivi elementi con aggiunta di stile
function rollDice() {
    let playerScore = getRandomNumber (1, 6); // Genera un punteggio casuale per il giocatore
    let computerScore = getRandomNumber (1, 6);// Genera un punteggio casuale per il computer

    let playerDiv = document.getElementById('player');// selezioniamo l'elemento HTML del player
    let computerDiv = document.getElementById('computer'); // selezioniamo l'elemento html del computer

    playerDiv.innerHTML = playerScore;    // impostiamo il punteggio del player come contenuto nell'elemento dell'html
    computerDiv.innerHTML = computerScore; // impostiamo il punteggio del computer come contenuto nell'elemento dell'html

    playerDiv.style.backgroundColor = "red"; // impostiamo lo sfondo dell'elemento html a rosso ( servirà per la sconfitta )
    computerDiv.style.backgroundColor = "red"; // impostiamo lo sfondo dell'elemento html a rosso ( servirà per la sconfitta )



    if (playerScore > computerScore){   // se il player vince allora impostiamo il colore verde e la scritta adiacente.
        playerDiv.style.backgroundColor = "green"
        showResult("FOSSAAA A OMAAA ALEE ALEE ALEEE!");
    }
    else if (playerScore < computerScore){  // se il computer vince allora impostiamo il colore verde e la scritta adiacente.
        computerDiv.style.backgroundColor = "green";
        showResult("Ha Vinto a Lazie... ma davero regà?");
    }
    else{
        playerDiv.style.backgroundColor = "yellow"; // nel caso di pareggio allora, uscirà la scritta sotto impostata ed il colore giallo!
        computerDiv.style.backgroundColor = "yellow";
        showResult("è Patta Signori!");
    }

}
//funzione per resettare il gioco

function resetGame(){
    let resultDiv = document.getElementById('result'); // otteniamo l'elemento result direttamente dall'html
    resultDiv.innerHTML = ""; // svuoto il contenuto dal result
    resultDiv.style.backgroundColor = "white"; //impostiamo lo sfondo a bianco

    // otteniamo dall'html gli elementi player e computer
    let playerDiv = document.getElementById('player');
    let computerDiv = document.getElementById('computer');

    playerDiv.innerHTML = "";//scuotiamo il contenuto da player
    computerDiv.innerHTML = "";//svuotiamo il contenuto da computer

    //impostiamo lo sfondo durante il reset a viola
    playerDiv.style.backgroundColor = "purple";
    computerDiv.style.backgroundColor = "purple";
}

// event listner per rollare i dadi:
document.getElementById('play-btn').addEventListener('click', rollDice);

// event listner per il reset
document.getElementById("reset-btn").addEventListener('click', resetGame);