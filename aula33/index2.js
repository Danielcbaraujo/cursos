
//A desestruturação de array em JavaScript é uma maneira conveniente de extrair valores de um array e atribuí-los a variáveis individuais

// arrys são indexados  0   1  2  3  4  5  6  7  8
       const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
       const [primeiroNumero, segundoNumero, ...resto] = numeros;
       console.log(resto)

      
     
      
      
      
      
      //console.log(primeiroNumero)