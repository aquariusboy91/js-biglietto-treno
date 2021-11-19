/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//richiesta km utente 
let user_km = parseInt(prompt("Inserisci i kilometri"));
console.log(user_km);

//richiesta eta utente 
let eta_user = parseInt(prompt("inserisci la tua età"));

//prezzo fisso al kilometro 
const tariffa_km = 0.21; 

//prezzo totale 
let totale = user_km * 0.21; 
console.log(totale);

//sconto minorenni 
let sconto_minorenni = (totale * 20) / 100; 
console.log(sconto_minorenni);

// sconto over 65
let sconto_over = (totale * 40) / 100;
console.log(sconto_over);

//totale per minorenni 
let totale_minorenni = totale - sconto_minorenni; 
console.log (totale_minorenni);

//totale per over
let totale_over = totale - sconto_over;
console.log (totale_over);

//titolo
document.getElementById("titolo").innerHTML = "Biglietto del treno in base ai Km e all'età";


//condizioni di sconto
if (eta_user < 18) {
    document.writeln("Hai diritto allo sconto del 20%. Il prezzo in base a " + user_km + "Km è: " + (Math.round(totale_minorenni * 100) / 100).toFixed(2) + "€");

} else if (eta_user > 65) {
    document.writeln("Hai diritto allo sconto del 40%. Il prezzo in base a " + user_km + "Km è: " + (Math.round(totale_over * 100) / 100).toFixed(2) + "€");

} else {
    document.writeln("Il prezzo in base a " + user_km + "Km è: " +(Math.round(totale * 100) / 100).toFixed(2) + "€");
}


