const precos = ['10','23','19'];

const acimaDeVinte = precos
                .filter(preco => preco > 20)
                //template string abaixo
                .map(preco => `R$ ${preco},00`);

console.log(acimaDeVinte);