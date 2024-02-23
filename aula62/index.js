
// criando uma função construtora usando class essa é a sintaxe  tem que usar new para cria uma instancia ,  e usar o constructor dentro da class.

//vc nao tem aqui a complexidade a mais  de criar prototype   igual temos que fazer nas funçoes construtoras.  As classes foram implementadas naECMAScript 6 

class Pessoa {
    constructor(nome, sobrenome){
      this.nome = nome;
      this.sobrenome = sobrenome;

    }

    falar() {
        console.log(`${this.nome} esta falando.`);
    }

    comer() {
        console.log(`${this.nome} esta comer.`);
    }

    beber() {
        console.log(`${this.nome} esta bebendo.`);
    }
}
const p1 = new Pessoa('Daniel', 'Miranda')


// abaixo utilizando pessoa  mesma coisa do class que esta acima
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} esta falando.`)
}


const p2 = new Pessoa2('Daniel', 'Miranda')

console.log(p1)
console.log(p2)

