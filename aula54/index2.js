// usando arry fuction para diminuir o codigo


const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, ]

const numerosPares = numeros
.filter(valor => valor % 2 === 0
).map(valor => valor * 2)
.reduce((ac,valor) => ac + valor);
console.log(numerosPares)
// VEJA COMO FICA REDUZIDO O  CODIGO COM ARRAY FUCTION