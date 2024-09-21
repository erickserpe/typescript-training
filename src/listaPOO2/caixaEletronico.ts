/* Exercício 2
CAIXA ELETRÔNICO – Leia um número inteiro referente ao valor de um saque em reais (R$).
Apresente a composição desse valor pelas notas e moeda existentes. Sempre opte primeiro por
notas de maior valor. Obedeça o comportamento e as mensagens de saída do exemplo.
Digite o valor do saque: 383 <enter>
Dinheiro retirado:
3 nota(s) de R$ 100
1 nota(s) de R$ 50
1 nota(s) de R$ 20
1 nota(s) de R$ 10
0 nota(s) de R$ 5
1 nota(s) de R$ 2
1 moeda(s) de R$ 1
*/ 

let teclado12 = require("readline-sync");

let valor: number = 0,
  nota100: number = 0,
  nota50: number = 0,
  nota20: number = 0,
  nota10: number = 0,
  nota5: number = 0,
  nota02: number = 0,
  moeda1: number = 0,
  resto1: number = 0;

console.log("Digite o valor do saque:");
valor = teclado12.questionInt();

nota100 = Math.trunc(valor / 100);
resto1 = valor % 100;

nota50 = Math.trunc(resto1 / 50);
resto1 = resto1 % 50;

nota20 = Math.trunc(resto1 / 20);
resto1 = resto1 % 20;

nota10 = Math.trunc(resto1 / 10);
resto1 = resto1 % 10;

nota5 = Math.trunc(resto1 / 5);
resto1 = resto1 % 5;

nota02 = Math.trunc(resto1 / 2);
resto1 = resto1 % 2;

moeda1 = resto1;

console.log("Dinheiro retirado:");
console.log(nota100 + " nota(s) de R$ 100");
console.log(nota50 + " nota(s) de R$ 50");
console.log(nota20 + " nota(s) de R$ 20");
console.log(nota10 + " nota(s) de R$ 10");
console.log(nota5 + " nota(s) de R$ 5");
console.log(nota02 + " nota(s) de R$ 2");
console.log(moeda1 + " moeda(s) de R$ 1");
