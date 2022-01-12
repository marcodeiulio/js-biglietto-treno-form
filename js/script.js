/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

const alertNumber = `Il valore ammesso non è un numero!
Per favore, inserire solo numeri.`;

const alertName = 'Dati inseriti non validi.'

const userName = prompt('Inserire nome e cognome.', 'Gennarino Gennaretti').trim();

if (!userName.length) {
	alert(alertName);
	location.reload();
} else {
	document.getElementById('user-name').innerText = userName;
	console.log('Nome utente: ' + userName);
}

const userAge = parseInt(prompt(`Quanti anni hai?
Solo numeri ammessi.`, '25').trim());
console.log('Età utente: ', userAge);

if (isNaN(userAge)) {
	alert(alertNumber);
	location.reload();
} else if (userAge > 120) {
	alert('Età non valida.');
	location.reload();
}

const userDistance = parseInt(prompt(`Per quanti chilometri vuoi viaggiare?
Inserire un valore espresso in KM.
Solo numeri ammessi.`, '50').trim());
console.log('Distanza da percorrere: ', userDistance);

if (isNaN(userDistance)) {
	alert(alertNumber);
	location.reload();
} else if (userDistance > 2000) {
	alert('Distanza troppo elevata.');
	location.reload();
}

let ticketPrice = userDistance * 0.21;
console.log('Prezzo del biglietto: ', ticketPrice);

if (userAge < 18) {
	ticketPrice = ticketPrice * 0.80;
	document.getElementById('offer').innerText = 'Junior'
} else if (userAge > 65) {
	ticketPrice = ticketPrice * 0.60;
	document.getElementById('offer').innerText = 'Senior'
} else {
	document.getElementById('offer').innerText = 'Standard'
}

const priceMessage = ticketPrice.toFixed(2) + '€';
document.getElementById('ticket-price').innerText = priceMessage;
console.log('Prezzo del biglietto scontato: ', ticketPrice.toFixed(2), '€');