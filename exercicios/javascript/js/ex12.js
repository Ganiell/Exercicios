document.body.style = 'text-align: center'
document.getElementById('botao').addEventListener('click', () => {
    let res = document.getElementById('res')
    let num = Number(document.getElementById('num').value)
    let vezes = Number(document.getElementById('vezes').value)

    if(num == 0 || vezes == 0){
    res.innerHTML = 'Digite os valores!'
    res.style = 'color: red; background-color: pink; width: 300px; font-size: 1.5em; aling-text: center; border-radius: 12px; box-shadow: 0px 0px 10px 2px red; margin: auto'
    } else {
        res.style = ''
        let tabuada = ''

        for(let i = 1; i <= vezes; i++){
            tabuada += `${num} x ${i} = ${num*i} <br>`
        }
        classes = res.className 
        res.setAttribute('class', `${classes} tabuada`)
        res.innerHTML = `<p> ${tabuada} </p>`
    }
    
} )