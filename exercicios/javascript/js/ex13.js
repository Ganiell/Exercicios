function Encontrar(palavra,str) {
    if(str.indexOf(palavra) != -1){
        return (
            console.log(`Palavra encontrada na posição ${str.indexOf('chave')}`)
        )
    } else {
        return (
            console.log('Palavra não encontrada na frase')
        )
    }
}

let frase = "carro chave banana caminhão melão escada"

Encontrar('chave',frase)