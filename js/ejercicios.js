//ejercicio 1 

function contrasenaValida(password) {
    if ((password === "2Fj(jjbFsuj") || (password === "eoZiugBf&g9")) {
        return true
    } else {
        return false
    }
}

//ejercicio 2

function calcularImpuestos(edad, ingresos) {
    if ((edad >= 18) && (ingresos >= 1000)) {
        let impuestos = ingresos*0.40
        console.log('sus impuestos son de ' + impuestos)
    }else {
        console.log('sus impuestos son de ' + 0)
    }
}

//ejercicio 3

function bmi(peso, altura) {
    let imc = peso / (altura ** 2)

    if (imc < 18.5) {
        console.log('tienes bajo peso')
    }else if (imc >= 18.5 && imc <= 24.9){
        console.log('tienes un peso normal')
    }else if (imc >= 25 && imc <= 29.9){
        console.log('tienes sobrepeso')
    }else if (imc >= 30){
        console.log('estas obeso')
    }
}