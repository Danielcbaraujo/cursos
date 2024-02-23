
//                  0          1       2
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João'; // troquei o elemento na posição 2 de joana pra joão
console.log(nomes)
delete nomes[1] // o elemento de indice 1  "maria" vai ser deletado lembrando ele não vai mudar os indicies dos outros elemento
// ficando o indice vazio "[ 'Eduardo', <1 empty item>, 'João' ]"
console.log(nomes); // ficara espaço vazio no indice 1