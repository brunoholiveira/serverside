import readline from 'readline-sync';

let valorDoVeiculo = readline.questionFloat('Digite o valor do carro: ');

function calcularCustoFinal(valorDoVeiculo) {
    const percentualDistribuidor = 0.28;
    const impostos = 0.45;

    const custoDeFabrica = valorDoVeiculo * 0.20; 
    const valorDistribuidor = valorDoVeiculo * percentualDistribuidor;
    const valorImpostos = valorDoVeiculo * impostos;
    const custoFinal = valorDoVeiculo + valorDistribuidor + valorImpostos;

    console.log(`Custo de fábrica: R$ ${custoDeFabrica.toFixed(2)}`);
    console.log(`Valor do distribuidor (28%): R$ ${valorDistribuidor.toFixed(2)}`);
    console.log(`Valor dos impostos (45%): R$ ${valorImpostos.toFixed(2)}`);
    console.log(`Custo final ao consumidor: R$ ${custoFinal.toFixed(2)}`);
}

export default calcularCustoFinal(valorDoVeiculo);