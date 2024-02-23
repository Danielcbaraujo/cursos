//Reduce reduzir um elemento  em um  unico valor  

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, ]
// valor, indice e arry tem no map e no filter, acumulador é novidade e tem no reduce
const total = numeros.reduce(function(acumulador, valor, indice, array ) {
    
    acumulador += valor;
   return acumulador;
}, 0);

console.log(total)