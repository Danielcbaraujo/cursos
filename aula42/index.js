const nome = 'Daniel';

function falaNome(){ // posso chamar dentro da funçao uma varivel que esta do lado de fora do escopo
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Otavio'
    falaNome();
}
usaFalaNome();