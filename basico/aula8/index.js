/* Luiz Otávio  Miranda tem 30 anos , pesa 84 kg tem 1.8 de altura  e eu IMC É DE 25.925925925925924*/

const nome = 'Luiz Otávio';
const sobrenome= 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso /(altura*altura); //peso / (altura * altura)
let anoNascimento = 2023 - idade;

console.log( nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg e tem imc=', imc) // toda vez que vc põe a virgula ele dpa um espaço  em variavéis diferentes

console.log( nome + " " + sobrenome + ' tem ' + idade + ' ano, pesa ' + peso + ' kg e tem imc= ' + imc) // concatenando
console.log( `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg e tem imc=${imc}`) 
// template strings
