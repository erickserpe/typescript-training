/*Exercício 6
TORNEIO – Leia a pontuação dos cinco finalistas de um torneio de videogame (números inteiros e
não estarão em ordem). Apresente a pontuação do primeiro e do último colocado*/ 
 
 let tecl1 = require("readline-sync");

// Leitura das pontuações dos cinco finalistas
let pontuacoes: number[] = [];
for (let i = 0; i < 5; i++) {
  pontuacoes[i] = tecl1.questionInt(`Digite a pontuação do finalista ${i + 1}: `);
}

// Cálculo da maior e menor pontuação
let maiorPontuacao = Math.max(...pontuacoes);
let menorPontuacao = Math.min(...pontuacoes);

console.log(`A maior pontuação é: ${maiorPontuacao}`);
console.log(`A menor pontuação é: ${menorPontuacao}`);
