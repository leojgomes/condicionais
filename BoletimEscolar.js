const prompt = require('prompt-sync')();

const boletim = parseInt (prompt ("Digite a sua Nota:"));

//verificando e classificando a sua nota
if  (boletim < 6) {
    console.log("Reprovado");
  } else if (boletim < 7) {
    console.log("Recuperação");
  } else {
    console.log("Aprovado");
  }
    
   
