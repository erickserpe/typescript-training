/* Exercício 7
TROCA DE VALORES – Leia dois números inteiros, a e b, e faça com que eles troquem os valores
entre si. Exiba os valores de a e b. Não se deve apenas alterar a ordem de exibição.*/

let teclado7 = require("readline-sync");

let a: number = 0,
    b: number = 0,
    c: number = 0;

console.log("escreva o valor de a: ");
a = teclado7.questionInt();

console.log(" digite o valor de b: ");
b = teclado7.questionInt();

c = a;
a = b;
b = c;

console.log("valor de a: ", a);
console.log("valor de b: ", b);