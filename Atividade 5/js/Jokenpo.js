let vitoriasMaquina = 0;
        let vitoriasJogador = 0;

        function jogar(escolhaJogador) {
            const opcoes = ["pedra", "papel", "tesoura"];
            const escolhaMaquina = Math.floor(Math.random() * 3);

            const resultadoTextoMaquina = `A Máquina escolheu ${opcoes[escolhaMaquina]}.`;

            let resultadoPartida = "";

            if (escolhaJogador === escolhaMaquina) {
                resultadoPartida = "Empate!";
            } else if (
                (escolhaJogador === 0 && escolhaMaquina === 1) || // Pedra vs Papel (Máquina ganha)
                (escolhaJogador === 1 && escolhaMaquina === 2) || // Papel vs Tesoura (Máquina ganha)
                (escolhaJogador === 2 && escolhaMaquina === 0)    // Tesoura vs Pedra (Máquina ganha)
            ) {
                resultadoPartida = "A Máquina ganhou!";
                vitoriasMaquina++;
            } else {
                resultadoPartida = "Você ganhou!";
                vitoriasJogador++;
            }

            alert(`${resultadoTextoMaquina} ${resultadoPartida}`);

            document.getElementById("vitorias-maquina").textContent = vitoriasMaquina;
            document.getElementById("vitorias-jogador").textContent = vitoriasJogador;
        }