/*Pegando os dados das tags do html e colocando dentro das variáveis*/
function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    /*pegando a hora do sistema e colocando na variável */
    var data = new Date()
    var hora = data.getHours()//pegando a função de hora do JS
    //mostrando o horário do sistema pela tag msg do html

    msg.innerHTML = `Agora são ${hora} horas.`

    //Condição para mostrar a imagem de acordo com o horário do sistema
    if (hora >= 0 && hora < 12) {
        //carregando a imagem da manhã
        img.src = 'img/manha.png'
        msg.innerHTML += " Bom Dia! ;)"
        document.body.style.background = '#a5864d'
        //Bom dia
    } else if (hora >= 12 && hora <= 18) {
        //carregando a imagem de tarde
        img.src = 'img/tarde.png'
        msg.innerHTML = " Boa Tarde! :)"
        document.body.style.background = '#497a28'
        //Boa tarde
    } else {
        //carregando a imagem de noite
        img.src = 'img/noite.png'
        msg.innerHTML += " Boa Noite! *_*"
        document.body.style.background = '#2e333d'
        //Boa noite
    }
}