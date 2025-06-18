//Função para calcular a média das notas
function CalcularMedia() {
   
    // Pega os valores dos campos
    var n1 = parseFloat(document.getElementById('Nota1').value);
    var n2 = parseFloat(document.getElementById('Nota2').value);
    var n3 = parseFloat(document.getElementById('Nota3').value);
        
    // Verifica se são números válidos
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, insira notas válidas!");
        return;
    }
 
    // Calcular a média
    var media = (n1 + n2 + n3) / 3;
 
    // Mostrar o resultado
    document.getElementById('resultado').innerText = "A média é: " + media.toFixed(2);
 
 
 
}