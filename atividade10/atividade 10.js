function calcularIMC(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso/(altura*altura);
    let classificação= obterClassificacao(imc);

    alert(`IMC:\t classificação:\n${imc}\t${classificação}`)
}
function obterClassificacao(imc) {
    switch (true) {
        case (imc < 18.5):
            return "Magreza (Grau 0)";
        case (imc < 25):
            return "Normal (Grau 0)";
        case (imc < 30):
            return "Sobrepeso (Grau I)";
        case (imc < 40):
            return "Obesidade (Grau II)";
        default:
            return "Obesidade Grave (Grau III)";
    }
}    