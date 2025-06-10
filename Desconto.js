const prompt = require('prompt-sync')();

const compra = parseFloat (prompt ("Digite o valor da compra: R$ "));


//Aplicando desconto

if (compra > 100) {
    let desconto = compra * 0.10;
    let total = compra - desconto;
    console.log ("Desconto aplicado foi de R$: ", desconto.toFixed(2));
console.log ("Valor da sua compra com desconto foi de R$: ", total.toFixed(2));
    
  } 
    
  else {
    console.log("Valor da sua compra sem desconto foi de R$: ", compra);
  } 