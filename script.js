const cardImgs = [
	`<img src="./images/bobrossparrot.gif" alt="" />"`,
	`<img src="./images/explodyparrot.gif" alt="" />`,
	`<img src="./images/fiestaparrot.gif" alt="" />`,
	`<img src="./images/metalparrot.gif" alt="" />`,
	`<img src="./images/revertitparrot.gif" alt="" />`,
	`<img src="./images/tripletsparrot.gif" alt="" />`,
	`<img src="./images/unicornparrot.gif" alt="" />`,
];

let moves = 0;
let numberCards = 0;

askNumber();

function askNumber() {
	let number = prompt(
		"Digite um número (somente números pares aceitos 4 - 14):"
	);
	while (number % 2 !== 0 || number > 14 || number < 4) {
		alert("Digite apenas números pares!");

		if (number % 2 !== 0) {
			number = prompt(
				"Digite um número (somente números pares aceitos ex: 2, 4, 6):"
			);
		} else if (number < 4) {
			number = prompt("Digite um número maior que 4:");
		} else if (number > 14) {
			number = prompt("Digite um número menor que 14:");
		} else {
			number = prompt("Digite um número menor ou igual a 14");
		}
	}
	numberCards = number;
	drawCard(number);
}

function drawCard(number) {
	//foi criado dois squares para melhor divisão das cartas
	const square1 = document.querySelector(".square1");
	const square2 = document.querySelector(".square2");

	//criando um array com número das cartas
	let asignedCardNumber = [];
	for (let i = 0; i < number / 2; i++) {
		//adicionando duas vzs para adicionar duas cartas iguais
		asignedCardNumber.push(i);
		asignedCardNumber.push(i);
	}

	//embaralhando numeros
	asignedCardNumber.sort(makeRandom);

	//criando cartas
	for (let u = 0; u < number; u++) {
		//atribuindo a carta a um numero
		let str = `<div id="card${
			asignedCardNumber[u]
		}" class="card" onclick="flip(this)" >
						<div class="face front" >
							${cardImgs[asignedCardNumber[u]]}
						</div>
						<div class="face back">
							<img src="./images/back.png" alt="" />
						</div>
					</div>
		`;

		//foi criado duas divs para melhor divisão das cartas
		if (u % 2 == 0 || u == 0) {
			square1.innerHTML += str;
		} else {
			square2.innerHTML += str;
		}
	}
}

function flip(element) {
	//variavel p/ verificar quantos elements virados no momento
	let flipElements = document.querySelectorAll(".flip");

	//verificando se possui já dois elements virado
	if (flipElements.length < 2) {
		element.classList.add("flip");
	}

	//atualizando numero apos novo clique, se for dois, não executa nada
	flipElements = document.querySelectorAll(".flip");

	//checar se os dois elementos virados são iguais (possuem mesma id)
	if (flipElements.length == 2) {
		//contando jogada do usuário
		moves += 2;

		if (flipElements[0].id === flipElements[1].id) {
			flipElements[0].classList.add("correct");
			flipElements[1].classList.add("correct");
			flipElements[0].classList.remove("flip");
			flipElements[1].classList.remove("flip");
		} else {
			setTimeout(removeFlip, 1000, flipElements[0]);
			setTimeout(removeFlip, 1000, flipElements[1]);
		}
	}

	//checar se todas cartas estão viradas (finalizar jogo)
	const correctArr = document.querySelectorAll(".correct");
	if (correctArr.length == numberCards) {
		setTimeout(showWinMessage, 1000, moves);
	}
}

function showWinMessage(moves) {
	alert(`Você ganhou em ${moves} jogadas!`);
}

function removeFlip(element) {
	element.classList.remove("flip");
}

function makeRandom() {
	return Math.random() - 0.5;
}

//função para formatar tempo em seg p/ 00:00
function formatSecToMin(sec) {
	if (sec < 60) {
		return `00:` + ("00" + sec).slice(-2);
	} else {
		let min = Math.floor(sec / 60);
		let leftSec = sec - min * 60;
		return `${("00" + min).slice(-2)}:${("00" + leftSec).slice(-2)}`;
	}
}
