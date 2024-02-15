function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //FullYear é porque vai pegar o ano com os quatro digitos
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    //Aqui vai verificar se a caixa de texto está vazia (igual a 0)
    //posso colocar o Number para converter
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ("[ERRO!] Verifique os dados e tente novamente!!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        //criando uma tag de imagem dinamicamente com id='img'
        var img = document.createElement ('img')
        //o elemento img com id para (==) foto
        img.setAttribute('id', 'foto')
        
        //Verficando qual é o gênero
        //se o que estiver marcado for esse, vai fazer tudo do bloco
        if (fsex[0].checked) {
            gênero = 'Homem'
        
            //verificando qual a faixa etária
            if (idade >= 0 && idade < 11) {
                //Criança
                //colocando a imagem
                img.setAttribute('src', 'img/criancamenino.png')
            } else if (idade < 21) {
                //Jovem
                //colocando a imagem
                img.setAttribute('src', 'img/homemjovem.png')
            } else if (idade < 50) {
                //Adulto
                //colocando a imagem
                img.setAttribute('src', 'img/homemadulto.png')
            } else {
                //Idoso
                //colocando a imagem
                img.setAttribute('src', 'img/homemidoso.png')
            }
    
            //senão se for esse que estiver marcado for esse, vai fazer tudo do bloco
        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 11) {
                //Criança
                //colocando a imagem
                img.setAttribute('src', 'img/criancamenina.png')
            } else if (idade < 21) {
                //Jovem
                //colocando a imagem
                img.setAttribute('src', 'img/mulherjovem.png')
            } else if (idade < 50) {
                //Adulta
                //colocando a imagem
                img.setAttribute('src', 'img/mulheradulta.png')
            } else {
                //Idosa
                //colocando a imagem
                img.setAttribute('src', 'img/mulheridosa.png')
            }
    
        }
        //centralizando a mensagem quando ela  aparecer
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos`
        //para aparecer a imagem preciso colocar um conteúdo que vai adicionar o elemento que é a imagem
        res.appendChild(img)//adicionar um elemento que no caso é img
    }
}