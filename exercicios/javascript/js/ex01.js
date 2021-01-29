function clicar() {
    let notas = document.getElementById('notas').value;
    notas = notas.split('-');
    let total = 0
    for (let i = 0; i < notas.length; i++) {
        notas[i] = Number(notas[i])
        total += notas[i]
    }
    let media = total/notas.length
    let md = document.getElementsByTagName('div')[0];
    md.innerHTML = Number(media.toFixed(1))
}