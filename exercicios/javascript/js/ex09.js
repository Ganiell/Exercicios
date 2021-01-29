function Mult(num1,num2) {
    resultado = num1 * num2
    return resultado
}

function botao(){
    res = document.getElementById('res')
    n1 = document.getElementById('n1').value
    n2 = document.getElementById('n2').value
    if (Mult(n1,n2) % 2 == 0) {
        res.innerHTML = "<h2>Par</h2>"
    } else {
        res.innerHTML = "<h2>Impar</h2>"
    }

    res.innerHTML += `<p>E a multiplicação dos números são ${Mult(n1,n2)}</p>` 
}
