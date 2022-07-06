/* Chamando o id no Html */
const horas = document.getElementById('horas') 
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() { /* Variável que executa uma função a partir de um determinado tempo */
    let dateToday = new Date() /* Pegando a data atual */
    let h = dateToday.getHours()
    let min = dateToday.getMinutes()
    let seg = dateToday.getSeconds()

    if(h < 10) h = "0" + h
    if(min < 10) min = "0" + min
    if(seg < 10) seg = "0" + seg

    horas.textContent = h /* O texto predeterminado no html vai mudar conforme as horas mudam */
    minutos.textContent = min /* O texto predeterminado no html vai mudar conforme os minutos mudam */
    segundos.textContent = seg /* O texto predeterminado no html vai mudar conforme os segundos mudam */
})
