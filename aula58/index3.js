const produto =  {nome: 'produto', preco: 1.8};
const caneca = {nome: produto.nome, preco: produto.preco};

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

console.log(Object.keys(produto)) //pega as chaves do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));