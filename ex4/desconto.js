import readline from 'readline-sync';

function calculaDesconto() {
    let valorCompra = readline.questionFloat("Digite o valor da compra do cliente: R$");
    const pontos = Math.floor(valorCompra / 20);

    if (pontos >= 10 && pontos <= 100) {
        const desconto = pontos * 0.5;
        console.log(`O cliente terá ${desconto}% de desconto na próxima compra.`);
    } else {
        console.log('O cliente não terá desconto na próxima compra.');
    }
}

export default calculaDesconto;