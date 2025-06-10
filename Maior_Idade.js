const prompt = require('prompt-sync')();

const idade = parseInt (prompt ("Digite a sua idade"));

//verificando se a idade é maior que 18.
if (idade >= 18){
    console.log ("você é maior de idade");
}else{
    console.log ("você é menor de idade");
}
