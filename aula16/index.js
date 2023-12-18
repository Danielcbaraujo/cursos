const alunos = ['Daniel', 'Maria', 'Jõao']; // podemos misturar vários de tipos de dados mas não é uma boa prática. Os são indexados por elementos
console.log(alunos) // exibe o arry completo
console.log(alunos[0]) // podemos buscar um unico elemento do arry desta forma
alunos['0'] = 'Xuxa'; // podemos mudar o valor dos elementos do arry desta forma
alunos['3'] = 'Luisa' // podemos adicionar um elemento no arry

console.log(alunos.length) //para descobrir o tamanho do arry 

alunos.push('Otavio')// adiciona um elemento no final do arry
alunos.push('Fabio')
alunos.unshift('Julia') // adiciona um elemento no inicio do arry LEMBRE-SE QUE TODOS OS INDICES SERÃO ALTERADOS 
const removido = alunos.pop() // o ultimo elemento sera retirado do arry  e retorna esse valor 
console.log(removido) // renorta Otavio

delete alunos[1] // o delete vai deixar vazio  sem alterar os outro indices 

console.log(alunos.slice(0, 3)) // podemos fatiar nos dois sentidos

console.log(typeof alunos); // arry considerado objetos em javascrit









console.log(alunos)