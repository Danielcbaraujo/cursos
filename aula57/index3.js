//defineProperty ->  Getter e Setters
//Getter e Setters seria uma maneira de proteger minha propriedade (no caso aqui as propriedades são os paramentros da funçao abaixo , exemplo em estoque  eu preciso receber um valor numerico  e se colocar uma string vai da merda ta ligado entao vc vai validar o valor antes que eles seja  utilizado )
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
   
    Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostrar a chave
    //value: estoque, nao vou precisar usa-lo pois  ja vou utilizar o getters que vai pegar o valor
    //writable: true, não precisar que eu ja vou ter um metodo que vai trabalhar o valor
    configurable: true, // pode configurar
    get: function() {
        return estoquePrivado;
    },
    
    set: function(valor) {
        if(typeof valor !== 'number') {
            console.log('bad value')
        }
        estoquePrivado = valor;
    }
});

}
//getteers é para obter o valor setters é para configuar o valor
const p1 = new Produto('Camiseta', 20, 2, 3);
//console.log(p1)
p1.estoque = 500  // se eu colocar um string aqui  no valor  a mensagem 'bad value vai ser exibida pois o valor não é um numero
console.log(p1.estoque);

// essa aula vimos como construir get e set em funçoes contrutoras
