//podemos criar uma função para criar objetos
                     //(parametros )
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome : sobrenome,
        idade : idade
    };
}
/* function criaPessoa (nome, sobrenome, idade) { mesma coisa da funçao acima o javaScript reconhece
    return {
        nome,
        sobre,
        idade,
    };
}*/
const pessoa1 = criaPessoa ('Daniel','Araujo', 38); //este são os argumentos que iram ser passados para os parametros na função
const pessoa2 = criaPessoa ('Xuxa','Pereira', 22);
const pessoa3 = criaPessoa ('Julia','Silva',36);

console.log(pessoa1.nome, pessoa1.nome)