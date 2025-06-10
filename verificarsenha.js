const prompt = require('prompt-sync')();

const senha  = parseInt (prompt ("Digite a sua senha: "));

//verificando senha

if  (senha == "1234" ) {

    console.log("Liberado acesso:");
  } 
 
   else {
        console.log("Senha invalida:");
    }
    