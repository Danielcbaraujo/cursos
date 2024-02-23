// Filter, map, e reduce  SÃO AS FUNÇÕES MAIS IMPORTANTES PARA ARRAY
//FILTER  vai  filtrar o array
//FILTER VAI SEMPRE RETORNA A MESMA QUANTIDADE DE ELEMENTOS OU MENOS
//MAP   vai modificar o array
// REDUCE vai reduzir o array em um unico valor
//ELAS PODEM SER  USADA JUNTAS  NO SEU CODIGO

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
      // isso ai ja é padrao do filter trabalhando com arry independe do nome que vc deu  para os parametros do arry o primeiro parametro ele retorna valor o segundo ele retorna os indices e o terceiro ele retorna o arry 
const numerosFiltrados = numeros.filter((valor,indice, array) => {
    console.log(valor,indice, array)
    return valor  > 10;
});
console.log(numerosFiltrados);


















//pdemos usar arrow functon é uma forma concisa de escrever funções em javascript e elas  podem ser usadas em varios contextos com nos exemplos 
// Parece que você quis dizer "arrow function" em vez de "arry fuction". As arrow functions são uma forma mais concisa de escrever funções em JavaScript, e você pode usá-las em muitos contextos onde funções são necessárias. Aqui estão alguns lugares comuns onde as arrow functions são frequentemente utilizadas:

// Expressões de Funções Anônimas:

// javascript
// Copy code
// // Função anônima tradicional
// const somaTradicional = function(a, b) {
//   return a + b;
// };

// // Arrow function equivalente
// const somaArrow = (a, b) => a + b;
// Métodos de Array (como map, filter, reduce, etc.):

// javascript
// Copy code
// const numeros = [1, 2, 3, 4, 5];

// // Usando arrow function com map
// const dobrados = numeros.map(numero => numero * 2);

// // Usando arrow function com filter
// const pares = numeros.filter(numero => numero % 2 === 0);
// Callbacks:
// Arrow functions são frequentemente usadas como callbacks, especialmente quando a lógica é simples.

// javascript
// Copy code
// const nomes = ["Alice", "Bob", "Charlie"];

// // Usando arrow function como callback
// const maiusculas = nomes.map(nome => nome.toUpperCase());
// Funções de Tempo (Timeouts, Intervals):

// javascript
// Copy code
// // Usando arrow function com setTimeout
// setTimeout(() => {
//   console.log("Passou um segundo!");
// }, 1000);
// Métodos de Objetos:

// javascript
// Copy code
// const objeto = {
//   // Usando arrow function em um método
//   metodo: () => {
//     console.log("Método chamado");
//   }
// };
// Event Listeners:

// javascript
// Copy code
// const botao = document.getElementById("meuBotao");

// // Usando arrow function como callback de evento
// botao.addEventListener("click", () => {
//   console.log("Botão clicado");
// });
// Estes são apenas alguns exemplos e há muitos outros contextos em que você pode usar arrow functions em JavaScript. Elas são especialmente úteis quando a função é curta e a sintaxe mais concisa melhora a legibilidade do código.





