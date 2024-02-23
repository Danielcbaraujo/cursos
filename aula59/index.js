//Prototypes efere-se ao mecanismo que permite objetos herdar propriedades e métodos de outros objetos

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
}
//                    obj   proto
Object.setPrototypeOf(objB, objA)

const objC = new Object();


console.log(objB.chaveA) 

