
res = document.getElementById('res')
function Somar(num1=0,num2=0) {
    soma = num1 + num2
    return soma
}
function botao() {
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)
    if (n1 == '' && n2 == ''){
        window.alert('Digite os número zé lélé')
    } else {
    res.innerHTML = `<p>A soma de ${n1} e ${n2} é ${Somar(n1,n2)} </p>`
    }
    
}


