//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//genero numeri casuali per giocatore e computer
var numeroCasualeGiocatore = Math.floor(Math.random() * 6) + 1;

var numeroCasualeComputer = Math.floor(Math.random() * 6) + 1;

// verifico la condizione e stampo il risultato del gioco
if (numeroCasualeGiocatore > numeroCasualeComputer ) {
    document.getElementById('vincitore').innerHTML= "Il viniciore è giocatore con il numero=" + numeroCasualeGiocatore + " il computer ha il numero=" + numeroCasualeComputer;
} else if (numeroCasualeGiocatore == numeroCasualeComputer ) {
    document.getElementById('vincitore').innerHTML= "La partita è finita in parità. Il computer ha il numero=" + numeroCasualeComputer + " mentre il giocatore ha il numero=" + numeroCasualeGiocatore;
} else {
    document.getElementById('vincitore').innerHTML= "Il viniciore è il computer con il numero=" + numeroCasualeComputer + " il giocatore ha il numero=" + numeroCasualeGiocatore; 
} 