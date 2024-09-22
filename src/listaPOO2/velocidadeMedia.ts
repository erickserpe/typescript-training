/*Exercício 10
VELOCIDADE MÉDIA - Leia uma distância (em quilômetros) e o tempo transcorrido (em horas).
Calcule e retorne a velocidade média atingida. Justifique o que acontece se o tempo digitado for zero.*/

let tecl4 = require("readline-sync");

// Leitura da distância e tempo
let distancia: number = tecl4.questionFloat("Digite a distância percorrida (em km): ");
let tempo: number = tecl4.questionFloat("Digite o tempo transcorrido (em horas): ");

// Verificação se o tempo é zero
if (tempo === 0) {
  console.log("Erro: O tempo não pode ser zero, pois a divisão por zero é indefinida.");
} else {
  // Cálculo da velocidade média
  let velocidadeMedia = distancia / tempo;
  console.log(`A velocidade média é: ${velocidadeMedia.toFixed(2)} km/h`);
}
