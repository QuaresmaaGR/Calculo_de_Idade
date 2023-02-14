function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || fano.value > ano) {
    window.alert('ERRO PANI NO SISTEMA ALGUEM NE DESCONFIGUROU')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'você é um corno'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'nene2.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src','men.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'homi.png')
        } else {
            //idoso
            img.setAttribute('src', 'veio.png')
        }
    } else if (fsex[1].checked) {
        genero = 'você é uma trouxa'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'nene.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src','muie.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'muiednv.png')
        } else {
            //idoso
            img.setAttribute('src', 'veia')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Chegamos a conclusão de que ${genero} aos ${idade} anos!!`
    res.appendChild(img) }

}