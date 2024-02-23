//Em JavaScript, a herança é implementada através do mecanismo de protótipos. Não existe herança de classe como em linguagens orientadas a objetos clássicas, mas sim herança baseada em protótipos.

//Produto - aumento, desconto
//Camiseta = cor, caneca= material, 
//
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
};


// call vai chamar a funçao Produto vai ser linkada com a funçao Camiseta
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'preta');
console.log(produto);
console.log(camiseta);