// defineProperty  e defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome,
    this.preco = preco,
    

    Object.defineProperty(this, 'estoque',{
        enumerable: true,  //enumerable mostra a chave ou não
        value: estoque,  // valor da chave que no caso é um parametro
        writable: false,  // writable da perguntado se eu posso alterar o valor ou não
        configurable: true // pode apagar a chave ou reconfigurar a chave ? no caso aqui pode se poe falso não
    } );


}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
console.log(p1)

//RESUMINDO VC CONSEGUE DEFINIR PROPRIEDADES DO OBJETO PARA QUE ELES NÃO POSSAM SER ALTERADOS E OUTRAS COISAS TB. ESSE SÃO OS MAIS IMPORTANTES MAS TEM MAIS 