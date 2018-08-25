let notasAlunos: number[] = [10, 8, 8.5, 7];

// índices - in
//PERCORRE OS VALORES POR ÍNDICES
for (let i in notasAlunos) {
    console.log(i);
}

// valores - of
//PERCORRE OS VALORES POR OBJETOS
for (let notaAluno of notasAlunos) {
    console.log(notaAluno);
}