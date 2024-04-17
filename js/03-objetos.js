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