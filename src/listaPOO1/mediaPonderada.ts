/*Exercício 2
MÉDIA PONDERADA – Leia as notas de quatro avaliações e calcule a média ponderada, sabendo-se
que os pesos são respectivamente: 1, 2, 3 e 4.
*/
let teclado = require("readline-sync");

function médiaPonderada(nota1: number, nota2: number, nota3: number, nota4: number): number {
  // Calcula a média ponderada
  let média = (nota1 * 1 + nota2 * 2 + nota3 * 3 + nota4 * 4) / (1 + 2 + 3 + 4);
  return média;
}

// Solicita ao usuário que insira as notas
let nota1 = parseFloat(teclado.question("Insira a nota 1: "));
let nota2 = parseFloat(teclado.question("Insira a nota 2: "));
let nota3 = parseFloat(teclado.question("Insira a nota 3: "));
let nota4 = parseFloat(teclado.question("Insira a nota 4: "));

// Calcula e exibe a média ponderada
let resultado = médiaPonderada(nota1, nota2, nota3, nota4);
console.log("A média ponderada é: " + resultado);


2
