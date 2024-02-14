var agora = new Date()// pegando a hora do sistema 
var hora = agora.getHours()//posso pegar outras formas como o ano etc
console.log (`Agora são exatamente ${hora} horas`)

if (hora >= 0 && hora <= 5) {
    console.log ('Boa Madrugada!!')
} else if (hora < 12) {
    console.log ('Bom dia!!')
} else if (hora <= 18) {
    console.log ('Boa Tarde!!')
} else if (hora <= 23) {
    console.log ('Boa Noite!!')
}