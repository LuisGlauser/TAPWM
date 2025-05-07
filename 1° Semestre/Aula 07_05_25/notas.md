# Aula 07/05/2025
## Arrays
- Armazenam dados (Podem ser iguais ou diferentes)
- da pra por algo como (número, string, boleano, objeto)
- No javascript ele pode aumentar um array, ao inserir
  
  ```
  for(i = 8; i > 5; i--){
    aux = v[i]; //aux tem o valor de i
    v[i] = v[8 - 1 + 1]; //a posição i do vetor fica com o valor da posição (8-i+1), no 1° teste a posição 8 tem o valor da posição 1 (8 - 8 +1)
    v[8 - i + 1] = aux; //A posição fica com o valor da posição inicial
  }
  v[3] = v[1]; //A posição 3 fica com o valor da posição 1
  v[v[3]] = v[v[2]]; //o indice do v é o valor do item na posição v[3], e essa posição ficara com o valor do indice de v na posição de v[2]
  ```
