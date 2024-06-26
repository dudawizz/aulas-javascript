'use strict'

// Sintaxe 1: função anônima
const exemplo1 = function(){ 
    console.log("Função anônima");
};

// Chamando/invocando a função
exemplo1();

// Sintaxe 2: função nomeada/declarada
function exemplo2(){
    console.log("Função nomeada/declarada");
};

exemplo2();

// Sintaxe 3: arrow function (função de flecha/seta)
const exemplo3 = () => {
    console.log("Arrow Function");
};

exemplo3();

/* Obs: funções (em qualquer sintaxe) também pode trabalhar com parâmetros/argumentos. 

Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe parâmetros/argumentos entre os parênteses.

Geralmente, ao término do processamento dos parâmetros, a função "retorna" para fora de um resultado  */

// Exemplos diversos

// Função com parâmetros
function somar(valor1, valor2){
    /* Ao receber os valores (parâmetros), a função primeiro calcula e depois devolve o resultado. */
    return valor1 + valor2;
}

/* Chamamos várias vezes com valores diferentes */
console.log( somar (10, 5) );
console.log( somar (1, 100) );
console.log( somar (2.5, 8.9) );

console.log("...........");

/* Formatação de valores monetários em reais */
let preco = 5000;
let desconto = preco * 0.10; // 10%
let precoFinal = preco - desconto;

function formatarValor(valor){
   return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}

console.log(`Preço: ${formatarValor(preco)}`);
console.log(`Desconto: ${formatarValor(desconto)}`);
console.log(`Preço final: ${formatarValor(precoFinal)}`);

console.log("..................");

/* Sobre a sintaxe 3: Arrow Function 
Sintaxe moderna para funções no JavaScript, bastante usada em biblioteca/framework como React, React Native, Angular, Vue e etc.

A sintaxe getal é:

const algumNome = () => ();

No entanto, esta sintaxe pode ser simplificada e, alguns casos.
*/

// Versão 1 (nomeada/declarada)
/* function dobra(valor){
    return valor *2;
}; */

// Versão 2 (arrow function)
/* const dobra = (valor) => {
    return valor *2;
} */

// Versão 3 (arrow function com retorno implícito)
const dobra = (valor) => valor *2;


// Chamada
console.log(dobra(65));
console.log(dobra(486));
console.log(dobra(64));

console.log("...............");

// Funções como métodos/ comportamentos de Objetos
let pessoa = {
    nome: "Fulano",
    idade: 25,
    verificaIdade(){
        if(pessoa.idade >= 18){
            return "maior";
        } else {
            return "menor"
        }
    }
}

console.log(pessoa.nome);
console.log(`É ${pessoa.verificaIdade()}`);