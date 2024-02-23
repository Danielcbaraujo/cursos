// Em JavaScript, o método splice() é utilizado para modificar o conteúdo de um array, removendo ou substituindo elementos existentes e/ou adicionando novos elementos. O método splice() recebe três parâmetros:

const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

nomes.splice(-1, 0, 'Luiz');// Luiz será dicionado antes da Julia
nomes.splice(nomes.length, 0, 'Gugu', 'Dudu', 'Zezinho') // ele vai pegar todos os elementos de nomes e não vai excluir nenhum  e vai adicionar gugu, dudu e zezinho
console.log(nomes);
