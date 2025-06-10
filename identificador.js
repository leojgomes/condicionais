const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite o seu número: "));

//verificando o numero se e negativo, positivo ou zero

if (numero === 0 ) {
    console.log("Esse número é o zero");
  } else if (numero < 0) {
    console.log("Esse número é negativo");
  } else {
    console.log("Esse número é positivo");
  }
    