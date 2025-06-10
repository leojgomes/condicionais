const prompt = require('prompt-sync')();

const cal = parseFloat (prompt ("Digite um número:"));
const cal2 = parseFloat (prompt ("Digite um número:"));
const operacoes = prompt ("Digite a operação: + , - , * , /: ");

//fazendo as operações
if  (operacoes == "+" ) {

    console.log("Resultado: ", cal + cal2);
  } 
 else if  (operacoes == "-" ) {
    console.log("Resultado: ", cal - cal2);
  } 
  else if  (operacoes == "*" ) {
    console.log("Resultado: ", cal * cal2);
  } 

  else if  (operacoes == "/" ) {
    if(cal2===0)
        {console.log ("Erro número não divide por zero")

    }else {
        console.log("Resultado: ", cal / cal2);
    }
    
  } 
  else {
    console.log("Operação invalida");
  } 
 
    
   