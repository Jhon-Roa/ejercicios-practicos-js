export function calcularImpuestos() {
    let edad= parseInt(prompt('ingrese su edad'))
    let ingresos= parseFloat(prompt('ingrese sus ingresos'))

    if ((edad >= 18) && (ingresos >= 1000)) {
        let impuestos = ingresos*0.40
        alert ('sus impuestos son de ' + impuestos)
    }else {
        alert ('sus impuestos son de ' + 0)
    }
}