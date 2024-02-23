// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Acicion uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz' , idade: 62 },
    { nome: 'Maria' , idade: 23 },
    { nome:'Eduardo' , idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47},
]

const nomes = pessoas.map(obj => obj.nome)

const idade = pessoas.map(obj => ({ idade: obj.idade }));
//saida
// [
//     { idade: 62 },
//     { idade: 23 },
//     { idade: 55 },
//     { idade: 19 },
//     { idade: 32 },
//     { idade: 47 }
//   ]

console.log(idade)

const comIds = pessoas.map(function(obj, indice){ // lembrando que aqui estou  alterando o objeto original  para nao utilizar o  
    //objeto original  eu tenho que  cria um nova variavel
    // e add uma copia do objeto original dentro dela
    //const novoOBj = {...obj};
    //newObj.id= indice;
    //retunr newObj
    obj.id = indice
    return obj;
})

console.log(comIds)