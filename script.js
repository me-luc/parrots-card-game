const cardImgs = [
	`<img src="./images/bobrossparrot.gif" alt="" />"`,
	`<img src="./images/explodyparrot.gif" alt="" />`,
	`<img src="./images/fiestaparrot.gif" alt="" />`,
	`<img src="./images/metalparrot.gif" alt="" />`,
	`<img src="./images/revertitparrot.gif" alt="" />`,
	`<img src="./images/tripletsparrot.gif" alt="" />`,
	`<img src="./images/unicornparrot.gif" alt="" />`,
];

askNumber();

function askNumber() {
	let number = prompt(
		"Digite um número (somente números pares aceitos 2 - 14):"
	);
	while (number % 2 !== 0 || number > 14) {
		alert("Digite apenas números pares!");

		if (number % 2 !== 0) {
			number = prompt(
				"Digite um número (somente números pares aceitos ex: 2, 4, 6):"
			);
		} else if (number > 14) {
			number = prompt("Digite um número menor que 14:");
		} else {
			number = prompt("Digite um número menor ou igual a 14");
		}
	}
	drawCard(number);
}

function drawCard(number) {
	//foi criado dois squares para melhor divisão das cartas
	const square1 = document.querySelector(".square1");
	const square2 = document.querySelector(".square2");

	let asignedCardNumber = [];
	//criando um array com número das cartas
	for (let i = 0; i < number / 2; i++) {
		//adicionando duas vzs para adicionar duas cartas iguais
		asignedCardNumber.push(i);
		asignedCardNumber.push(i);
	}
	//embaralhando numeros
	asignedCardNumber.sort(makeRandom);
	alert(asignedCardNumber);
	//criando cartas
	for (let u = 0; u < number; u++) {
		//atribuindo a carta a um numero
		alert(cardImgs[asignedCardNumber[u]]);
		square1.innerHTML += `
		<div class="card" onclick="flip(this)" id="${asignedCardNumber[u]}">
			<div class="face front" >
				${cardImgs[asignedCardNumber[u]]}
			</div>
			<div class="face back">
				<img src="./images/back.png" alt="" />
			</div>
		</div>
	`;
	}
}

function flip(elemento) {
	//se não tiver virado, add flip
	if (elemento.classList.contains("flip")) {
		elemento.classList.remove("flip");
	} else {
		elemento.classList.add("flip");
		setTimeout(flip, 2000, elemento);
	}
}

function makeRandom() {
	return Math.random() - 0.5;
}
