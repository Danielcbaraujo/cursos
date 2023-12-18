let pessoa = {
    nome:"Daniel",
    sobrenome:"Araujo",
    idade: "38 anos"
}

console.log(pessoa.idade) // duas formas de consultar propriedades do arry
console.log(pessoa["idade"])

pessoa.email ="daniel@gmail.com" // adiciona uma propriedade
console.log(pessoa)

delete pessoa.sobrenome /// deleta uma propriedade 

console.log(pessoa)