// mais metodos para utilizar com objetos

const produto =  {nome: 'produto', preco: 1.8, material: 'porcelana'};

for(let valor of Object.entries(produto)){
    console.log(valor)
}