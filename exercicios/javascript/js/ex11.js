res1 = document.getElementById('res1')
res2 = document.getElementById('res2')
res3 = document.getElementById('res3')

document.querySelector('#botao1').addEventListener('click', () => {
    vezes = Number(document.getElementById('vezes').value)
    let texto = document.createElement('p')
    if (res1.innerHTML == 0){
        for(let i = 1; i <= vezes; i++){
            let crianca = document.createElement('img')
            crianca.setAttribute('src', 'https://vignette.wikia.nocookie.net/surrealmemes/images/3/3d/Meme_Lads.png/revision/latest/scale-to-width-down/185?cb=20181113213257')
            texto.appendChild(crianca)
        }
    }else{
        res1.innerHTML = ''
        res1.removeChild(texto)
    }
    res1.appendChild(texto)
})


document.querySelector('#botao2').addEventListener('click', () => {
    res1.innerHTML = ''
    res3.innerHTML = ''
    let vetor = []
    if(res2.innerHTML == 0){
        for(let i = 1; i <= 20; i++){
            vetor.push(` ${i}° Repetição `)
        }
        let repeticoes = ''
        vetor.forEach((elemento,indice,vetor_inteiro) => {
            repeticoes += elemento
        });
        res2.innerHTML = repeticoes
    } else {
        res2.innerHTML = ''
    }
})


document.querySelector('#botao3').addEventListener('click', () => {
    res1.innerHTML = ''
    res2.innerHTML = ''
    if(res3.innerHTML == 0){
        let i = 1
        while(i <= 20){
            res3.innerHTML += ` ${i}° Repetição `
            i += 1
        }
    } else {
        res3.innerHTML = ''
    }
})