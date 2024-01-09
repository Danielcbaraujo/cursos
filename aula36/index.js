function ePaisagem(largura, altura) {
  if( largura < altura){
     console.log('Modo Retrato')
} else {
    console.log('Modo Paisagem')
}
}


// MESMO CODIGO

function ePaisagem2(largura, altura){
    return largura > altura;
}
ePaisagem(4, 1)

// arrow fuction 

const ePaisagem3 = (largura, altura) => {
    return largura > altura;
}

