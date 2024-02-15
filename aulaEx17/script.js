function contagem() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector ('input#fim')
    var passo = document.querySelector ('input#passo')
    
    var cont = document.querySelector ('div#cont')
    var i = inicio

    if (Number(inicio.value.length) == 0 || Number(fim.value.length) == 0) {
        cont.innerHTML += "Impossível Contar!"
    } else {
        alert('Caiu no else')
    }

    /*if (Number(passo.value.length) == 0) {
        alert("[@@ PASSO INVÁLIDO !!], o script vai considerar passo '1'")
    }*/


    /*
    while (i <= fim) {
        cont.innerHTML += "<p>Contando:</p>"
        cont.innerHTML += `${i}`
        i++
    }*/
}