// @author Luís Felipe Glauser Lucas
// @date 2025-04-29

function verificarTipoTriangulo(){
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        alert("Por favor, insira valores válidos para os lados do triângulo.");
        return;
    }

    if( lado1 == lado2 && lado1 == lado3){
        document.getElementById("resultado").innerHTML = "Triângulo Equilátero";
        document.getElementById("resultado2").innerHTML = "Um triângulo equilátero possui os três lados com a mesma medida de comprimento.";
    }else if( lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        document.getElementById("resultado").innerHTML = "Triângulo Isósceles";
        document.getElementById("resultado2").innerHTML = "Um triângulo isósceles possui dois lados com a mesma medida de comprimento. Por consequência, dois ângulos iguais.";
    } else if( lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        document.getElementById("resultado").innerHTML = "Triângulo Escaleno";
        document.getElementById("resultado2").innerHTML = "Um triângulo é escaleno quando seus três lados possuem medidas de comprimento diferentes";
    } else{
        document.getElementById("resultado").innerHTML = "Não é um triângulo";
        document.getElementById("resultado2").innerHTML = "";
    }
}