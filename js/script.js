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
document.getElementById('my_list-old').innerHTML =  cognomi ;
console.log("questà è la lista attuale :" + cognomi)
// Chiedi all’utente il cognome
cognomeUser= prompt("inserisci un cognome")
cognomi.push(cognomeUser);
console.log("il cognome da te inserito è:" + cognomeUser)
console.log("la nuova lista è :" + cognomi)

//e stampa la lista ordinata alfabeticamente.
cognomi.sort();
var i =0;

while (i < cognomi.length){
  document.getElementById('my_list-new').innerHTML += cognomi[i]+ ",";
  console.log(cognomi[i])
  i++;
}
console.log("la nuova lista ordinata alfabeticamente è:" + cognomi.sort());
document.getElementById('my_position').innerHTML = "la posizione del nuovo elemento nell'array è :" + cognomi.indexOf(cognomeUser);
console.log("la posizione del nuovo elemento nell'array è :"+ cognomi.indexOf(cognomeUser))
document.getElementById('my_position2').innerHTML = "la posizione per l'uomo è " + parseInt(cognomi.indexOf(cognomeUser)+1);
