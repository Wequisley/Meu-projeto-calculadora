function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}

// Seleciona o botão pelo ID
const button = document.getElementById("changeColorButton");

// Lista de cores
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0FF33", "#FF33D1", "#33FFF3"];

// Adiciona um evento de clique ao botão
button.addEventListener("click", () => {
    // Gera uma cor aleatória da lista
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Define a cor de fundo da página
    document.body.style.backgroundColor = randomColor;
});
