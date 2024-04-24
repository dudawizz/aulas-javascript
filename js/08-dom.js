'use script'

/* Funções ou métodos mais comuns para seleção de elementos no DOM

-getElementById() (apenas um elemento)
Selecionar um elemento através do atributo ID

-querySelector()
Seleciona UM ELEMENTO também através de seletor na lógica CSS

-querySelectorAll()
Seleciona VÁRIOS ELEMENTOS também através de seletor(es) na lógica CSS

*/

// Exemplo 1: getElementyById()
const legenda = document.getElementById("legenda");
console.log(legenda);

// Exemplo 2: querySelector()
const titulo = document.querySelector("h1")
console.log(titulo);

const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

/* Mini-exercício
1)Faça o acesso/seleção do h2 de Back-End e mostre no console.

2)Faça o acesso/seleção apenas no h2 existente dentro da div com a classe 'editores' e mostre no console.
*/

const backEnd = document.querySelector(".back-end");
console.log(backEnd);

/* tag: {}
classe: .
id: #
*/

const codigo = document.querySelector(".editores h2");
console.log(codigo);

// Exemplos 3: querySelectorAll() obs: parecido com um array
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[0]);

const variosElementos = document.querySelectorAll("p, a, p b, #teste, .xyz");
console.log(variosElementos);

/*  */