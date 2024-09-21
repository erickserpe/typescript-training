/*Exercício 4
PERCENTUAL DE LEITURA – Leia a página atual e a quantidade de páginas de um livro. Calcule e
exiba o percentual de leitura concluído.*/

let teclado4= require("readline-sync");

let paginaAtual: number = 0,
    qtdPaginas: number = 0,
    percentual: number = 0;

console.log("Digite a página atual:");
paginaAtual = teclado4.questionInt();
console.log("Digite a quantidade de páginas:");
qtdPaginas = teclado4.questionInt();

percentual = (paginaAtual / qtdPaginas) * 100;
console.log("Percentual de leitura concluído: " + percentual + "%");
