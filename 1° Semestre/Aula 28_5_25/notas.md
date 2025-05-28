# Revisão
## Tipos de Função
### Declarada
```
function soma(x,y){
  return x+y
}
```
### Expressão de Função (Anônima)

### De Flecha
``` 
soma = (x,y) = > {
  return x+y
}
```
## Quais as Formas de Declarar Objetos?
### 1. Declarando Objetos <br>
```
  var aluno1 = new Object();
  aluno1.ra = "00001234";
  aluno1.nome = "Ronaldo";
  alert(`RA = ${aluno1.ra} \nNome = ${aluno1.nome}`);
```
### 2. usando Chave <br>
```
  var aluno2 = {}; // Usando colchetes
      aluno2.ra = "1234";
      aluno2["nome"] = "Mike";
  alert(`RA = ${aluno2.ra} \nNome = ${aluno2.nome}`);

  aluno2["email do aluno"] = "mike@gmail.com"; // E possivel por espaço quando delcara nome
  alert(aluno2["email do aluno"]);
```
### 3. Literal com virgula <br>
```
  var aluno3 = { // Literal
      ra: "123456",
      nome: "Isadora", // virgula opcional
  }
  alert(`RA = ${aluno3.ra} \nNome = ${aluno3.nome}`)
```
### 4. Usando Função Construtora <br>
```
  function Aluno(ra, nome){
      //var teste: private
      // let teste1: private
      this.ra = ra;
      this.nome = nome;
      this.MostraDados = function() {
          return `RA = ${this.ra} \nNome = ${this.nome}`;
      }
  }
  var aluno4 = new Aluno("654321", "Karole");
  alert(aluno4.MostraDados());
  alert(aluno4.nome);
```
- Dá pra criar uma propriedade com variavel
### 5. Função construtora sem parametros <br>
  ```
  function Aluno2(){
    var ra;
    var nome;
    this.setRa = function (value) {
        this.ra = value;
    }
    this.getRa = function () {
        return this.ra;
    }
  
    this.setNome = function (value) {
        this.nome = value;
    }
    this.getNome = function () {
        return this.nome;
    }
  }
  var aluno6 = new Aluno2();
  aluno6.setRa("1234");
  aluno6.setNome("Bruna Gatinha");
  
  alert(aluno6.getRa() + " " + aluno6.getNome());
  ```
- "Como faço para receber se é privado?" Você usa o get e o set dentro da função construtora.

### 6. Herança
   - É possivél usar herança em função construtora usando o prototype
   - A Chave: ClasseFilha.prototype = new Classe Mãe
```
  function AlunoADS(){
      var numLab
      this.setNumLab = function (value){
          this.numLab = value;
      }
      this.getNumLab = function (){
          return this.numLab;
      }
  }
    AlunoADS.prototype = new Aluno2();
    var aluno7 = new AlunoADS();
    aluno7.setNome("Gabriel Fonseca");
    aluno7.setRa("23445");
    aluno7.setNumLab(5);
    alert(`Nome: ${aluno7.getNome()} \nRA: ${aluno7.getRa()} \nNúmero Laboratório ${aluno7.getNumLab()}`);
```
### 7. Cópia de Objetos
- Você cria um objeto e um 2 objeto, atribui o valor do obj 2 como sendo o obj 1. Assim botando o nome no obj 1 o obj 2 teria o mesmo nome

```
  var obj1 = new Object();
  var obj2 = obj1;
  obj1.nome = "Matheus";
  alert(obj2.nome); // Matheus
```
### 8. Metodos e atributos - públicos e privados
- Nós executamos um método publico e ele chama um privado
```
class ContaBancaria{
      #cpf; // Atributo privado

      constructor(nome, saldoInicial){
          this.nome = nome; // Atributo público
          this.saldo = saldoInicial; // Atributo público
      }
      setCpf(value){
          this.#cpf = value; // precisa do # para acessar o atributo privado
      }
      getCpf(){
          return this.#cpf;
      }
      getSaldo(){
          return this.saldo;
      }
      //metodo oublico
      depositar(valor){
          this.saldo += valor;
          this.#registrarTransacao(valor);
      }
      // método privado
      #registrarTransacao(valor){
      console.log(`Depósto de R$ ${valor} realizado.
      Saldo R$ ${this.saldo} para cpf ${this.getCpf()} ou ${this.#cpf}`); 
      }
  }

  const conta = new ContaBancaria("Miguel", 20);
  conta.setCpf("123.456.789-00");
  conta.depositar(5);
```
### 9. Objeto com Array
- Está com erro
```
const arr = [
      ['Código', 1],
      ['Nome', "João"],
      ['Idade', 30]
  ]
  //deu erro embaixo
  const objArr = Object.fromEntries(arr);
  alert(objArr); // imprime object
  alert(objArr.Nome); //Imprime Nome
  alert(JSON.stringify(objArr)); // Converte o objeto para string JSON
```

### 10. Alteração no Prototipo altera o Novo

```
    // alteração no prototipo reflete no novo
    const objEmpresa = {
        empresa: '2F do Brasil'
    };
    const funcionario = Object.create(objEmpresa, {
        nome: {
            value: 'José Carlos'
        },
        endereco: {
            value: 'Av. São Paulo'
        }
    })
    console.log(funcionario.empresa);
```
