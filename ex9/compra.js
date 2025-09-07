import readline from 'readline-sync';

function compra() {
    const produtos = [];
    const numeroDeProdutos = readline.questionInt('Digite o número de produtos que deseja cadastrar: ');

    for (let i = 0; i < numeroDeProdutos; i++) {
        console.log(`\nCadastro do produto ${i + 1}:`);
        const nome = readline.question('Nome do produto: ');
        const quantidadeAtual = readline.questionInt('Quantidade atual em estoque: ');
        const quantidadeMaxima = readline.questionInt('Quantidade máxima em estoque: ');
        const quantidadeMinima = readline.questionInt('Quantidade mínima em estoque (ponto de compra): ');

        produtos.push({
            nome,
            quantidadeAtual,
            quantidadeMaxima,
            quantidadeMinima
        });
    }

    console.log('\nAnálise de estoque:');
    produtos.forEach(produto => {
        const quantidadeMedia = (produto.quantidadeMaxima + produto.quantidadeMinima) / 2;
        console.log(`Produto: ${produto.nome}`);
        console.log(`Quantidade média do ponto de compra: ${quantidadeMedia.toFixed(2)}`);
        if (produto.quantidadeAtual >= quantidadeMedia) {
            console.log('Não efetuar compra\n');
        } else {
            console.log('Efetuar compra\n');
        }
    });
}

export default compra;