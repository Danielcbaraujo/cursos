function mostraHora() {
   let data = new Date();

   return data.toLocaleTimeString('pt-Br', {  
    hour12: false
   });

}

setInterval(function () {       // ele vai executar  de um em um segundo
   console.log(mostraHora())
}, 1000);
  
