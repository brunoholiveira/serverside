import funcionarioDados from "./funcionarioDados.js";

function salarioLiquido() {
    const dados = funcionarioDados();
    let salarioLimpo;
    let inss;
    let ir;

    if (dados.salarioBruto < 2500) {
        inss = 0.95;
        salarioLimpo = dados.salarioBruto * inss;
        console.log(`Funcionário: ${dados.nome} 
            \nSalário Bruto: R$${dados.salarioBruto} 
            \nDesconto INSS: 5% 
            \nSalário Líquido: R$${salarioLimpo.toFixed(2)}`);

    } else {
        inss = 0.92;
        ir = 0.89;
        salarioLimpo = dados.salarioBruto * inss * ir;
        console.log(`Funcionário: ${dados.nome} 
            \nSalário Bruto: R$${dados.salarioBruto} 
            \nDesconto INSS: 8% 
            \nDesconto IR: 11% 
            \nSalário Líquido: R$${salarioLimpo.toFixed(2)}`);
    }
}

export default salarioLiquido;