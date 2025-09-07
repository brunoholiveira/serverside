import readline from 'readline-sync';

function nomes() {
    const nomes = [];

    for (let i = 0; i < 10; i++) {
        const nome = readline.question(`Digite o nome da pessoa ${i + 1}: `);
        nomes.push(nome);
    }

    function verificarNome(nome) {
        if (nomes.includes(nome)) {
            console.log('ACHEI');
        } else {
            console.log('NÃO ACHEI');
        }
    }

    while (true) {
        const nomeParaVerificar = readline.question('Digite um nome para verificar (ou "sair" para encerrar): ');
        if (nomeParaVerificar.toLowerCase() === 'sair') {
            break;
        }
        verificarNome(nomeParaVerificar);
    }
}
export default nomes;