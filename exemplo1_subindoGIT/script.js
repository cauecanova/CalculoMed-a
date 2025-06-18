//Função para calcular a média das notas
function CalcularMedia() {
   
    // Pega os valores dos campos
    var n1 = parseFloat(document.getElementById('Nota1').value);
    var n2 = parseFloat(document.getElementById('Nota2').value);
 
        // Verifica se são números válidos
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira notas válidas!");
        return;
    }
 
    // Calcular a média
    var media = (n1 + n2) / 2;
 
    // Mostrar o resultado
    document.getElementById('resultado').innerText = "A média é: " + media.toFixed(2);
 
 
 
}