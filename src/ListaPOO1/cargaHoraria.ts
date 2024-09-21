/*Exercício 3
CARGA-HORÁRIA – Leia a carga-horária de um curso, informada em horas-aulas (50 minutos).
Calcule e exiba a carga-horária em horas-relógio (60 minutos)*/

let teclado2 = require("readline-sync");

let cargaHoraria: number = 0,
    cargaHorariaRel: number = 0,
    horaAula: number = 50,
    horaRel: number = 60;

console.log("Digite a carga horária do curso em horas-aulas :"),
cargaHoraria = teclado2.questionInt();

cargaHorariaRel = cargaHoraria * horaRel / horaAula;
console.log("A carga horária do curso em horas-relógio é de :", cargaHorariaRel)