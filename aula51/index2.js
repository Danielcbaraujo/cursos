const pessoas = [
    { nome: 'Luiz' , idade: 62 },
    { nome: 'Maria' , idade: 23 },
    { nome:'Eduardo' , idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47},
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisde50 = pessoas.filter(obj => obj.idade > 50);
const pessoasTerminaComA = pessoas.filter(function(obj) {
   return obj.nome.toLocaleLowerCase().endsWith('a');// toLocaleLowerCase foi utilizado porque endswith é sensivel a maiuscula e minuscula
});
//console.log(pessoasComNomeGrande)
//console.log(pessoasComMaisde50)

console.log(pessoasTerminaComA);