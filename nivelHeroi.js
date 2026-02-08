// Função para calcular o saldo e determinar o nível
function calcularNivel(vitorias, derrotas) {
    // O saldo é a diferença entre vitórias e derrotas
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para determinar o nível baseado nas vitórias
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O herói tem o saldo de ${saldoVitorias} e está no nível ${nivel}`;
}

// Exemplo de uso:
const nome = "Artur"; // Simulando o input do nome
const resultado = calcularNivel(75, 20);

console.log(resultado); 
// Saída: O herói tem o saldo de 55 e está no nível Ouro
