// Definindo a classe pai
class DispositoEletronic {
    constructor(nome){
        this.nome = nome
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log('Dispositivo ja ligado')
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'ja desligado');
            return;
        }

        this.ligado = true
    }
}

//const d1 = new DispositoEletronic('telefone')

//console.log(d1)

class Smartphone extends DispositoEletronic { // herda tudo que tem a classe dispositoEletronic
      constructor(nome, cor, modelo) {
         super (nome) // ele vai  chamar os atributos da class superior 
         this.cor = cor;
         this.modelo = modelo;
         
      }
}

//const s1 = new Smartphone('samsung', 'preto', 'Galaxy')
//console.log(s1)


class Tablet extends DispositoEletronic {
    constructor(nome, wifi ){
        super(nome);
        this.wifi = wifi;
    }
    ligar(){
        console.log('Olha você alterou o metodo ligar.');
    }
}

const t1 = new Tablet('samsung', true);
t1.ligar()
console.log(t1)