function fuja() {
    var botaoNao = document.getElementById("nao")

    var larguraJanela = window.innerWidth
    var alturaJanela = window.innerHeight

    var maxX = larguraJanela - botaoNao.offsetWidth
    var maxY = alturaJanela - botaoNao.offsetHeight

    var aleatorioX = Math.floor(Math.random() * maxX)
    var aleatorioY = Math.floor(Math.random() * maxY)

    botaoNao.style.left = aleatorioX + "px"
    botaoNao.style.top = aleatorioY + "px"
}


function eba() {
    alert("Parabéns, você fez uma boa escolha ❤")

    alert("Ou não, agora vai ter que me aturar mais ❤")
}