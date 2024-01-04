// rest para pegar o resto do arry

const numeros = [1000, 2000, 3000, 4000, 5000,6000, 7000, 8000,9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros; //...resto vai pegar o resto do arry
console.log(...resto);
