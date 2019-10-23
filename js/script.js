/*Chiedi all’utente il cognome,
inseriscilo in un array con altri cognomi
e stampa la lista ordinata alfabeticamente.
Scrivi anche la posizione della lista in cui il nuovo utente si trova
QUINDI OUTPUT sarà:
- array disordinato di partenza
- array ordinato;
-  posizione in cui si trova il cognome dell’utente nell’array ordinato.
*/

var cognomi = ["rispoli","fierro","mancini","salvi","cinelli"]
var cognomeUser;

// Chiedi all’utente il cognome
cognomeUser= prompt("inserisci un cognome")
cognomi.push(cognomeUser);
console.log("il cognome da te inserito è:" + cognomeUser)

//e stampa la lista ordinata alfabeticamente.
var i =0;

while (i < cognomi.length){
  console.log(cognomi[i]);

  i++;
}
