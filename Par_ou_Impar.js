const prompt = require('prompt-sync')();

const numero = parseInt (prompt ("Digite um número:"));

//verificando se é par ou impar
if (numero  % 2 == 0) {
    console.log ("Esse número é par.");
}else{
    console.log ("Esse número é impar");
}

