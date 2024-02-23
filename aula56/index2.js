// FACTORY FUNCTIONS  / CONSTRUCTO FUCTIONS eles são padroes de projetos que vc pode fazer ai vc escolha qual vc vai escolhar para o seu programa



// ESTE É O  EXEMPLO DA FUNÇAO  FABRICA
function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome}    ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Daniel', 'Araujo')
console.log(p1.nomeCompleto)