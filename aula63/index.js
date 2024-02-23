class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

// metodo de instancia
aumentarVolume() {
    this.volume += 2
}
diminuirVolume() {
    this.volume -= 2
}
// metodo estatico basica camente é uma função que esta dentro de uma class
// por questão de organização , eu poderia criar ela separadamente ai precisaria usar o this 
 static trocarPilha(){
       console.log('OK, VOU TROCAR.')
}
 static soma(x,y){
    return x+y
 }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocarPilha(); // o static podemos utilizar o metodo sem um instancia acessando pela class