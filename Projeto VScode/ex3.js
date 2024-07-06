function verificarAprovacao(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}


let nota1 = 7;
let nota2 = 5;
let nota3 = 8;
console.log(verificarAprovacao(nota1, nota2, nota3)); 

let nota4 = 4;
let nota5 = 3;
let nota6 = 5;
console.log(verificarAprovacao(nota4, nota5, nota6)); 