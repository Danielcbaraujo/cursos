            //   0123456789
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.slice(2, 6)) // rato

console.log(umaString.slice(32))//ma. cortar da esqueda para direita

console.log(umaString.slice(-3))//ma. cortar da direita para esquerda

console.log(umaString.slice(-5,-1)) //ele vai cortar da direita para esquerda retirando o ultimo caracterre "ma"

console.log(umaString.substring(umaString.length -5, umaString.length -1 )); // é igual ao slice acima

console.log(umaString.split(' ', 2))

console.log(umaString.toUpperCase());
console.log(umaString.toLocaleLowerCase(1));



