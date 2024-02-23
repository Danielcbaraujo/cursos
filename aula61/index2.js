// function criaPessoa (nome, sobrenome) {
//    return {
//     nome,
//     sobrenome,
//     fala(){
//         console.log(`${this.nome} esta falando.`) // quereso desacoplar esse metodos 
//     },
//     comer(){
//         console.log(`${this.nome} esta comendo.`)
//     },
//     beber(){
//         console.log(`${this.nome} esta bebendo.`)
//     }
//    };
// }

// const p1 = criaPessoa('Daniel', 'Araujo');

// console.log(p1)

function criaPessoa (nome, sobrenome) { //peguei todos os metodos e coloquei em uma unica variavel  criando um objeto delas 
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} esta falando.`)
        },
        comer(){
            console.log(`${this.nome} esta comendo.`)
        },
        beber(){
            console.log(`${this.nome} esta bebendo.`)
        }
       };
    };
    
    return Object.create(pessoaPrototype, {
        nome: {value : nome},
        sobrenome: {value: sobrenome}
    })

  // vc economiza memoria e  toda pessoa que vc criar vc podera  acessar os metodos  ,falaqr comer e beber
     
 const p1 = criaPessoa('Danie', 'Araujo')
 const p2 = criaPessoa('Julia', 'Araujo')
