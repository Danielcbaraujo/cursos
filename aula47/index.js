// uma função recursiva é uma funçao que chama ela mesma de volta
// vc pode fazer uma coisa bem similar  que as estruturas de repetição fazem
function recursiva(max){
   if(max >= 10) return; // return aqui vai funcionar como parada se for maior q 10
   max++; // precisa usar um incremento para nao ficar se chamando infinitamente
   console.log(max);
   recursiva(max)
}

recursiva(0)