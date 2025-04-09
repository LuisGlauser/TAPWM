
    let num2, resultado;
    num2 = Math.random();

    if(num2 < 0.33){
        alert("Pedra");
    } 
    if(num2 > 0.33 && num2 < 0.66){
        alert("Tesoura");
    }
    if(num2 > 0.66){
        alert("Papel");
    }
