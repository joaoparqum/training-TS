class ContaPF extends Conta{

    cpf: number;

    constructor(cpf: number, numeroDaConta: number, titular: string, saldo: number){
        super(numeroDaConta, titular, saldo);
        this.cpf = cpf;
    }
    
}