const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');// vai me informar o elemento que está recebendo o evento
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value); // pegamos os valores dos inputs
    const altura = Number(inputAltura.value);// pegamos os valores dos inputs
    
    if(!peso) {
      setResultado('Peso inválido', false);
      return; // colocamos o return senão a função nao vai parar
    }

    if(!altura) {
        setResultado('Altura inválido', false);
        return; // colocamos o return senão a função nao vai parar
      }
      
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc}  (${nivelImc}).`;
     
      

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }else if (imc >= 34.9){
        return nivel[4];
    }else if (imc >= 29.9){
        return nivel[3];
    }else if (imc >= 24.9){
        return nivel[2];
    }else if (imc >= 18.5){
        return nivel[1];
    } else if (imc < 18){

    }
   
}


function getImc (peso, altura) {

    const imc= peso / altura**2;
    return imc.toFixed(2);

}

// criamos uma função que a especialidade dela é colocar alguma coisa dentro do html

function criaP(){
  const p = document.createElement('p'); // criar um paragrafo
  return p;
};

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado') // peguei a div que eu queira e trouxe para javaScript
   resultado.innerHTML = ' '; // para limpar o html
  const p = criaP();

  if(isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
  }
