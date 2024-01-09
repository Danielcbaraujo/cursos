function mostraHora() {
    let data = new Date();
 
    return data.toLocaleTimeString('pt-Br', {  
     hour12: false
    });
 
 }
 
 const timer = setInterval(function () {       // ele vai executar  de um em um segundo
    console.log(mostraHora())
 }, 1000);
//A função setTimeout em JavaScript é utilizada para agendar a execução de uma função (ou a avaliação de uma expressão) após um determinado período de tempo. 
//A função clearInterval é usada em JavaScript para parar a execução de um intervalo de tempo definido anteriormente usando a função setInterval. Essa função recebe como argumento o ID retornado pela função setInterval
 setTimeout(function() {
    clearInterval(timer);
 }, 3000);

 setTimeout(function () {
    console.log('ola mundo!');
 }, 5000);