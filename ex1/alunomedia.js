import alunoNotas from "./exercicio.js";

const notas = alunoNotas();
let alunoMedia = () => {
    const mediaAluno = ((notas.nota1 + notas.nota2 + notas.nota3) / 3).toFixed(2);

    switch (mediaAluno > 0) {
        case (mediaAluno >= 9):
            console.log(`Aluno: ${notas.nome} \nMédia: ${mediaAluno} \nConceito: A`);
            break;
        case (mediaAluno < 9 && mediaAluno >= 8):
            console.log(`Aluno: ${notas.nome} \nMédia: ${mediaAluno} \nConceito: B`);
            break;
        case (mediaAluno < 8 && mediaAluno >= 7):
            console.log(`Aluno: ${notas.nome} \nMédia: ${mediaAluno} \nConceito: C`);
            break;
        case (mediaAluno < 7 && mediaAluno >= 6):
            console.log(`Aluno: ${notas.nome} \nMédia: ${mediaAluno} \nConceito: D`);
            break;
        default:
            console.log(`Aluno: ${notas.nome} \nMédia: ${mediaAluno} \nConceito: F`);
            break;
    }
}

export default alunoMedia;