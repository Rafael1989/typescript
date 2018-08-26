//A interface define os atributos que são obrigatórios o objeto ter para compilar
// A ? faz com que o atributo não seja obrigatório
interface Pessoa {
    idade: number;
    sexo?: string;
}

function imprimirIdade(pessoa: Pessoa) {
    console.log(pessoa.idade);
}

let joaoMarcos = {nome: 'João Marcos', idade: 22};

imprimirIdade(joaoMarcos);
