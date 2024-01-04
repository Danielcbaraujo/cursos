// for of é mais indicado para arrys e strings 
//O for...of simplifica o processo de iteração, eliminando a necessidade de acessar índices ou chaves manualmente. Além disso, ele funciona apenas em objetos iteráveis, ignorando propriedades adicionadas ao protótipo, tornando-o uma escolha mais segura e intuitiva em comparação com o for...in.

const nome = 'Daniel Araujo';

for (let i = 0; i < nome.length; i++ ) {
   console.log(nome[i])
}

for (let i in nome){
   console.log(nome[i])
}

//os dois fazem a mesma coisa  

for (let valor of nome){
   consolelog(valor)
}

//resumindo for... i pega os indices
//          for ... of pega os valores
//isso se aplica tanto no arrays tanto para objetos
