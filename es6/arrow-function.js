const precos = ['10','23','19'];

//passa elemento a elemento
//const precosEmReais = precos.map(function(preco){
//    return 'R$ ' + preco + ',00';
//});

//faz a mesma coisa que o código acima comentado
const precosEmReais = precos.map(preco => 'R$ ' + preco + ',00');

//imprime ['R$ 10,00','R$ 23,00','R$ 19,00']
console.log(precosEmReais);

//irá filtrar os valores maiores que 20
const acimaDeVinte = precos
            .filter(preco => preco > 20)
            .map(preco => 'R$ ' + preco + ',00');
console.log(acimaDeVinte);