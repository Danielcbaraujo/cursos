/*As funções fábricas, em programação, são funções que retornam outras funções ou objetos. Elas são chamadas "fábricas" porque, assim como uma fábrica produz algo, essas funções produzem instâncias de objetos ou funções com características específicas.

Em JavaScript, as funções fábricas são uma técnica que permite criar objetos de maneira flexível, fornecendo uma estrutura para a criação de instâncias com propriedades ou comportamentos específicos. Essas funções geralmente aceitam parâmetros para personalizar a criação do objeto.*/

function criaPessoa(nome, sobrenome){
    return {
        nome, sobrenome
    };
}

const p1 = criaPessoa('Daniel', 'Araujo' );

console.log(p1);

console.log(typeof(p1))

// teremos ai um objeto criado dentro da função
