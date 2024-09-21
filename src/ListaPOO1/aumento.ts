/* Exercício 6
AUMENTO – Leia o valor de um salário, calcule e exiba-o reajustado, considerando um aumento de
12,5%.*/

let teclado6 = require("readline-sync");

let salarioBruto: number = 0,
   salarioLiquido: number = 0;

console.log("digite seu salario: ");
salarioBruto = teclado6.questionFloat();

salarioLiquido = salarioBruto * 1.125;

console.log("seu salario com aumento: ", salarioLiquido);
    