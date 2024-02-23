//promisses
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return  Math.floor(Math.random()  * (max - min) + min);
}




function esperaAi(msg, tempo) {
      return new Promise((resolve, reject) =>{

    setTimeout(()=> {
        resolve(msg);
    }, tempo)
    
});
}


esperaAi('Conexão com o BD', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return  esperaAi('Buscando dados da BASE', rand(1, 3));
})
.then(resposta => {
    return esperaAi('Tratando os dados', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Eu serei o último a ser exibido.');
})
.catch();

console.log('oi') // isso aqui vai ser executado imediatamente , e quando as promessas estiverem pronta elas seram exibidas