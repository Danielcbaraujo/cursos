const nomes = ['Daniel', 'Cristina','Julia'];
// for of vai pegar os valores tanto dos arrys tanto dos objetos
for (valor of nomes){
    console.log(valor)
}
for (valor in nomes){
    console.log(valor)
}

console.log('############')

nomes.forEach(function(valor, indice){ // forEach ele da para pegar o valor o indice ao mesmo tempo e ate arry todo
    console.log(valor, indice);
});

/* DA PARA VC USAR QUALQUER UM DELES PARA FAZER AS INTERAÇÕES
PARA ARRAYS QUALQUER UM DELES VAI FUNCIONAR (CLASSICO, IN, OF, E FOREACH)
PARA OBJETOS O FOR OF NÃO FUNCIONA COM OBJETOS POIS ELES NÃO SÃO INTERAVEIS
Em JavaScript, objetos não são diretamente iteráveis no mesmo sentido que arrays, strings, mapas e sets. Isso ocorre porque a capacidade de ser iterável é algo que um objeto precisa explicitamente implementar.

A razão para isso está relacionada com a flexibilidade e natureza dinâmica dos objetos em JavaScript. Objetos podem ter propriedades de vários tipos (como strings, números, outros objetos, funções, etc.), e a iteração sobre todas as propriedades de um objeto pode não ser uma operação trivial.

Para tornar um objeto iterável, você pode implementar o protocolo de iteração no ECMAScript 6, que envolve a definição de um método chamado Symbol.iterator. Esse método é chamado pelo laço for...of para obter um iterador que permite percorrer as propriedades do objeto. */
