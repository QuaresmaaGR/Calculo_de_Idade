function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || fano.value > ano) {
    window.alert('PREENCHA OS DADOS POR FAVOR!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Você é um Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'hcriança.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src','hjovem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulto.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Você é uma Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'mcriança.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src','mjovem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulta.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Chegamos a conclusão de que ${genero} aos ${idade} anos!!`
    res.appendChild(img) }

}