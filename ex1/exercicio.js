import readline from 'readline-sync';

function alunoNotas() {
    const nome = readline.question('Digite seu nome: ');
    const nota1 = readline.questionFloat('Digite a nota 1: ');
    const nota2 = readline.questionFloat('Digite a nota 2: ');
    const nota3 = readline.questionFloat('Digite a nota 3: ');

    return { nome, nota1, nota2, nota3 };
}

export default alunoNotas;