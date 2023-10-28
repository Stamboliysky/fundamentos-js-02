// Ejercicio 13: Closures

function contadorClosure() {
    let contador = 0

    return function () {
        contador++
        return contador 
    }
}
const incrementar = contadorClosure()
console.log(incrementar())
console.log(incrementar())
