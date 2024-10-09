//GENERICS: Array<T> nesse exemplo T é uma string
const nomes: Array<string> = ['pessoa1', 'pessoa2'];

//nesse exemplo T é um number
const numer: Array<number> = [24,21];

function funcaoGenerica<T>(value: T): T {
    return value;
}

console.log(funcaoGenerica<number>(24));

console.log(funcaoGenerica<string>("João"));

console.log(funcaoGenerica<boolean>(true));

class classeGenerica<T> {

    private arr: Array<T> = [];

    adicionaValor(item: T) {
        this.arr.push(item);
    }

    retornaValor() {
        return this.arr;
    }
}

let cg = new classeGenerica<number>();

cg.adicionaValor(21);
console.log(cg.retornaValor());

//INTERFACE GENERICA

interface InterfaceGenerica<I> {
    removeItem(item: I);
}