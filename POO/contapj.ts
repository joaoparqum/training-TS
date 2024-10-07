class ContaPJ extends Conta{

    cnpj: number;

    constructor(cnpj: number, numeroDaConta: number, titular: string, saldo: number){
        super(numeroDaConta, titular, saldo);
        this.cnpj = cnpj;
    }

}