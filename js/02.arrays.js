'use strict';

/* Vetor */

// Declarando um array de alunos
const alunos = ["Wilian", "Vinicius", "Marli", "Duda", "Gabriel"];

// Exibindo a estrutura do array (somente no console)
console.log(alunos);

// Acessando individualmente alguns alunos
console.log(alunos[1]); // Vinicius
console.log(alunos[3]); // Duda
console.log(alunos[0]); // Wilian

/* Exercício */
const favoritos = ["Volei", "Rock", "BlackSabbath", "Viajar", "Pintar", "Desenhar", "Verde", "Pão de Mel"]

console.log(favoritos);

console.log(favoritos[2]);
console.log(favoritos[5]);
console.log(favoritos[7]);

console.log(`Minha banda de rock favorita é ${favoritos[2]}`);
console.log(`Minha maior paixão é ${favoritos[5]}`);
console.log(`Meu doce favorito é ${favoritos[7]}`);

/* MATRIZ (array com mais de uma dimensão) */
const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["PHP", "Node.Js", "SQL", "Python", "Firebase"]
];

console.log(tecnologias[0][1]); // CSS3
console.log(tecnologias[1][3]); // Python