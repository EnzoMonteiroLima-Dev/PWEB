function Jogar(escolhaPessoa) { 
    const escolhaPc = Math.floor(Math.random() * 3) 

if (escolhaPessoa == 1 && escolhaPc == 0) { alert("O computador escolheu Pedra e voce escolheu papel \nVoce ganhou!") }
else if (escolhaPessoa == 1 && escolhaPc == 2) { alert("O computador escolheu tesoura e voce escolheu papel \nComputador ganhou!") }
else if (escolhaPessoa == 2 && escolhaPc == 1) { alert("O computador escolheu papel e voce escolheu tesoura \nVoce ganhou!") }
else if (escolhaPessoa == 2 && escolhaPc == 0) { alert("O computador escolheu Pedra e voce escolheu tesoura \nComputador ganhou!") }
else if (escolhaPessoa == 0 && escolhaPc == 2) { alert("O computador escolheu tesoura e voce escolheu pedra \nVoce ganhou!") }
else if (escolhaPessoa == 0 && escolhaPc == 1) { alert("O computador escolheu papel e voce escolheu pedra \nComputador ganhou!") }
else if (escolhaPessoa == escolhaPc) { alert("Voces escolheram a mesma coisa \nEmpatou!") }}