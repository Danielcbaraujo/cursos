 //                 -1          -2           -3         -4        -5
 //                0          1        2         3         4
const nomes =[ 'Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana' ];

const novo = nomes.slice(1, 4) // no uso do slice ele sempre começa no primeiro indice que vc colocou  e  corta no penultimo slice(1,4) = 1, 2, 3, apenas esses tres indices serão recortados

//podemos utilizar indices negativos para recorta utilizando o slice veja o exemplo abaixo

const  novo2 = nomes.slice(1, -1); // saida = 'Maria', 'Joana', 'Wallace' // as duas pontas foram removidas "Eduardo e Rosana"
const novo3 = nomes.slice(1, -2); // saida = ' maria,joana
console.log(novo)