var idade = 0, genero, opiniao, mediaIdade = 0, qtdeHomem = 0, qtdeMulher = 0, qtdeOutros = 0, qtdePessimo = 0, qtdeBom = 0, maisVelho = 0, maisNovo = 0;


for(i = 0; i < 5; i++){
    idade = prompt("Diga sua Idade")
    prompt("Informe ")
    prompt(opiniao)

    mediaidade = mediaIdade+mediaIdade

    maisVelho = Math.max(idade, maisVelho)
    maisNovo = Math.min(idade, maisNovo)

    if(opiniao == "péssimo"){
        qtdePessimo++
    }
    if(opiniao == "bom" || opiniao == "ótimo"){
        qtdeBom++
    }

    if(genero == "Homem"){
        qtdeHomem++
    }

    if(genero == "Mulher"){
        qtdeMulher++
    }

    if(genero != "Homem" && genero !="Mulher"){
        qtdeOutros++
    }
}

alert(
    `Média Idade: ${mediaIdade/5}\n`+
    `Idade pessoa mais velha: ${maisVelho}\n`+
    `Idade pessoa mais nova: ${maisNovo}\n`+
    `Pessoas que acharam Péssimo: ${qtdePessimo}\n`+
    `Pessoas que acharam Bom ou Ótimo: ${qtdeBom}\n`+
    `Número de Homens: ${qtdeHomem}\nNúmero de Mulheres: ${qtdeMulher}\nNúmero de Outros: ${qtdeOutros}`
)
