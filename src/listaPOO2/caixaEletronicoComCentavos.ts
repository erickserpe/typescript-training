/* Exercício 3
CAIXA ELETRÔNICO COM CENTAVOS – Idem ao anterior, mas considere que o valor11 lido será um
número real com duas casas decimais. Estude o método Number.toFixed().
*/

let teclado13 = require("readline-sync");

let valor1: number = 0,
  notas: number = 0,
  moedas: number = 0,
  resto2: number = 0;

console.log("Digite o valor1:");
valor1 = teclado13.questionFloat();

// Convertendo o valor1 para centavos para facilitar o cálculo
valor1 = Number((valor1 * 100).toFixed(0));

// Notas de R$100,00
notas = Math.trunc(valor1 / 10000);
resto2 = valor1 % 10000;
console.log(notas + " nota(s) de R$ 100,00");

// Notas de R$50,00
notas = Math.trunc(resto2 / 5000);
resto2 = resto2 % 5000;
console.log(notas + " nota(s) de R$ 50,00");

// Notas de R$20,00
notas = Math.trunc(resto2 / 2000);
resto2 = resto2 % 2000;
console.log(notas + " nota(s) de R$ 20,00");

// Notas de R$10,00
notas = Math.trunc(resto2 / 1000);
resto2 = resto2 % 1000;
console.log(notas + " nota(s) de R$ 10,00");

// Notas de R$5,00
notas = Math.trunc(resto2 / 500);
resto2 = resto2 % 500;
console.log(notas + " nota(s) de R$ 5,00");

// Notas de R$2,00
notas = Math.trunc(resto2 / 200);
resto2 = resto2 % 200;
console.log(notas + " nota(s) de R$ 2,00");

// Moedas de R$1,00
moedas = Math.trunc(resto2 / 100);
resto2 = resto2 % 100;
console.log(moedas + " moeda(s) de R$ 1,00");

// Moedas de R$0,50
moedas = Math.trunc(resto2 / 50);
resto2 = resto2 % 50;
console.log(moedas + " moeda(s) de R$ 0,50");

// Moedas de R$0,25
moedas = Math.trunc(resto2 / 25);
resto2 = resto2 % 25;
console.log(moedas + " moeda(s) de R$ 0,25");

// Moedas de R$0,10
moedas = Math.trunc(resto2 / 10);
resto2 = resto2 % 10;
console.log(moedas + " moeda(s) de R$ 0,10");

// Moedas de R$0,05
moedas = Math.trunc(resto2 / 5);
resto2 = resto2 % 5;
console.log(moedas + " moeda(s) de R$ 0,05");

// Moedas de R$0,01
moedas = resto2;
console.log(moedas + " moeda(s) de R$ 0,01");
