class Conta{

    private numeroDaConta: number;
    titular: string;
    private saldo: number;

    constructor(numeroDaConta: number, titular: string, saldo: number) {
        this.numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this.saldo = saldo;
    }

    protected consultaSaldo(): string {
        return `O seu saldo atual é: ${this.saldo}`;
    }

    protected adicionaSaldo(saldo: number): void{
        this.saldo + saldo;
    }

    protected sacarDoSaldo(valor: number): void{
        this.saldo -= valor;
    }
}

const primeiraConta = new Conta(1234, "João", 300.00);