function contagem() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector ('input#fim')
    var passo = document.querySelector ('input#passo')
    var cont = document.querySelector ('div#cont')
    
    var c = inicio.value

   // cont.innerHTML = `Os valores foi ${inicio}, ${fim} e ${passo}, o contador ${c}`

   //fazendo a contagem normal crescente
    if (c < fim.value) {
    cont.innerHTML = "<p>Contando:</p>"
        alert (passo.value)
        
    for (var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
        cont.innerHTML += `${i} `
    }
}


   /*
    //SE O CAMPO ESTIVER VAZIO VAI EXECUTAR ESSA PARTE
    if (Number(inicio.value.length) == 0 || Number(fim.value.length) == 0) {
        cont.innerHTML = "Impossível Contar!"

    //SE O VALOR DO PASSO FOR == 0 VAI MOSTRAR A MENSAGEM E VAI CONSIDERAR O VALOR 1 PARA O PASSO    
    } else if (passo.value.length == 0) {
        alert("[PASSO INVÁLIDO]. O script vai considerar passo '1'")

        //CONTANDO CONSIDERANDO O VALOR DO PASSO == 0
        cont.innerHTML = "<p>Contando:</p>"
        do {
            cont.innerHTML += `${c} `
            c++
        } while (c <= fim.value)

    //FAZENDO A CONTAGEM NORMAL CRESCENTE DO INICIO ATÉ O FIM
    } else if (c < fim.value) {

        cont.innerHTML = "<p>Contando:</p>"
        for (var i = inicio.value; i <= fim.value; i += passo.value) {
            cont.innerHTML = `${i} `
        }
    //VAI FAZER A CONTAGEM DECRESCRENTE SE O VALOR DO FINAL FOR MAIOR QUE O VALOR DO INICIO
    } else if (c > fim.value) {
        alert('Detectei que o Fim é menor!')

        //CONTANDO DECRESCENTEMENTE
        cont.innerHTML = "<p>Contando:</p>"
        while (c >= fim.value) {
            cont.innerHTML += `${c} `
            c -= passo.value
        }
    }*/
}