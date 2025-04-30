function maior(){
    var n1, n2, n3;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    n3 = document.getElementById("num3").value;

    var maior = Math.max(n1, n2, n3);

    let s = document.getElementById("Maior");
    s.innerHTML = maior;
}
