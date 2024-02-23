const nomes =[ 'Eduardo', 'Maria', 'Joana', 'Rafael' ];

const removido = nomes.pop()
console.log(removido) // saida: Rafael o pop retira e pega o valor do ultimo elemento e retorna
// lembrado que quando vc usa o pop os indices  dos elementos serão reorganizados com os valores
nomes.push('Daniel') // vai adicionar  'Daniel na ultima posição do arry
nomes.unshift('Julinha')// não é muito usado mais vai adicionar um elemento no inicio do arry reorganizando todos os elementos do arry
console.log(nomes)