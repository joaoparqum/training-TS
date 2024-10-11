export class Conta{

    private readonly _numeroDaConta: number;
    @validaTitular
    titular: string;
    private _saldo: number;

    constructor(titular: string, saldo: number) {
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this._saldo = saldo;
    }

    get numeroDaConta(): number{
        return this._numeroDaConta;
    }

    @analisaSaldo
    protected consultaSaldo(): number {
        return this._saldo;
    }

    protected adicionaSaldo(saldo: number): void{
        this._saldo + saldo;
    }

    protected sacarDoSaldo(valor: number): void{
        this._saldo -= valor;
    }
}

//const primeiraConta = new Conta(1234, "João", 300.00);

function analisaSaldo(target: any, key: any, descriptor: any) {}

//decorator de propriedade
function validaTitular(target: any, propertyKey: any) {}