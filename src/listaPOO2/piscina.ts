let tecla= require("readline-sync");

// Leitura da altura e do raio da piscina
let altura: number = tecla.questionFloat("Digite a altura da piscina (em metros): ");
let raio: number = tecla.questionFloat("Digite o raio da piscina (em metros): ");

// Volume da piscina em metros cúbicos (fórmula do cilindro: V = π * r² * h)
let volumeMetrosCubicos = Math.PI * Math.pow(raio, 2) * altura;

// Conversão de metros cúbicos para litros (1 m³ = 1000 litros)
let volumeLitros = Math.ceil(volumeMetrosCubicos * 1000);

console.log(`A quantidade de água necessária para encher a piscina é: ${volumeLitros} litros.`);
