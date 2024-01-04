// desestruturação com objetos 
// para criar objetos utilizamos as chaves { }.
const pessoa = {
      nome: 'Daniel',
      sobrenome: 'Araujo',
      idade: 30,
      endereco: {
        rua: 'Av Brasil',
        numero: 320                              //objeito dentro de objeto

      }
};
//console.log(pessoa.nome) // utilizamos  a notação de ponto para acessar um dado do objeto

//Atribuição via desestruturação

const { nome, sobrenome, idade } = pessoa;
//console.log(nome, sobrenome, idade) // saida: Daniel Araujo 30

////const { endereco: {rua, numero}} = pessoa

console.log(rua, numero); //saida Av Brasil 320

//podemos tb extrair o objeto completo

const {endereco: {rua, numero}, endereco} = pessoa;

console.log(rua, numero, endereco);





