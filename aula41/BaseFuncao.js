// Declaração de função (Function hoisting)   eu posso chamar a função  independente da posição que ela estiver no codigo
// tanto antes quando depois.

function falaOi () {  
    console.log('oi');
}

falaOi();

// As funções JavaScript  são "Fisrst-Class objects (objetos de primeira classe) isto é elas podem ser tratadas como dados
// "Function expression" criar uma função como um dado que nada mais é criar uma função dentro de uma variavel.

const souUmDado = function() { 
    console.log('Sou um dado. ');
};
souUmDado(); //  Posso tratar uma variavel de uma função como uma função isso é muito poderoso pois posso
//tratar essa funçao como paramentro de outra função e fazer essa outra função executar minha função

//ex

function executarFuncao(funcao){ // chamando a funçao entro da funçao com esse codigo base 
    console.log('vou executar sua função')
    funcao();
}

executarFuncao(souUmDado)

//Arrow function

const funcaoArrow =  () => {
    console.log('Sou uma arrow function')
}

funcaoArrow();
// Todas a funções citadas fazem a mesma coisa  de formas diferentes

// Dentro de um objeto 

const obj ={
    falar : function () {
        console.log("esta é uma funçao dentro do objeto")
    }

    
        
    };

obj.falar(); // esta é a forma de chamar uma função que esta dentro de um objeto(USANDO A  NOTAÇÃO DE PONTO)



