function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    var hora = 1
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        //Bom dia
    } else if (hora <= 18) {
        img.src = 'img/tarde.png'
        //Boa tarde
    } else {
        img.src = 'img/noite.png'
        //Boa noite
    }
}