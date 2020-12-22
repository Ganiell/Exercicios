/* function clicar1() {
    img = document.getElementById('img')
    img.setAttribute('src', 'img/vela_cor.png')
} */
document.querySelector('#img1').addEventListener('click', ()=> {
    img1 = document.getElementById('img1')
    img2 = document.getElementById('img2')
    img1.style.display = 'none'
    img2.style.display = 'block'
})
document.getElementById('img2').addEventListener('click', ()=> {
    img1 = document.getElementById('img1')
    img2 = document.getElementById('img2')
    img2.style.display = 'none'
    img1.style.display = 'block'
})