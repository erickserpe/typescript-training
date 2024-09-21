/* Exercício 4
ÂNGULO – Leia um número real que denota um ângulo (em graus). Feito isso, calcule e exiba:
(a) O ângulo correspondente menor que 360º. Por exemplo, o ângulo de 1.090º perfaz três voltas
completas e corresponde ao ângulo de 10º;
(b) O ângulo em radianos. Use a constante PI predefinida; e
(c) O seno, o cosseno e a tangente desse ângulo.*/

let tecl = require("readline-sync");

// Leitura do ângulo em graus
let angulo: number = tecl.questionFloat("Digite um ângulo em graus: ");

// (a) Cálculo do ângulo correspondente menor que 360º
let anguloMenor360 = angulo % 360;
if (anguloMenor360 < 0) {
  anguloMenor360 += 360;
}
console.log(`O ângulo correspondente menor que 360º é: ${anguloMenor360}º`);

// (b) Conversão para radianos
let anguloEmRadianos = (anguloMenor360 * Math.PI) / 180;
console.log(`O ângulo em radianos é: ${anguloEmRadianos.toFixed(4)}`);

// (c) Cálculo do seno, cosseno e tangente
let seno = Math.sin(anguloEmRadianos);
let cosseno = Math.cos(anguloEmRadianos);
let tangente = Math.tan(anguloEmRadianos);

// Exibição dos resultados
console.log(`Seno: ${seno.toFixed(4)}`);
console.log(`Cosseno: ${cosseno.toFixed(4)}`);
console.log(`Tangente: ${tangente.toFixed(4)}`);
