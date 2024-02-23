// usamos xrh como nome da variavel por conveção ok
// open(method, url, async): Esta função é usada para especificar o tipo de requisição HTTP a ser feita (GET, POST, etc.), o URL para enviar a requisição e se a requisição deve ser assíncrona ou não.

//Os códigos de status HTTP são divididos em cinco categorias principais:

// 1xx: Informacional - A solicitação foi recebida e o processo está continuando.
// 2xx: Sucesso - A ação foi concluída com sucesso.
// 3xx: Redirecionamento - O cliente precisa tomar medidas adicionais para completar a solicitação.
// 4xx: Erro do cliente - O cliente cometeu um erro, como solicitar uma página que não existe.
// 5xx: Erro do servidor - O servidor falhou ao cumprir uma solicitação aparentemente válida.


const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true ) 
     // true para  asyncrono  false apara  sincrono
    xhr.send();// envia a solicitação 
                    //o evento load é para lidar com a resposta do servidor quando ela ja esta pronta para ser manipulada pelo javascrit
    xhr.addEventListener('load', () => { // aqui já vamos receber o codigo da respotas vc pode pesquisar sobre codigos http  são de 100 a 500 
        if(xhr.status >= 200 && xhr <300) {
            obj.success(xhr.responseText)
        }else {
            obj.erro(xhr.statusText);
        }
    });
};
// FEITO O CODIGO ACIMA JA PODEMOS FAZER AS REQUISIÇOES
// CRIAMOS UMA DIV NO HTML QUE VAI RECEBER OS RESULTADOS DE TODAS AS NOÇAS REQUISIÇÕES QUE NO CASO VAI SER AS PAGINAS HTML DESTE NOSSO EXERCICIO

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregarPagina(el){
      const href = el.getAttribute('href')
     
      request ({
        method:'GET',
        url: href,
        success(response){
          carregaResultado(response);
        },

        erro(errorText){

        }
      });
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = resultado;
}


