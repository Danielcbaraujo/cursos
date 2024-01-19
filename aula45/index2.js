(function () {
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Daniel'));
    }

   falaNome();
})();// precisa colocar esse parenteses aqui no final mesmo depois  que envolver toda a função imediata dentrao de parenteses tb  lembrando que como ela esta envolvida nos pareteses ela nao vai  ser afetada pelo escopo globola
const nome = 'Qualquer coisa'