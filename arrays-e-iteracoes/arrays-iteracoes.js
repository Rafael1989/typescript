var notasAlunos = [10, 8, 8.5, 7];
// índices - in
//PERCORRE OS VALORES POR ÍNDICES
for (var i in notasAlunos) {
    console.log(i);
}
// valores - of
//PERCORRE OS VALORES POR OBJETOS
for (var _i = 0, notasAlunos_1 = notasAlunos; _i < notasAlunos_1.length; _i++) {
    var notaAluno = notasAlunos_1[_i];
    console.log(notaAluno);
}
