 // para  utilizar objeto date vc tem que usar o new 
 //O javascript vai criar um objeto com uma data
 //const tresHoras = 60 * 60 * 3 * 1000;
 
 function saudacaoDoDia() {
    var agora = new Date(); // para usar a funçao construta Date vc tem que usar o new antes
    var hora = agora.getHours();  // veja a lista dos varios metodos do objetc Date
  
    if (hora < 12) {
      return "Bom dia!";
    } else if (hora < 18) {
      return "Boa tarde!";
    } else {
      return "Boa noite!";
    }
  }
  
  var mensagem = saudacaoDoDia();
  console.log(mensagem);
  