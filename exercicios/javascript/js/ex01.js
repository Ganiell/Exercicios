function clicar() {
    let notas = document.getElementById('notas').value;
    notas = notas.split(' ');
    let res = ' ';
    for (let i = 0; i < notas.length; i++) {
        res = res + notas[i] + '<br>'
    }
    let md = document.getElementsByTagName('div')[0];
    md.innerHTML = (res)
}