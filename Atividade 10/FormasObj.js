// 1° Forma
var funcionario1 = new Object();
funcionario1.nome = prompt("Digite o nome do 1° funcionário:");
funcionario1.matricula = prompt("Digite a mátricula 1° do funcionário:");
funcionario1.cargo = prompt("Digite a função do 1° funcionário:");

alert(`O Nome do 1° Funcionário é: ${funcionario1.nome}\n
A Mátricula do 1° Funcionário é: ${funcionario1.matricula}\n
A Função do 1° Funcionário é: ${funcionario1.cargo}`);

// 2° Forma
var funcionario2 = {};
funcionario2.nome = prompt("Digite o nome do 2° funcionário:"),
funcionario2.matricula = prompt("Digite a mátricula 2° do funcionário:"),
funcionario2.cargo = prompt("Digite a função do 2° funcionário:"),

alert(`O Nome do 2° Funcionário é: ${funcionario2.nome}\n
A Mátricula do 2° Funcionário é: ${funcionario2.matricula}\n
A Função do 2° Funcionário é: ${funcionario2.cargo}`);

// 3° Forma
function Funcionario3(nome, matricula, cargo){
    this.matricula = matricula;
    this.nome = nome;
    this.cargo = cargo;
    this.MostraDados = function() {
        return `Nome do 3° funcionário = ${this.nome} \nMátricula do 3° funcionário = ${this.matricula}\nFunção do 3° funcionário = ${this.cargo}`;
    }
}
var n1, n2, n3
n1 = prompt("Nome do 3° funcionário");
n2 = prompt("Mátricula do 3° funcionário");
n3 = prompt("Função do 3° funcionário");
var funcionario3 = new Funcionario3(n1, n2, n3);
alert(funcionario3.MostraDados());