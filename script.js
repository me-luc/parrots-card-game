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
	const elemento = document.querySelector("ul");
	for (let i = 0; i < number; i++) {
		elemento.innerHTML += `
            <li> Hello
            </li>
        `;
	}
}
