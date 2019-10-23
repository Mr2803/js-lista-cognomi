/*Chiedi all’utente il cognome,
inseriscilo in un array con altri cognomi
e stampa la lista ordinata alfabeticamente.
Scrivi anche la posizione della lista in cui il nuovo utente si trova
QUINDI OUTPUT sarà:
- array disordinato di partenza
- array ordinato;
-  posizione in cui si trova il cognome dell’utente nell’array ordinato.
*/

//imposto il mio array
var cognomi = ["rispoli","fierro","mancini","salvi","cinelli"]

//imposto la mia var
var cognomeUser;

//Stampo in pagina il mio array
document.getElementById('my_list-old').innerHTML =  cognomi ;
console.log("questà è la lista attuale :" + cognomi)//debug

  // CHIEDI ALL'UTENTE IL COGNOME

//chiedo all'utente il suo cognome per aggiungerlo in lista
cognomeUser= prompt("inserisci un cognome")
document.getElementById('new_element').innerHTML =  cognomeUser;
//uso il comando push per inserire il cognome inserito all'interno dell'array
cognomi.push(cognomeUser);

console.log("il cognome da te inserito è:" + cognomeUser)//debug
console.log("la nuova lista è :" + cognomi)//debug

//E STAMPA LA LISTA ORDINATA ALFABETICAMENTE

//do il domando sort all'array che lo ordina alfabeticamente in maniera permanente(non avrò più bisogno di scrivere sort)
cognomi.sort();

//imposto il valore della variabile i per il mio ciclo while
var i =0;

//imposto la condizione affinchè il ciclo si ripeta
while (i < cognomi.length){
  document.getElementById('my_list-new').innerHTML += cognomi[i]+ " ";
  console.log(cognomi[i])//debug

  //imposto la mia via di uscita dal ciclo in questo caso la var i avanzerà di 1 fino a diventare >= di cognomi.length
  i++;
}
console.log("la nuova lista ordinata alfabeticamente è:" + cognomi);//debug

//Stampo in pagina la posizione del cognome inserito nell'array
document.getElementById('my_position').innerHTML =  cognomi.indexOf(cognomeUser);

console.log("la posizione del nuovo elemento nell'array è :"+ cognomi.indexOf(cognomeUser))//debug

//Stampo in pagina la posizione del cognome inserito per gli umani , ho utilizzato parseInt per convertire la stringa in numero
document.getElementById('my_position2').innerHTML = parseInt(cognomi.indexOf(cognomeUser)+1);
