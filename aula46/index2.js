function criaPessoa(nome, sobrenome,a , p){
    return {
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter

        set nomeCompleto(valor) {
              valor = valor.split(' ');
              this.nome = valor.shift();
              console.log(valor);
        },
        fala(assunto = 'falando sobre nada'){
            return `${this.nome} esta ${assunto}.`;
        },
        altura: a,
        peso: p,
        //Getter
        get imc() { //com o get ele vai pelgar o valor desse imc
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2);
        }
    };
    
};

const p1 = criaPessoa('Daniel', 'Araujo', 1.8, 80 );
p1.nomeCompleto ='Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
// usar funções contrutoras
// usar funções fabricas
// as duas irão fazer a mesma coisa 
const p1 = criaPessoa('Daniel', 'Araujo', 1.8, 80 );
const p2 = criaPessoa('Rodrigo', 'Araujo', 1.8, 80 );
const p3 = criaPessoa('Saara', 'Araujo', 1.8, 80 );

console.log(p2.img);







// //this vai assumir o valor de quem chamar o objeto se for p1 nome = daniel  se for p2  nome vai ser Maria 
// const p1 = criaPessoa('Daniel', 'Araujo', 1.8, 80 );
// p1.imc =29; // com usou o get ele vai pegar o valor de dentro da funcao imc e não o p1.imc
// console.log(p1.imc);

// con
