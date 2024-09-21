/*Exercício 5
DESCONTO – Leia o preço de um produto, calcule e exiba o valor final, considerando desconto de
35%.
*/
let teclado5 = require("readline-sync");

let produto: number = 0,
    produtoComDesconto: number = 0;

console.log("Digite o preço do produto:");
produto = teclado5.questionFloat();

produtoComDesconto = produto * 0.65;

console.log(produtoComDesconto);

