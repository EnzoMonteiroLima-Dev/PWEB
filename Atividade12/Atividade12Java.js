//function Retangulo(x,y){
  //  this.altura=x;
    //this.base=y;
    //this.calcular=function(){
      //  return(this.base*this.altura);
    //}
//}

class Retangulo {
    constructor(x,y){
    this.altura=x;
    this.base=y;
    }
    calcular(){
        return(this.altura*this.base);
    }
}

let retangulo1 = new Retangulo(2,2);
alert(`Area do retangulo: ${retangulo1.calcular()}`);

class Conta {
    constructor() {
        this.nomeCorrentista;
        this.banco;
        this.numConta;
        this.saldo;
    }
    setNome(nome){
        this.nomeCorrentista=nome;
    }
    getNome(){
        return this.nomeCorrentista;
    }
    setBanco(banco){
        this.banco=banco;
    }
    getBanco(){
        return this.banco;
    }
    setNumConta(numConta){
        this.numConta=numConta;
    }
    getNumConta(){
        return this.numConta;
    }
    setSaldo(saldo){
        this.saldo=saldo;
    }
    getSaldo(){
        return this.saldo;
    }
}
class Poupança extends Conta{ 
    constructor(){
        super();
        this.juros;
        this.dataVenc;

    }
    setJuros(juros){
        this.juros=juros;
    }
    getJuros(){
        return this.juros;
    }
    setDataVenc(dataVenc){
        this.dataVenc=dataVenc;
    }
    getDataVenc(){
        return this.dataVenc;
    }
}
class Corrente extends Conta{
    constructor(){
        super();
        this.saldoEsp;

    }
    setSaldoEsp(saldoEsp){
        this.saldoEsp=saldoEsp;
    }
    getSaldoEsp(){
        return this.saldoEsp;
    }
}

let corrente1 = new Corrente();
corrente1.setNome("Enzo");
corrente1.setBanco("Bradesco");
corrente1.setNumConta(1234);
corrente1.setSaldo(100);
corrente1.setSaldoEsp(200);

alert(`Nome do correntista: ${corrente1.getNome()}\nNome do banco: ${corrente1.getBanco()}\nNumero da conta: ${corrente1.getNumConta()}\nSaldo da conta: ${corrente1.getSaldo()}\nSaldo especial: ${corrente1.getSaldoEsp()} `)

let poupanca1 = new Poupança();
poupanca1.setNome("Erick");
poupanca1.setBanco("Santander");
poupanca1.setNumConta(4321);
poupanca1.setSaldo(200);
poupanca1.setDataVenc("27/11/2003");
poupanca1.setJuros("1% ao mês");

alert(`Nome do correntista: ${poupanca1.getNome()}\nNome do banco: ${poupanca1.getBanco()}\nNumero da conta: ${poupanca1.getNumConta()}\nSaldo da conta: ${poupanca1.getSaldo()}\nJuros: ${poupanca1.getJuros()}\nData de vencimento: ${poupanca1.getDataVenc()} `)
