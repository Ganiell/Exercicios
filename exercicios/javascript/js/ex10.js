function Desconto(n){
    return n * 0.05
} 

valor = 200

let res = Desconto(valor)

console.log(`5% de ${valor} é igual a $${res} então a pessoa vai receber $${valor - res} de desconto`)

