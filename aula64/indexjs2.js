// metodos com promeses

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return  Math.floor(Math.random()  * (max - min) + min);
}



function esperaAi(msg, tempo) {
      return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
    }

        setTimeout(()=> {
        resolve(msg.toUpperCase() + ' - Passei na promise');
        return
    }, tempo)  ;  
   });
}
//Promise.all , Promise.race. Promise.resolve. , Pomise.reject  são para entregar as promessas

const promisses = [  // SE UMA PROMESSA TIVER ERRADO ELE VAI REJEITAR TODAS
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 3000),
    //esperaAi(1000, 1000), // ERRO
    'Outro valor'
];

Promise.all(promisses)
    .then(function(valor){
       console.log(valor);
})
    .catch(function(erro) {
        console.log(erro)
    });

// Promise.all vai me entregar todos as promessas se uma tiver errada ele vai me entregar como erro

//Promise.race entre todos as promessas ele vai me entregar a primeira que se ela estiver errada ele me retorna o erra senão me entrega resolvido

//
  