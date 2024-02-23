// Metodos úteis para objetos
const produto = { nome: 'Caneca', preco: 1.8};
const outraCoisa = {...produto, material: 'porcelana'}; //espalhando produto em outro  objeto ele vai ocupar espaços diferentes na memoria e eu não estarei utilizando o objeto principal "produto"

produto.nome = 'luis otavia'
console.preco = 2.5;
console.log(produto)
console.log(outraCoisa);
