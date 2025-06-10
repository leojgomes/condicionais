const prompt = require('prompt-sync')();

let num = []

for(let i = 0; i < 5; i++){
    num[i] = parseInt(prompt("Digite o " + (i+1) + " número: " ))
}
let maior = Math.max(...num)
console.log(" O maior é: ", maior)

