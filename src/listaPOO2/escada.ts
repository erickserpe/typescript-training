/*Exercício 7
ESCADA – Conforme o exemplo da figura abaixo, leia a altura do prédio e a distância de afastamento
da escada. Calcule e exiba o comprimento mínimo que a escada deve ter para alcançar o topo do
prédio*/  

let tecl2 = require("readline-sync");

// Leitura da altura do prédio e da distância de afastamento
let alturaPredio: number = tecl2.questionFloat("Digite a altura do prédio (em metros): ");
let distanciaAfastamento: number = tecl2.questionFloat("Digite a distância de afastamento da escada (em metros): ");

// Cálculo do comprimento da escada (Pitágoras: escada² = altura² + afastamento²)
let comprimentoEscada = Math.sqrt(Math.pow(alturaPredio, 2) + Math.pow(distanciaAfastamento, 2));

console.log(`O comprimento mínimo da escada é: ${comprimentoEscada.toFixed(2)} metros.`);
