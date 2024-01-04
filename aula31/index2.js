// ...spread no sentido de espalhar alguma coisa

const numeros = [1000, 2000, 3000, 4000, 5000,6000, 7000, 8000,9000];
const [um, , tres, , cinco, ,sete] = numeros; //pegando valores pulando de um em um  do arry
console.log(um, tres, cinco);

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2); // Saída: [1, 2, 3, 4, 5, 6]
