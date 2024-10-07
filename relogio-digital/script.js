const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secoundsElement = document.getElementById('secounds')

//PARTE LÓGICA

function Timer() {
    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const secounds = date.getSeconds()

    hoursElement.textContent = Fixtime(hours)
    minutesElement.textContent = Fixtime(minutes)
    secoundsElement.textContent = Fixtime(secounds)
}

//Resolvendo o tempo

function Fixtime(time) {
    if (time < 10) {
        return "0"+time
    } else {
        return time;
    }
}

//Aplicando a automação
setInterval(Timer, 1000) //Setando um intervalo de reload