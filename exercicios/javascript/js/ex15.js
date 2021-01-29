let now = new Date()
let dia = now.getDate()
let mes = now.getMonth()
let ano = now.getFullYear()

let res = document.querySelector('.mestre').children[0]
res.innerHTML = `<h2>${dia} / ${mes + 1} / ${ano}</h2>`

let diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
let nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro']

dia = diaSemana[now.getDay()]
mes = nomeMes[now.getMonth()]

res.innerHTML += `<h2>Hoje é ${dia} de ${mes} de ${ano}</h2>`

img = document.getElementsByTagName('img')[0]
let check = 0
let senha = document.querySelector('#senha')
img.addEventListener('click', ()=>{
    if(!check){
        check = 10
        img.setAttribute('src', 'img/eye close.png')
        senha.setAttribute('type','text')
    } else {
        check = 0
        img.setAttribute('src', 'img/eye.png')
        senha.setAttribute('type','password')
    }
})
