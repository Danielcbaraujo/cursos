
//retornando  um arry com os pares


const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15,];
const total = numeros.reduce(function(acumulador, valor, indice, array ) {
    if(valor % 2 === 0) acumulador.push(valor );
   return acumulador;
}, []); // [] o acumulador com um vetor vazinho que vai receber o  push dos elementos

console.log(total);