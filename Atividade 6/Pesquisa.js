let totalPessoas = 0,
    mediaIdade = 0,
    qtdeHomem = 0,
    qtdeMulher = 0,
    qtdeOutros = 0,
    qtdePessimo = 0,
    qtdeRegular = 0,
    qtdeBom = 0,
    qtdeOtimo = 0,
    maisVelho = 0,
    maisNovo = Infinity;

    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const idade = parseInt(document.getElementById('idade').value);
    
        const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
        const opiniao = document.querySelector('input[name="opniao"]:checked')?.value;
    
        if (!sexo || !opiniao || isNaN(idade)) {
            alert("Preencha todos os campos!");
            return;
        }
    
        totalPessoas++;
        mediaIdade += idade;
    
        maisVelho = Math.max(idade, maisVelho);
        maisNovo = Math.min(idade, maisNovo);
    
        // Contador de opinião
        switch (opiniao) {
            case "pessimo": qtdePessimo++; break;
            case "regular": qtdeRegular++; break;
            case "bom": qtdeBom++; break;
            case "otimo": qtdeOtimo++; break;
        }
    
        // Contador de sexo
        if (sexo === "masculino") {
            qtdeHomem++;
        } else if (sexo === "feminino") {
            qtdeMulher++;
        } else {
            qtdeOutros++;
        }
    
        // Atualiza o HTML com os dados coletados
        document.getElementById("mediaIdade").textContent = (mediaIdade / totalPessoas).toFixed(2);
        document.getElementById("maiorIdade").textContent = maisVelho;
        document.getElementById("menorIdade").textContent = maisNovo;

        document.getElementById("qtdeHomem").textContent = qtdeHomem;
        document.getElementById("qtdeMulher").textContent = qtdeMulher;
        document.getElementById("qtdeOutros").textContent = qtdeOutros;

        document.getElementById("totalPessoas").textContent = totalPessoas;
        document.getElementById("qtdePessimo").textContent = qtdePessimo;
        document.getElementById("qtdeRegular").textContent = qtdeRegular;
        document.getElementById("qtdeBom").textContent = qtdeBom;
        document.getElementById("qtdeOtimo").textContent = qtdeOtimo;
    
        graficoOpiniao.data.datasets[0].data = [qtdePessimo, qtdeRegular, qtdeBom, qtdeOtimo];
        graficoOpiniao.update();

        // Limpa os campos após envio
        event.target.reset();
    });

    const ctxOpiniao = document.getElementById('graficoOpiniao').getContext('2d');
    const graficoOpiniao = new Chart(ctxOpiniao, {
        type: 'pie', // pode ser 'pie', 'doughnut', etc
        data: {
          labels: ['Péssimo', 'Regular', 'Bom', 'Ótimo'],
          datasets: [{
            label: 'Opiniões do público',
            data: [qtdePessimo, qtdeRegular, qtdeBom, qtdeOtimo],
            backgroundColor: ['#f87171', '#facc15', '#60a5fa', '#34d399']
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
      