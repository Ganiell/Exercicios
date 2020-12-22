// function isNumber(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }

// isNumber('123');  true
// isNumber('asda123');  false



document.querySelector('#botao').addEventListener('click', ()=> {
    let cpf = document.getElementById('cpf').value
    if (cpf.length == 0) {
        window.alert('Digite seu CPF por favor!')
    } else {
        let res = document.querySelector('#res')
        let cpf_sem = cpf.replace(/[^0-9]/g,'')
        res.innerHTML = `<p>Seu CPF com pontos é ${cpf}</p>`
        res.innerHTML+= `<p>Seu CPF sem pontos é ${cpf_sem}</p>`
    }

})




// function botao() {
//     if (cpf.length == 0) {
//         window.alert('Digite seu CPF por favor!')
//     }
// }