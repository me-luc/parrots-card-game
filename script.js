askNumber();

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
	drawImg(number);
}

function drawImg(number) {
	//foi criado dois squares para melhor divisão das cartas
	const square1 = document.querySelector(".square1");
	const square2 = document.querySelector(".square2");

	for (let i = 0; i < number / 2; i++) {
		square1.innerHTML += `
                <div class="bloco">
                    AS
                </div>
        `;
	}
	for (let i = 0; i < number / 2; i++) {
		square2.innerHTML += `
                <div class="bloco">
                    AS
                </div>
        `;
	}
}
