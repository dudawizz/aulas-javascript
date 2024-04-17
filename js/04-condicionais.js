'use script'

/* Comandos utilizados em condicionais
if      (se)
else    (senão)
else if (senão se)

switch/case (escolha/caso)

Operadores relacionais:
> MAIOR QUE
< MENOR QUE 
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENÇA
== IGUALDADE 

*/

// Condicional SIMPLES
let numero = 10;

if(numero > 5){
    console.log("Mensagem exibida pois a condição é VERDADEIRA!");
}

// Condicional COMPOSTA 
let usuario = "Ozzy Osbourne";
let idade = 73;

// Variável com propósito de guardar palavra "maior" ou "menor"
let texto; // undefined/indefinida

if(idade >= 18){
    texto = "maior";
    // console.log(`${usuario} é maior de idade`);
} else {
    texto = "menor";
    // console.log(`${usuario} é menor de idade`);
}

console.log(`${usuario} é ${texto} de idade`)
