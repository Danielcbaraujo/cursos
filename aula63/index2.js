class ValidaCPF {
    constructor (cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable : false,
            enumerable : true,
            configurable : false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }


 valida () {
    if(!this.cpfLimpo) return false;
    return 'CHEGUEI AQUI';
 }
}

const validacpf = new ValidaCPF('070.987.720-03');
console.log(validacpf.valida());
