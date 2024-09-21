/*Exercício 1
REFRIGERANTES – Leia a quantidade de pessoas que confirmaram presença em uma
confraternização. Considere que cada pessoa bebe, em média, 300ml de refrigerante e que cada
garrafa da bebida tem 2l. Identifique as constantes e fixe-as no código. Calcule e exiba quantas
garrafas devem ser compradas. */

let teclado11 = require("readline-sync");

let pessoas: number = 0,
    garrafas: number = 0;

const volume: number = 2000,
      consumo: number = 300;

console.log("Digite a quantidade de pessoas que confirmaram presença no role: ");
pessoas = teclado11.questionInt();

garrafas = Math.ceil(pessoas * consumo / volume);
console.log("A quantidade de garrafas que devem ser compradas é: " + garrafas);


