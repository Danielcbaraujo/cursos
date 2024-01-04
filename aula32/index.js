
// let tem escopo de bloco;
//var só tem escopo de função
let nome = 'Luiz';// você não pode redeclarar a variavel let
var nome2 = 'Luiz';
const verdadeira = true;
if (verdadeira) {
    let nome = 'Otavio';
    

if (verdadeira){
    var nome2 = 'Otavio';
    let nome = 'Outra coisa';
    console.log(nome, nome2);
}
}
