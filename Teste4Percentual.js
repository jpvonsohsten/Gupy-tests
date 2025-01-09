let faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let total = Object.values(faturamento).reduce((a, b) => a + b, 0);

for (let [estado, valor] of Object.entries(faturamento)) {
    let percentual = (valor / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
