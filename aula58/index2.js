const produto = {nome: 'Produto', preco: 1.8 };
const caneca = Object.assign({}, produto, {material: 'porcentagem'});

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

///////////////////////// outro exemplo do uso do assing 
const objetoDestino = { a: 1, b: 2 };
const objetoOrigem = { b: 4, c: 5 };

const novoObjeto = Object.assign(objetoDestino, objetoOrigem);

console.log(novoObjeto); // Saída: { a: 1, b: 4, c: 5 }

////////////////////////////  outro exemplo
const origem = { a: 1, b: 2 };
const copia = Object.assign({}, origem);