class Retangulo {
  constructor(x, y) {
    this.base = x;
    this.altura = y;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

let base = parseFloat(prompt("Digite a base do retângulo:"));
let altura = parseFloat(prompt("Digite a altura do retângulo:"));

let ret = new Retangulo(base, altura);
alert("Área do retângulo: " + ret.calcularArea());



class Conta {
  #nomeCorrentista;
  #banco;
  #numeroConta;
  #saldo;

  get nomeCorrentista() { return this.#nomeCorrentista; }
  set nomeCorrentista(valor) { this.#nomeCorrentista = valor; }

  get banco() { return this.#banco; }
  set banco(valor) { this.#banco = valor; }

  get numeroConta() { return this.#numeroConta; }
  set numeroConta(valor) { this.#numeroConta = valor; }

  get saldo() { return this.#saldo; }
  set saldo(valor) { this.#saldo = valor; }
}

class Corrente extends Conta {
  #saldoEspecial;

  get saldoEspecial() { return this.#saldoEspecial; }
  set saldoEspecial(valor) { this.#saldoEspecial = valor; }
}

class Poupanca extends Conta {
  #juros;
  #dataVencimento;

  get juros() { return this.#juros; }
  set juros(valor) { this.#juros = valor; }

  get dataVencimento() { return this.#dataVencimento; }
  set dataVencimento(valor) { this.#dataVencimento = valor; }
}

let c = new Corrente();
c.nomeCorrentista = prompt("Corrente: Nome do correntista:");
c.banco = prompt("Corrente: Banco:");
c.numeroConta = prompt("Corrente: Número da conta:");
c.saldo = parseFloat(prompt("Corrente: Saldo:"));
c.saldoEspecial = parseFloat(prompt("Corrente: Saldo Especial:"));

alert(
  "Dados da Conta Corrente:\n" +
  "Nome: " + c.nomeCorrentista + "\n" +
  "Banco: " + c.banco + "\n" +
  "Número da Conta: " + c.numeroConta + "\n" +
  "Saldo: R$" + c.saldo + "\n" +
  "Saldo Especial: R$" + c.saldoEspecial
);

// Poupança
let p = new Poupanca();
p.nomeCorrentista = prompt("Poupança: Nome do correntista:");
p.banco = prompt("Poupança: Banco:");
p.numeroConta = prompt("Poupança: Número da conta:");
p.saldo = parseFloat(prompt("Poupança: Saldo:"));
p.juros = parseFloat(prompt("Poupança: Juros (%):"));
p.dataVencimento = prompt("Poupança: Data de vencimento:");

alert(
  "Dados da Conta Poupança:\n" +
  "Nome: " + p.nomeCorrentista + "\n" +
  "Banco: " + p.banco + "\n" +
  "Número da Conta: " + p.numeroConta + "\n" +
  "Saldo: R$" + p.saldo + "\n" +
  "Juros: " + p.juros + "%\n" +
  "Vencimento: " + p.dataVencimento
);
