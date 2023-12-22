// Operadores ternarios (condição)? 'Valor para Verdadeir0' : Valor para falso';

const pontuacaoUSuario = 500;
const nivelUsuario = pontuacaoUSuario >= 1000? 'Usuario Vip'  : 'Usuario Normal';

console.log(nivelUsuario)

//podemos utilizado para escrever menos linhas de codigo

/* É importante notar que o operador ternário não substitui completamente as estruturas if-else. Ele é mais apropriado para lógica condicional simples e atribuições diretas de valores. Para lógica mais complexa, ainda é preferível usar a estrutura if-else.*/

var numero = 10;
var ehPar = (numero % 2 === 0) ? true : false;
console.log(ehPar); // Retorna true se o número for par, false se for ímpar
