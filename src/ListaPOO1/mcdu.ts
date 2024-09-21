/* Exercício 9
MCDU – Leia um número inteiro positivo de até quatro dígitos. Mostre, separadamente (uma por
linha): unidades de milhar, centenas, dezenas e unidades desse número. Assuma que nenhum
número maior, ou negativo, será digitado.*/

let teclado9 = require("readline-sync");

let numero1: number = 0,
    milhar: number = 0,
    centena: number = 0,
    dezena: number= 0,
    unidade: number= 0;

console.log("digite um numero");
numero1 = teclado9.questionInt();

milhar = Math.floor(numero1 / 1000);
centena = Math.floor((numero1 % 1000) / 100);
dezena = Math.floor((numero1 % 100) / 10);
unidade = Math.floor(numero1 % 10);
console.log("milhar: " + milhar);
console.log("centena: " + centena);
console.log( "dezena: " + dezena);
console.log("unidade: " + unidade);

 