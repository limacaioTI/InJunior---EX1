function multiplicarMatrizes(matriz1, matriz2) {
 
    if (matriz1[0].length !== matriz2.length) {
        throw new Error("Número de colunas da primeira matriz não é igual ao número de linhas da segunda matriz.");
    }

    
    let resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz2[0].length; j++) {
            resultado[i][j] = 0;
        }
    }

    
    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz2[0].length; j++) {
            for (let k = 0; k < matriz1[0].length; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }

    return resultado;
}


let matriz1a = [[2, -1], [2, 0]];
let matriz2a = [[2, 3], [-2, 1]];
console.log(multiplicarMatrizes(matriz1a, matriz2a)); 


let matriz1b = [[4, 0], [-1, -1]];
let matriz2b = [[-1, 3], [2, 7]];
console.log(multiplicarMatrizes(matriz1b, matriz2b)); 
