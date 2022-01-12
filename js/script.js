/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/


const get = document.getElementById('get');

get.addEventListener('click',
	function () {

		//# Nome
		const userName = document.getElementById('name').value;
		console.log(userName);
		if (!userName.length) {
			alert('Nome inserito non valido.');
			location.reload();
		} else {
			document.getElementById('user-name').innerText = userName;
			console.log('Nome utente: ' + userName);
		}

		//# Distanza
		const userDistance = parseInt(document.getElementById('kms').value);
		if (isNaN(userDistance) || (userDistance === 0)) {
			alert('Distanza inserita non valida.');
			location.reload();
		} else if (userDistance > 2000) {
			alert('Distanza troppo elevata.');
			location.reload();
		}
		console.log('Distanza da percorrere: ', userDistance);
		console.log(userDistance);

		//# Età
		const userAge = document.getElementById('age').value;
		console.log(userAge);


		//# Calcolo biglietto
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

		document.getElementById('ticket-price').innerText = ticketPrice.toFixed(2) + '€';
		console.log('Prezzo del biglietto scontato: ', ticketPrice.toFixed(2), '€');

		//# Calcolo carrozza
		document.getElementById('wagon').innerText = Math.floor((Math.random() * 6) + 1);

		//# Calcolo codice CP
		document.getElementById('cp-code').innerText = Math.floor((Math.random() * 100000));
	});

