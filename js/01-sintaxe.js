/* Habilitando o modo estrito da linguagem. Ao fazer isso, a linguagem passa a analisar se você declarou variáveis e não está usando palavras-reservadas. Se isso acontecer, erros serão exibidos */
'use strict'

// Comentário de APENAS uma linha (CTRL :)
/* Comentário de Múltiplas linhas (SHIFT+ALT+A) */

// Comando de saída de dados
console.log("Hello World!");

/* Manipulação de Dados */

// Variáveis
let curso = "HTML5 e CSS3"; // string, literal (entre aspas)  
let ano = 2024; // números (inteiro/real), sem aspas

// Declarando variável sem valor definido
let disciplina;
console.log(disciplina);

// Atribuindo valor APÓS declarar variável
disciplina = "Lógica";
console.log(disciplina);

// Constantes (valores fixos, não podem ser modificados)
const escola = "Senac Penha";

// Constantes Sempre devem ter valor
const materia = "Português"

// Saída de Dados
console.log(curso);
console.log(ano); 
console.log(escola);

/* digitar a palavra "log" para ser mais rápido */

/* Criando variável sem declaração let */
// nomeDaVariavel = "Algum Valor";
// console.log(nomeDaVariavel);

// /* Palavras-chaves de uso reservado: public, implements, private, arguments */
// let public = "Palavra-reservada";
// console.log(public);

/* Saída de dados personalizados */

/* Estou fazendo o curso de HTML5 e CSS3 no Senac Penha */

// CONCATENAÇÃO (forma mais antiga/tradicional)
console.log("Estou fazendo o curso de "+curso+ " no "+escola+ ".");

// TEMPLATE LITERAL/STRING (forma mais moderna, usando crase)
console.log(`Estou fazendo o curso de ${curso} no ${escola}.`);

// Montando a frase antes de dar saída nela
let mensagem = `Estou fazendo o curso de ${curso} no ${escola}.`;

// Dando saída nela
console.log(mensagem);

/* Operações Matemáticas */
let valor1 = 10; // inteiro
let valor2 = 5; // inteiro
let valor3 = 1200.55; // decimal/quebrado usando . para cada decimal

// Operações 
let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

console.log("Soma: "+soma);
console.log("Subtração: "+subtracao);
console.log("Multiplicação: "+multiplicacao);
console.log("Divisão: "+divisao);