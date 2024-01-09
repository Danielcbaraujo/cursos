try {
    // É executado quando não ha erros
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo gerou um erro');
    console.log('Fechei o arquivo');
   try {
    console.log(b);
   } catch (e) {
    // é executado quando há erros
    console.log('Deu erro');   
} 

} catch (e){
    console.log('tratando o erro');
} finally{
    console.log('FINALLY: Eu sempre sou executado');
}






