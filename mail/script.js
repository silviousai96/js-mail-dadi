// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
//stampa un messaggio appropriato sull’esito del controllo.

//Input email
var inputEmail = prompt("Inserisci la tua email: ");

//lista email che possono accedere
var arrayEmail = ["alessio@gmail.com", "silvio@gmail.com", "gianni@gmail.com", "mirko@gmail.com"];

//variabile flag di default falsa, se nel prossimo ciclo accade la condizione che imposto, diventa vera
var emailPass = false;

//ciclo per verificare se l'email inserita è nella lista delle email che possono accedere
for( var i=0; i < arrayEmail.length; i++ ) {
    var thisEmail = arrayEmail[i];
    
    if( thisEmail == inputEmail ) {
        emailPass = true ;
    } 
}

//stampo l'output che dice se l'email è valida o non valida
if ( emailPass == true ) {
    alert('email valida, accesso eseguito.');
} else {
    alert('email non valida, accesso negato!');
}


