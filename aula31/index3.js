//podemos ter arrys dentro de arrays endo que cada index correspodera a um unico indice

//                   0        1         2
  //               0 1 2    3 4 5    6 7 8     
const numeros = [ [1,2,3], [4,5,6], [7,8,9] ]; // todos os elementos possuiem indices
const [lista1, lista2, lista3] = numeros
console.log(lista3[2])  // saida = 9
//console.log(numeros[1][2]) saida 6

//saida: 6
