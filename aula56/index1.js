//Criamos um objeto utizando o construtor vc pode utilizar  o que vc achar melhor  pois tb
// temos de forma literal 

const pessoa1 = new Object();
pessoa1.nome = 'Daniel';
pessoa1.sobrenome = 'Araujo';
pessoa1.idade = 39;
pessoa1.falarNome = function(){
    return `${this.nome} esta falando seu nome`;
}
pessoa1.getDataNascimento = function(){// Vc pode criar metodos dentro do proprio objeto usando dados deles  
      const dataAtual = new Date();

    return  dataAtual.getFullYear() - this.idade;
}

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento())

for (chaves in pessoa1){
    console.log(pessoa1[chaves]);
}