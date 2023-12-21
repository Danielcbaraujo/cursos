const numero = 10;

if (numero >= 0 && numero<= 5) {
    console.log('Sim, o número é maior igual a zero.');
} else if (numero >= 6 && numero <= 8) {    //quando precisamos verificar mais de uma condição utilizamos 
    console.log('Não está entre 6 e 8')
} else if (numero >=9 && numero <=11){
    console.log('O número  está entre 6')
} else {
    console.log ('O numero não está entre 0 e 11.');
}