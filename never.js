function verificandoTipo(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    return fail("Esse método não aceita esse tipo!");
}
function fail(message) { throw new Error(message); }
verificandoTipo("Teste");
verificandoTipo(10);
var ativo = true;
verificandoTipo(ativo);
