function calcularMedia(array) {
    if (array.length === 0) {
        return 0;
    }
    var soma = array.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);
    var media = soma / array.length;
    return media;
}

function calcularEMostrarMedia() {
    var inputElement = document.getElementById("numeros");
    var numeros = inputElement.value.split(",").map(Number);
    var media = calcularMedia(numeros);
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = "A média dos números é: " + media.toFixed(2);
}