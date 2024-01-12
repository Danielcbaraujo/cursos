const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode ===13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }


});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBotaoApagar(li) {
    li.innerText += ' ';  // criar um espaço no apagar
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar'); // set Atribute eu crio o atributo ex: class = 'apagar' criando uma classe para eu botão html
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);


}


function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criarBotaoApagar(li);
    salvarTarefas();
}


btnTarefa.addEventListener('click',function(){ //quando o botão o botão for acionado ele vai chamar a função criaTarefa(com o parametro do inputTarefa)
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);

});

document.addEventListener('click', function(e){
    const el = e.target;// no console do navegar vc vai saber qual  botao esta sendo clicado
    console.log(el); 
    if (el.classList.contains('apagar')){
        el.parentElement.remove(); //Ele vai removerr  o pai do li e se o pai for removido o filho tb será
    }
    
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);  // Converte as tarefa em um arquivo JSON para poder salvar no localStorage do navegador conforme abaixo.
    localStorage.setItem('tarefas', tarefasJSON);

    
}

function adicionarTarefasSalvas(){  // converte o arquivo JSON EM UM arry novamente
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}

adicionarTarefasSalvas()