// Clousers // habilidade que a funçao tem de acessar seu escopo lexico
// Escopo Global
function retornaFuncao(nome){
    return function(){
     return nome;
};
}
const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Joao');
console.log(funcao);
console.dir(funcao2);