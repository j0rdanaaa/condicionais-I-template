/*
// exercício 1 | condição simples

const velocidade = 100
console.log(`A sua velocidade é ${velocidade}km/h.`)

if (velocidade >80){
console.log(`Você está acima da velocidade máxima permitida. TEJE MULTADE!`)
}

// exercício 2 | condição composta

const estaChovendo = true

if (estaChovendo === true) {
console.log(`Ai as minhas roupas tudo no varal!`)
}
else{
    console.log(`Hmmm, vitamina D, solzinho, bóra rolezar`)

}
*/

//Prática guiada 1

const booleano1 = false
const booleano2 = true
/*
if (booleano1) {
    alert(`Booleano 1 é TRUE.`)
    } else {
        alert(`Booleno 1 é FALSE.`)
    }
*/
    //Prática guiada 1 - b
/*
const booleano3 = true

if(booleano1 === booleano2) {
  alert(`Booleano 1 e booleano 2 são IGUAIS!`)
} else if(booleano2 === booleano3){
  alert(`Booleado 2 e booleano 3 são IGUAIS!`)
} else if (booleano1 === booleano3){
  alert(`Booleano 1 e booleano 3 são IGUAIS!`)
 } else {
  alert(`Não existem valores iguais!`)
    }

    //Prática guiada 2

    const idade = 33

    if (idade < 16) {
        console.log(`Você NÃO pode votar!`)
    } else if (idade < 18 || idade >= 70) {
        console.log(`Você PODE votar! - facultativo`)
    } else if (idade >= 18) {
        console.log(`Você DEVE votar!`)
    } else {
        console.log(`Dado inválido`)
    }
*/
    // exercício de fixação
   /* Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10
Crie um if que verifica se a média é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada
Adicione um else que imprime que a pessoa foi reprovada se a condição não for atendida
Adicione um else if antes de reprovar, que verifica se a média é maior ou igual a 3. Caso seja, imprima “Recuperação”.
Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir“Estudante reprovade”.
Adicione um último else, que imprima “dado inválido” caso nenhuma das condições anteriores seja atendida.*/

 const media = 10

 if (media >= 5) {
 console.log(`Você foi aprovado!`)
 } else if(media >= 3){
 console.log(`Estudante em recuperação!`)
 } else if (media < 3){
 console.log(`Estudante REPROVADE!`)
 } else {
 console.log(`Dados inválido!`)
}


