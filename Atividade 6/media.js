var nome = prompt("Digite seu nome: ");
var nota1 =parseFloat(prompt ("Digite sua primeira nota:"))
var nota2 =parseFloat(prompt ("Digite sua segunda nota:"))
var nota3 =parseFloat(prompt ("Digite sua terceira nota:"))
var nota4 =parseFloat (prompt ("Digite sua quarta nota:"))
var media=0

media=(nota1+nota2+nota3+nota4)
media=media.toFixed(2)

alert(nome+", sua nota é: "+media)