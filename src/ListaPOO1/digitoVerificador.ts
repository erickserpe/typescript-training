/* 
Exercício 10
DÍGITO VERIFICADOR – Leia o número de uma conta corrente, que tem até seis dígitos
(desnecessária a validação). Calcule o dígito verificador dessa conta corrente, de acordo com o
seguinte algoritmo:
– Multiplique cada dígito pela respectiva posição, da esquerda para a direita;
– Some os resultados das multiplicações;
– Calcule o resto da divisão dessa soma por 10;
– Subtraia esse valor de 10.
– Assuma o resultado como dígito verificador da conta.
Exemplo para a conta 789123:
 7 8 9 1 2 3 = número da conta
 | | | | | |
x1 x2 x3 x4 x5 x6
 | | | | | |
=7 =16 =27 =4 =10 =18 -> soma = 82
 resto da divis˜ão de 82 por 10 = 2
 dígito verificador = (10 – 2) = 8
A conta, com o dígito verificador, será: 789123-8.
Referência
LOPES, Anita; GARCIA, GUTO. Variável, Expressões, Funções, Atribuição, Entrada e Saída. In:
______. Introdução à Programação: 500 algoritmos resolvidos. Rio de Janeiro: Elsevier, 2002. Cap.
2. p. 6-59.
Como Citar
Todos os exercícios desta lista são autorais.
MASCHIO, Eleandro. Exercícios: Introdução aos Aplicativos TypeScript – Entrada, Saída e
Atribuição. Guarapuava: Universidade Tecnológica Federal do Paraná, 2023. 2 p. Material didático
da disciplina de Fundamentos de Programação.*/



let teclado10= require("readline-sync");
 let conta: number = 0,
     d1: number = 0,
     d2: number = 0,
     d3: number = 0,
     d4: number = 0,
     d5: number = 0,
     d6: number = 0,
     resto: number = 0,
     soma: number = 0,
   verificador: number = 0;

console.log("Digite o número da conta:");
conta = teclado10.questionInt();

d1 = Math.trunc(conta / 100000);
resto = conta % 100000;

d2 = Math.trunc(resto / 10000);
resto = resto % 10000;

d3 = Math.trunc(resto / 1000);
resto = resto % 1000;

d4 = Math.trunc(resto / 100);
resto = resto % 100;

d5 = Math.trunc(resto / 10);
resto = resto % 10;
d6 = resto;

soma = d1 * 1 + d2 * 2 + d3 * 3 + d4 * 4 + d5 * 5 + d6 * 6;

resto = soma % 10;
verificador = 10 - resto;
console.log("O número do verificador é:", verificador);


   

   