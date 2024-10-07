export enum DiaDaSemana{
    Segunda = 18,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}

let dia = DiaDaSemana[19];
//let diaNumero = DiaDaSemana[dia];

export enum DiaNome{
    Segunda = "Segunda-feira",
    Terca = "Terça-feira"
    //...
}

console.log(DiaNome.Segunda);
console.log(DiaNome.Terca);