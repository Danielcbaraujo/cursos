function funcao() { // diferente de outras linguagens o javaScript executa a função independente dos paramentros ou não 
   console.log('oie')
   console.log(arguments)
   console.log(arguments[0])
}

funcao('Valor', 1, 2, 3); // esse parametros nao ficaram perdidos usando 
// "arguments" verificamos que  o javaScript armazena esse paramentros
// como um arry

function funcao() {
   let total = 0;
   for (let argumento of arguments){
    total+= argumento
   }

   console.log(total)
}


funcao(1,2,3,4,5,6,7,);
// Outras linguagens de programação não aceitam essa funções sem parametros lembrando que isso vale para funções definidas com
//a palavra "FUNCTION"
