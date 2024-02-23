//ESTE  É O EXEMPLO DA FUNÇAO CONSTRUTORA
// funçoes construtoras tem que ter a primeira letra maiuscula
function Pessoa(nome, sobrenome){ 
      this.nome = nome;
      this.sobrenome = sobrenome;
      
}
    //para uma funçao construra vc tem q usar a palavra New
const p1 = new Pessoa('Daniel', 'Araujo');
const p2 = new Pessoa('Julia', 'Araujo')
console.log(p1)
console.log(p2)
// o p1 e o p2 foram construidos apartir da função molde Pessoa
/* o funcionamento é o seguinte a palavra new cria um objeto
vazio e vai pegar o this e atrelar ela dentro dessa funçao ao objeto
*/