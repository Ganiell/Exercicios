document.getElementById('img1').addEventListener('mouseover', ()=> {
    img1 = document.getElementById('img1').style.display = 'none'
    img2 = document.getElementById('img2').style.display = 'block'
})
document.getElementById('img2').addEventListener('mouseover', ()=> {
    img1 = document.getElementById('img1').style.display = 'block'
    img2 = document.getElementById('img2').style.display = 'none'
})