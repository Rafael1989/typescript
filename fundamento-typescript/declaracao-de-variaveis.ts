// var, let e const
// const
//O IDEAL É SEMPRE USAR LET PARA RESPEITAR O ESCOPO
//CONST NÃO DEIXA MUDAR O VALOR
function iniciarTime(iniciaJogoEmUberlandia: boolean) {
    const nome: string = 'Messi e amigos';
    let cidade: string = 'em São Paulo';
    //var nome = 'Messi e amigos';

    if (iniciaJogoEmUberlandia) {
        cidade = 'em Uberlândia';
        //var cidade = 'em Uberlândia'; mesmo dentro do escopo do if consegue acessar a variável fora lá embaixo, isso por causa do hoisting que declara a variavel lá em cima no começo da função
        //Já quando usamos let, ela só é válida no escopo declarado, o que faz mais sentido
    }

    //nome = 'Ronaldo e amigos'; NÃO FUNCIONA POIS É UMA CONSTANTE

    // nome = 'Ronaldo e amigos';
    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(false);