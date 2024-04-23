'use script'

// as chaves servem para criação de objetos
const clientes = [
    { id: 1, nome: 'Goku' },
    { id: 2, nome: 'Naruto' },
    { id: 3, nome:'Shiryu' }
];

for (const cliente of clientes) {
    console.log(`Cliente: ${cliente.nome} (id: ${cliente.id})`);
}

/* USANDO LOOP FOR
for (let i = i < clientes.length; i++ ) {
    console.log(`Cliente: ${cliente.nome} (id: ${cliente.id})`);
} */

/* Armazenamento em cache (memória) o tamanho do array antes de iniciar o loop

let quantidade - clientes.length

for (let i = i < quantidade; i++ ) {
    console.log(`Cliente: ${cliente.nome} (id: ${cliente.id})`);
} */