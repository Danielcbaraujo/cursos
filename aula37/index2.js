function soma(x, y){
   if (typeof x !== 'number'  || typeof y !== 'number'){
      throw ('x e y precisam ser números');  //throw serve para lançar uma exeção manualmente


   }
       return x + y;

}
// throw new Error  -- O JavaScript tem varios tipois de erro que vc pode usar 

 try {
    console.log(soma(1, 2));
    console.log(soma("oi", 2));

    } catch(error){
        console.log('Alguma coisa mais amigável pro usuário');
    }
 

