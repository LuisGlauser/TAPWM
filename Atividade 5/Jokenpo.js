    function jokenpo(escolha){
        let num2, resultado = 0;
        num2 = Math.random()*3;
        num2 = Math.floor(num2);
        // 0 = pedra, 1 = papel, 2 = tesoura

        switch(num2){
            case 0:
                alert("A Máquina escolheu Pedra");
                break;
            case 1:
                alert("A Máquina escolheu Papel");
                break;
            case 2:
                alert("A Máquina escolheu Tesoura");
                break;
        }

        //maquina escolheu pedra
        if (num2 == 0 && escolha == 1){
            resultado = 1;
        } else if(num2 == 0 && escolha == 2){
            resultado = 2;
        }

        //maquina escolheu papel
        if (num2 == 1 && escolha == 0){
            resultado = 2;
        } else if(num2 == 1 && escolha == 2){
            resultado = 1;
        }

        //maquina escolheu tesoura
        if (num2 == 2 && escolha == 0){
            resultado = 1;
        } else if(num2 == 2 && escolha == 1){
            resultado = 2;
        }

        //resultado
        if(resultado == 1){
            alert("Você ganhou!");
            
        }
        if(resultado == 2){
            alert("A Máquina ganhou!");
        }
        if(resultado == 0){
            alert("Deu Empate!");
        }

    }
