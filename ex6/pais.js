import readline from 'readline-sync';

function pais() {
    function validarNumeroPositivo(input) {
        const numero = parseFloat(input);
        return !isNaN(numero) && numero > 0;
    }

    while (true) {
        let populacaoA, taxaCrescimentoA;
        do {
            populacaoA = readline.question('Digite a população inicial do país A (número positivo): ');
        } while (!validarNumeroPositivo(populacaoA));
        do {
            taxaCrescimentoA = readline.question('Digite a taxa de crescimento anual do país A (em %, número positivo): ');
        } while (!validarNumeroPositivo(taxaCrescimentoA));

        let populacaoB, taxaCrescimentoB;
        do {
            populacaoB = readline.question('Digite a população inicial do país B (número positivo): ');
        } while (!validarNumeroPositivo(populacaoB));
        do {
            taxaCrescimentoB = readline.question('Digite a taxa de crescimento anual do país B (em %, número positivo): ');
        } while (!validarNumeroPositivo(taxaCrescimentoB));

        populacaoA = parseFloat(populacaoA);
        taxaCrescimentoA = parseFloat(taxaCrescimentoA) / 100;
        populacaoB = parseFloat(populacaoB);
        taxaCrescimentoB = parseFloat(taxaCrescimentoB) / 100; 

        let anos = 0;

        while (populacaoA < populacaoB) {
            populacaoA += populacaoA * taxaCrescimentoA;
            populacaoB += populacaoB * taxaCrescimentoB;
            anos++;
        }

        console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);

        const repetir = readline.question('Deseja realizar outra operação? (s/n): ');
        if (repetir.toLowerCase() !== 's') {
            break;
        }
    }
}

export default pais;