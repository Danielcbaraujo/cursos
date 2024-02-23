l


function ValidaCPF(cpfEviado) {
 Object.defineProperties(this, 'cpfLimpo',{
    get: function() {
        return cpfEviado.replace(/\D/, '');
 }
 });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo ==='undefine') return false;
    if(this.cpfLimpo.length !== 11) return false;
   
    const cpfParcial = this.cpfLimpo(0, -2);
    this.criaDigito();
   
    return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
      const cpfArray = Array.from(cpfParcial)
      let regressivo = cpf.Array.length + 1;
      const digito = cpfArray.reduce(((ac, val)=> {
        ac+= (regressivo * Number(val));
        regressivo--;
        return ac;
      }  ));
      
};
const cpf = new ValidaCPF('705.484.450-52')
cpf.valida();