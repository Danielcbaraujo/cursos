function Produto(nome, preco) {
    this.nome = nome;
    this.preço = preco;
}
// desta forma construimos o smetodos fora da sua função construtora o que deixa o codigo mais perfomatico o ideal é deixar os metodos fora da sua funçao  , para isso utilizamos o prototype

Produto.prototype.desconto = function(percentual){
     this.preco = this.preco - (this.preco * (percentual / 100));

}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50); // 

const p2 = { // como aqui eu criei um objeto de ofra literal  vou ter que usar //Object.setPrototypeOf(p2, Produto.prototype) setar o prototipo que eu vou usar
    nome: 'Caneca',
    preco: 15,
}
Object.setPrototypeOf(p2, Produto.prototype)// aqui é outra forma que vc ja cria o object e ja seta o prototype
p2.aumento(10)
console.log(p1);
console.log(p2)


const p3 = Object.create(Object.prototype)
p3.preco = 300
console.log(p3)


