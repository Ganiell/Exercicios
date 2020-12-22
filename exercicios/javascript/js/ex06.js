function botao(){
    n1 = Number(document.querySelector('#n1').value)
    n2 = Number(document.querySelector('#n2').value)
    res = document.querySelector("#res")
    if (n1 == '' && n2 == ''){
        window.alert('Digite os número zé lélé')
    } else {
    soma = n1 + n2 
    res.innerHTML = `<p>A soma entre ${n1} e ${n2} é <strong>${soma}</strong><p>`
    }
    
    
}