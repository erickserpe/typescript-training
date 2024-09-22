/*Exercício 8
JUROS COMPOSTOS – Leia o valor investido em uma aplicação, a taxa de juros (ao mês, em
percentual) e a quantidade de meses transcorridos. Exiba o montante depois de transcorrido o tempo,
considerando duas casas decimais depois da vírgula. Use o método Number.toFixed().*/

let tecl3 = require("readline-sync");

// Leitura do valor investido, taxa de juros e número de meses
let valorInvestido: number = tecl3.questionFloat("Digite o valor investido: ");
let taxaJuros: number = tecl3.questionFloat("Digite a taxa de juros ao mês (em %): ");
let meses: number = tecl3.questionInt("Digite a quantidade de meses: ");

// Fórmula de juros compostos: M = P * (1 + i)^n
let montante = valorInvestido * Math.pow((1 + taxaJuros / 100), meses);

console.log(`O montante após ${meses} meses é: R$ ${montante.toFixed(2)}`);
