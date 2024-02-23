// definePropertys   -- definir configurações para varios objetos

function Produto(nome, preco, estoque){
    this.nome = nome,
    this.preco = preco,
    

    Object.defineProperty(this, 'estoque',{
        enumerable: true,  //enumerable mostra a chave ou não
        value: estoque,  // valor da chave que no caso é um parametro
        writable: false,  // writable da perguntado se eu posso alterar o valor ou não
        configurable: true // pode apagar a chave ou reconfigurar a chave ? no caso aqui pode se poe falso não
    } );
    
    Object.defineProperties(this,{
        nome: {// vc define cada chave do objeto com as propriedades que vc quer
            enumerable: true, // mostra chave
            value: nome,  // valor
            writable: true, // pode alterar
            configurable: true, //configurável
        },  
        preco: {// vc define cada chave do objeto com as propriedades que vc quer
            enumerable: true, // mostra chave
            value: preco,  // valor
            writable: true, // pode alterar
            configurable: true, //configurável
        },  
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave)
}