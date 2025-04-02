var n1, n2, soma, subtracao, produto, divisao, restoDivisao ;

n1 = parseFloat(prompt("Informe o 1° Número:"));
n2 = parseFloat(prompt("Informe o 2° Número:"));

soma = n1+n2;
subtracao = n1-n2;
produto = n1*n2;
divisao = n1/n2;
restoDivisao = n1%n2;

alert("A Soma é igual a: "+soma+
    "\nA Subtração do 1° pelo 2° é: "+ subtracao +
    "\nO Produto é igual a: "+produto+
    "\nA Divisão do 1° pelo 2° é: "+divisao+
    "\nO Resto da Divisão é: "+restoDivisao
)