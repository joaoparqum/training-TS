var nome = 'João Paulo';
var idade = 24;
var setenca = "Ol\u00E1, meu nome \u00E9 ".concat(nome, " e eu tenho ").concat(idade, " anos!");
console.log(setenca);
console.log('tamanho da string: ' + setenca.length);
console.log('posicao do elemento: ' + setenca.indexOf('nome'));
