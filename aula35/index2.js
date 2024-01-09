const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros){
    let numero = numeros[i];
    if (numero ===2) {
    console.log('Pulei o numero 2');
    continue;   // ele vai executar esse bloco e vai continuar a percorrer 
}

console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado saindo...')
        break;  //  ele vai parar o laço de retição
    }
}