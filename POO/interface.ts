interface Pessoa{
    nome: string;
    idade: number;
    email: string;
    telefone: number;
}

let pessoa: Pessoa;
let pessoa2: Pessoa;

interface PessoaJuridica extends Pessoa{
    conta: number;
    cnpj: number;
    abrirConta?(): boolean;
}