import { Conta } from "./conta";

class ContaPF extends Conta{

    cpf: number;

    constructor(cpf: number, titular: string, saldo: number){
        super(titular, saldo);
        this.cpf = cpf;
    }

    consultar(): string {
        return `O saldo atual é: ${this.consultaSaldo()}`;
    }

    sacar(valor: number){
        if(this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor);
        }
    }
    
}