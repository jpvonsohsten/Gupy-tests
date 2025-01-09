let dadosJson = `
[
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 26139.6134},
    {"dia": 4, "valor": 0.0},
    {"dia": 5, "valor": 0.0},
    {"dia": 6, "valor": 26742.6612},
    {"dia": 7, "valor": 0.0},
    {"dia": 8, "valor": 42889.2258},
    {"dia": 9, "valor": 46251.174},
    {"dia": 10, "valor": 11191.4722}
    // Mais dias...
]
`;

let dados = JSON.parse(dadosJson);

// Dias com faturamento
let faturamentos = dados.filter(d => d.valor > 0).map(d => d.valor);

let menor = Math.min(...faturamentos);
let maior = Math.max(...faturamentos);
let media = faturamentos.reduce((a, b) => a + b, 0) / faturamentos.length;

let diasAcimaMedia = faturamentos.filter(valor => valor > media).length;

console.log("Menor valor de faturamento:", menor);
console.log("Maior valor de faturamento:", maior);
console.log("Dias com faturamento acima da média:", diasAcimaMedia);
