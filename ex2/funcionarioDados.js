import readline from 'readline-sync';

function funcionarioDados() {
    const nome = readline.question("Digite o nome do funcionário: ");
    let salarioBruto = readline.questionFloat("Digite o salário bruto do funcionário: R$");
    return { nome, salarioBruto };
}

export default funcionarioDados;
