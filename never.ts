function verificandoTipo(x: string | number): boolean {

    if(typeof x === "string"){
        return true;
    }else if(typeof x === "number"){
        return false;
    }

    return fail("Esse método não aceita esse tipo!");
}

function fail(message: string): never { throw new Error(message);}

verificandoTipo("Teste");
verificandoTipo(10);
let ativo = true;
verificandoTipo(ativo);