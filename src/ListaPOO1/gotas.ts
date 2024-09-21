/*Exercício 1
GOTAS – Leia a quantidade de uma solução em mililitros. Converta e exiba essa mesma quantidade
em gotas. Para essa solução, assuma que uma gota equivale a 0,05ml (ou seja, 1ml corresponde a
20 gotas).*/

/* PRIMEIRA COISA É IMPORTA UM TECLADO*/

let teclado1 = require("readline-sync");

const mls: number = 0.05; /* define a constante mls*/

let total: number = 0,/* define a variavel ml*/
  gotas: number = 0; /* define a variavel gotas*/

console.log("Digite a quantidade de ml:");

total = teclado1.questionInt();

gotas = total / mls;

console.log("A quantidade de gotas é: ");
console.log(gotas);
