const pessoa = {
 nome: 'Daniel',
 sobrenome: 'Araujo',
 idade: 39
}

for (let chave in pessoa){ // em objetos ele vai ler as chaves do objetio , saida : nome, sobrenome, idade
    console.log(chave);
}

//console.log(pessoa.nome);  = console.log(pessoa['nome'])

for (let chave in pessoa){
    console.log(chave, pessoa[chave]) // saida: nome Daniel , idade 39, sobrenome Araujo
}
