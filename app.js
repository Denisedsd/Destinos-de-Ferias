var destinopraia = 0
var destinoserra  = 0
var destinoeco = 0

function votopraia() {
    destinopraia += 1
    console.log(destinopraia)
    resultadopraia.innerHTML = "Praia tem " + (destinopraia) + " votos"
}
    

function votoserra() {
    destinoserra += 1
    console.log (destinoserra)
    resultadoserra.innerHTML = "Serra tem " + (destinoserra) + " votos"
}

function votoeco() {
    destinoeco += 1
    console.log (destinoeco)
    resultadoeco.innerHTML = "Ecoturismo tem " + (destinoeco) + " votos"
}





