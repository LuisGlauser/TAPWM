function Array3num(){
    let soma, q1, q2;
    let numeros = new Array(parseInt(document.getElementById("nmr1").value), parseInt(document.getElementById("nmr2").value), parseInt(document.getElementById("nmr3").value));

    soma = numeros[0]+numeros[1]+numeros[2];
    q1 = numeros[0]*numeros[0];
    q2 = numeros[1]*numeros[1];

    alert("A Soma dos três números é: " + soma + "\n" +
        "O Quadrado do 1° número é: " + q1 + "\n" +
        "O Quadrado do 2° número é :" + q2 + "\n"
    );
}

function letras(){
    let palavra;
    palavra = document.getElementById("palavra").value;
    let c = palavra.split('');
    let palavras = new Array(10);

    

    for(i = 0; i < 10; i++){
        c = palavra.split('');
        let aux;
        if(i < 6){
            aux = c.pop();
            c = c.unshift(c[i]);
        } else {
            aux = c.shift();
            c = c.push(c[i]);
        }

        aux = c.join('');

        if(!palavra.includes(aux)){
            palavras[i] = aux
        }
    }
    alert(palavras);
    alert(c.join(''));
}