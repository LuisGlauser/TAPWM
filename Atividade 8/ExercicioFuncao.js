function maior(){
    event.preventDefault();
    var n1, n2, n3;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    n3 = document.getElementById("num3").value;

    var maior = Math.max(n1, n2, n3);

    let s = document.getElementById("Maior");
    s.innerHTML = maior;
}

function crescente(){
    event.preventDefault();
    let n1 = 0, n2 = 0, n3 = 0;
    let primeiro = 0, segundo = 0, terceiro = 0;
    n1 = parseInt(document.getElementById("crs1").value);
    n2 = parseInt(document.getElementById("crs2").value);
    n3 = parseInt(document.getElementById("crs3").value);

    primeiro = Math.max(n1, n2, n3);
    terceiro = Math.min(n1, n2, n3);
    segundo = (n1+n2+n3)-(primeiro+terceiro);

    document.getElementById("crsMaior").innerHTML = primeiro;
    document.getElementById("crsMeio").innerHTML = segundo;
    document.getElementById("crsMenor").innerHTML = terceiro;
}

function ehPalindromo(){
    event.preventDefault();
    let palavra, palavra2, a1;
    let ehPalindromo = true;
    palavra = document.getElementById("palindromo").value;
    palavra2 = palavra.replace(/ /g, "")
    palavra2 = palavra2.toLowerCase();
    a1 = Array.from(palavra2);
    
    for(i = 0, j = a1.length; i < a1.length; i++, j--){
        if(a1[i] != a1[j-1]){
            ehPalindromo = false;
        }
    }

    if(ehPalindromo == true){
        document.getElementById("palavra").innerHTML = palavra;
        document.getElementById("ehPalindromo").innerHTML = "é um palíndromo"

    } else {
        document.getElementById("palavra").innerHTML = palavra;
        document.getElementById("ehPalindromo").innerHTML = "não é um palíndromo"
    }
}

function verificarSubconjunto(){
    event.preventDefault();
    let palavra1, palavra2, ehSubconjunto;
    ehSubconjunto = true;
    palavra1 = document.getElementById("palavra1").value;
    palavra2 = document.getElementById("palavra2").value;

    if(palavra2.includes(palavra1)){
        document.getElementById("r1").innerHTML = palavra1;
        document.getElementById("r2").innerHTML = "é um subconjunto de ";
        document.getElementById("r3").innerHTML = palavra2;
    } else {
        document.getElementById("r1").innerHTML = palavra1;
        document.getElementById("r2").innerHTML = "não é um subconjunto de ";
        document.getElementById("r3").innerHTML = palavra2;
    }

}