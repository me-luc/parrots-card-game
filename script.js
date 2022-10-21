askNumber();

const cardImgs = [
	`<img src="./images/bobrossparrot.gif" alt="" />"`,
	`<img src="./images/explodyparrot.gif" alt="" />`,
	`<img src="./images/fiestaparrot.gif" alt="" />`,
	`<img src="./images/metalparrot.gif" alt="" />`,
	`<img src="./images/revertitparrot.gif" alt="" />`,
	`<img src="./images/tripletsparrot.gif" alt="" />`,
	`<img src="./images/unicornparrot.gif" alt="" />`,
];

function askNumber() {
	let number = prompt(
		"Digite um número (somente números pares aceitos ex: 2, 4, 6):"
	);
	while (number % 2 !== 0) {
		alert("Digite apenas números pares!");
		number = prompt(
			"Digite um número (somente números pares aceitos ex: 2, 4, 6):"
		);
	}
	drawCard(number);
}

function drawCard(number) {
	//foi criado dois squares para melhor divisão das cartas
	const square1 = document.querySelector(".square1");
	const square2 = document.querySelector(".square2");

	const divPattern = `
		<div class="card" onclick="flip(this)">
			<div class="face front">
				<img src="./images/unicornparrot.gif" alt="" />
			</div>
			<div class="face back">
				<img src="./images/back.png" alt="" />
			</div>
		</div>
	`;

	for (let i = 0; i < number / 2; i++) {
		square1.innerHTML += divPattern;
	}
	for (let i = 0; i < number / 2; i++) {
		square2.innerHTML += divPattern;
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
