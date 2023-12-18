let varA = 'A' ; //B
let varB = 'B'; //C
let varC = 'C'; //A
let varAtemp = varA;

varA =varB
varB =varC
varC = varAtemp
[varA, varB, varC] = [varB, varC, varA] // outra forma de resolver
console.log(varA, varB, varC);