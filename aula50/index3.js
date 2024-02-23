// outra forma de fazer a concatenação dos arry atraves  do metodo spread ou reast

const a1 = [1,2,3];
const a2 = [4,5,6];

//const a3 = [...a1, ...a2, 'luiz', [7, 8,9 ]] // vc cria um arry  e espalha os arry   com os ...
//SAIDA : [ 1, 2, 3, 4, 5, 6, 'luiz', [ 7, 8, 9 ] ] REPARE QUE AQUI ELE CRIOU UM SUB ARRARY
//AGORA PARA ESPALHAR ELE JUNTO A CONST A3 É SO  USAR O SPREAD

const a4 = [...a1, ...a2, 'luiz', ...[7, 8,9 ]]
console.log(a4)