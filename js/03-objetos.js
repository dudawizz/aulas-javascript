'use strict';

console.log("Objetos!!");

// Declarando um objeto
const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: 3,
    ano: 1954
};

console.log(livro);

console.log(livro.titulo);
console.log(livro.autor);

console.log(
    `${livro.titulo} foi criado por ${livro.autor}`
);
// titulo: propriedade; nome: valor

/* Exercício */

const carro = {
    marca: "SUV",
    modelo: "Jeep Renegade",
    fabricacao: 2015,
    portas: 4,
    cor: "Verde Musgo",
    
    // Propriedade como Array
    opcionais: ["ar-condicionado", "vidros elétricos", " alarmes" ]
};

console.log(carro);

console.log(
    `O ${carro.modelo} da marca ${carro.marca} foi fabricado em ${carro.fabricacao} com ${carro.portas} portas. Sua cor mais chamativa é o ${carro.cor} que era extremamente famoso. Ele contém ${carro.opcionais[1]}. ` 
);

// Objeto com array e outro objeto
const pessoa = {
    nome: "Chapolin Colorado",
    idade: 20,
    
    // Obs: usamos aspas neste caso pois não se trata de números matemáticos ou monetários.
    telefones: ["11-2135-0300", "11-96666-5555"],

    // Propriedade como objeto
    medidas: {
        peso: 75,
        altura: 1.66,
    }
};

console.log(pessoa);

console.log(
    `O ${pessoa.nome} tem ${pessoa.medidas.peso}kg e ${pessoa.medidas.altura} de altura. Contato ${pessoa.telefones[1]}`
);

// Array de objetos
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Crônicas de Nárnia",
        autor: "C.S. Lewis"
    },
    {
        titulo: "Crônicas de Olam",
        autor: "L.L. Wurlitzer"
    }
];

console.log(livros);

console.log(livros[1].titulo); // Crônicas de Nárnia

console.log("...............");

// Alternativa para exibição de análise de arrays e objetos (console.table)
console.table(livros);