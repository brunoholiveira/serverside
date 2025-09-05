function paises() {
    let paisA = 80000;
    let paisB = 200000;
    const crescimentoA = 0.03;
    const crescimentoB = 0.015;
    let anos = 0;

    while (paisA < paisB) {
        paisA += paisA * crescimentoA;
        paisB += paisB * crescimentoB;
        anos += 1;
    }

    console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
}

export default paises;