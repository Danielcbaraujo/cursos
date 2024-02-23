let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
//A expressão regular /\D+/g em JavaScript é usada para corresponder a qualquer caractere que não seja um dígito. Aqui está como você pode usar replace()
cpfArray = Array.from(cpfLimpo) // converti para um array
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0))// agora convertido eu  somei utilizando o reduce lembrando que tive que converter o valor  par Number

function ValidadaCPF(cpfEnviado)