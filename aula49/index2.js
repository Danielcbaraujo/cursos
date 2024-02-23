//                  0          1       2
//const nomes = ['Eduardo', 'Maria', 'Joana']; ESTA É A FORMA LITERAL DE CRIAR ARRAYS
// ... spread e o rest são o mesmo operador os nomes so mundando por causa dos contextos diferentes
// quando quero pegar o resto do Arry eu uso o reast ... operator
// quando quero espalhar os dados que da dentro de um array ... spread operatos

const nomes = new Array ('Eduardo', 'Maria', 'Joana');
const novo = [...nomes, 'Rafael', 'Augusto'] // saida: [ 'Eduardo', 'Maria', 'Joana', 'Rafael' ] ESPALHEI ELE EM OUTRO ARRAY
novo.pop();
console.log(novo)

