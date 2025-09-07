import readline from 'readline-sync';

function revenda() {
    const salarioFixo = readline.questionFloat('Digite o salário fixo do vendedor: R$ ');
    const comissaoPorCarro = readline.questionFloat('Digite a comissão fixa por carro vendido: R$ ');
    const numeroDeCarrosVendidos = readline.questionInt('Digite o número de carros vendidos: ');
    const valorTotalVendas = readline.questionFloat('Digite o valor total das vendas: R$ ');

    const comissaoSobreVendas = valorTotalVendas * 0.05;
    const salarioFinal = salarioFixo + (comissaoPorCarro * numeroDeCarrosVendidos) + comissaoSobreVendas;

    console.log(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`);
}

export default revenda;