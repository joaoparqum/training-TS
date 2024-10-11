var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var Conta = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _titular_decorators;
    var _titular_initializers = [];
    var _titular_extraInitializers = [];
    var _consultaSaldo_decorators;
    return _a = /** @class */ (function () {
            function Conta(titular, saldo) {
                this._numeroDaConta = __runInitializers(this, _instanceExtraInitializers);
                this.titular = __runInitializers(this, _titular_initializers, void 0);
                this._saldo = __runInitializers(this, _titular_extraInitializers);
                this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
                this.titular = titular;
                this._saldo = saldo;
            }
            Object.defineProperty(Conta.prototype, "numeroDaConta", {
                get: function () {
                    return this._numeroDaConta;
                },
                enumerable: false,
                configurable: true
            });
            Conta.prototype.consultaSaldo = function () {
                return this._saldo;
            };
            Conta.prototype.adicionaSaldo = function (saldo) {
                this._saldo + saldo;
            };
            Conta.prototype.sacarDoSaldo = function (valor) {
                this._saldo -= valor;
            };
            return Conta;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _titular_decorators = [validaTitular];
            _consultaSaldo_decorators = [analisaSaldo];
            __esDecorate(_a, null, _consultaSaldo_decorators, { kind: "method", name: "consultaSaldo", static: false, private: false, access: { has: function (obj) { return "consultaSaldo" in obj; }, get: function (obj) { return obj.consultaSaldo; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _titular_decorators, { kind: "field", name: "titular", static: false, private: false, access: { has: function (obj) { return "titular" in obj; }, get: function (obj) { return obj.titular; }, set: function (obj, value) { obj.titular = value; } }, metadata: _metadata }, _titular_initializers, _titular_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
//const primeiraConta = new Conta(1234, "João", 300.00);
function analisaSaldo(target, key, descriptor) { }
//decorator de propriedade
function validaTitular(target, propertyKey) { }
