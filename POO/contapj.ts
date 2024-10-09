class ContaPJ extends Conta{

    cnpj: number;

    constructor(cnpj: number, titular: string, saldo: number){
        super(titular, saldo);
        this.cnpj = cnpj;
    }

    consultar(): string{
        return `Saldo atual: ${this.consultaSaldo()}`;
    }

    sacar(valor: number){
        this.sacarDoSaldo(valor);
    }

}

const pj = new ContaPJ(123445656, "João Paulo", 1000);
console.log(pj.numeroDaConta);