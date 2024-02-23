//Funções geradoras em JavaScript são funções especiais que permitem pausar e retomar sua execução.

function* geradora1(){
    // Codigo qualquer
    yield 'Valor 1';
    // codigo qualquer
    yield 'Valor 2';
    // codigo qualquer
    yield  'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());