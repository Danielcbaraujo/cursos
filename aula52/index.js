//MAP vai alterar os valores do arry original  do mesmo tamanho

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map(valor => 'Luis ->' + valor * 2 );

console.log(numerosDobrados)