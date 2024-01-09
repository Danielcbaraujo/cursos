function retornaHora (data){
   if (!(data instanceof Date)) {
       throw new TypeError('Esperando instancia de Date');
   }
}

// nao vai aparecer erro retornaHora(new Date())
retornaHora() //saída "não é"