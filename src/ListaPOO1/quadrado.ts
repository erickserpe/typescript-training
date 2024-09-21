/* Exercício 8
QUADRADO – Leia um número inteiro, calcule e exiba o seu quadrado*/


let teclado8 = require("readline-sync");

let numero: number = 0,
    saida: number = 0;

console.log("digite um numero inteiro");
numero = teclado8.questionInt();

saida = numero * numero;

console.log("quadrado: ", saida);
