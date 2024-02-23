// as promesses vieram para resolver o problema de ficar colocando callbacks dentro de callbacks mas ainda faltava um toque final  daí veio o ASYNC / AWAIT

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return  Math.floor(Math.random()  * (max - min) + min);
}

// a função abaixo é apenas um exemplo  para simular uma ação que demora um tempo para ficar pronta

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
// UTILIZANDO PROMESES
// esperaAi('Fase 1', rand(0, 3))
//   .then(valor =>{ 
//     console.log(valor)
//     return esperaAi('Fase 2', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase;
//   })
//   .then(fase => {
//     console.log('Terminamos na', fase);
//   })

//   .catch(e => console.log(e));
  
/// VEJA AGORA COM A ATUALIZA A ECA COMO FICOU MAIS FACIL TRATAR AS PROMISES COM ASYNC E AWAIT, 

// a palabra async antes  da funçao faz  com que a funçao retorne  uma promessa
async function executa() { // async vai permitir que eu  utilize a palavara await dentro da funçao para vc esperar uma promessa
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);


const fase2 = await esperaAi('Fase2', rand());
    console.log(fase2);


const fase3= await esperaAi('Fase 3', rand());
    console.log(fase3)
    console.log('Terminamos na fase:', fase3);
}
executa(); // muito mais legivel 