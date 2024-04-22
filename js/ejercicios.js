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

//ejercicio 4 

function imprimirArreglo(...elementos) {
    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i]);
    }
}

//ejercicio 5

function contarRango(num1, num2) {
    rango = (num2 - num1) - 1
    console.log ('el rango entre los dos numeros es ' + rango)
    return
}

//ejercicio 6

function likes(num) {
    const abreviaciones= ['', 'K', 'M', 'MM']
    let i = 0

    while (num >= 1000 && i < abreviaciones.length) {
        num /= 1000
        i ++
    }

    let numInt = parseInt(num)

    if (i != 0){
        console.log ('el numero abreviado es ' + numInt + abreviaciones[i])
    }else {
        console.log ('el numero es ' + numInt)
    }
}

//ejercicio 7

function sumarRango(num1, num2) {
    suma= Number(0)

    if (num1 != num2) {
        while (num1 <= num2 ) {
            suma += num2
            num2 --
        }
    }else {
        suma = 0
    }
    
    console.log ('la suma de los numeros en el rango es ' + suma)
}

//ejercicio 8.1

function numeroDeAes(palabra = String) {
    let palabraS = String(palabra)
    let contador= Number(0)

    for (letra of palabraS) {
        if (letra === 'a') {
            contador ++
        }
    }

    console.log ('el numero de a es ' + contador)
}

//ejercicio 8.2 (cadena que toma el primer caracter que le pasas y lo busca)

function numeroDeCaracteres(palabra, caracter) {
    let palabraS = String(palabra)
    let caracterS = String(caracter)[0]
    let contador= Number(0)

    for (letra of palabraS) {
        if (letra === caracterS) {
            contador ++
        }
    }

    console.log ('el numero de ' + caracterS + ' es ' + contador)
}

//ejercicio 9

let suma = Number(0)

function sumarArreglo(array) {
    if (array.length === 0) {
        console.log ('el resultado es 0')
    } else {
        suma += (array[0])
        if (array.length === 1) {
            sumaSave = suma
            suma = 0
            console.log ('el resultado es ' + sumaSave)
            return
        }
        sumarArreglo(array.slice(1))
    }
}

//ejercicio 10

let multiplicacion = Number(1)

function multiplicarArreglo(array) {
    if (array.length === 0) {
        console.log ('el resultado es 1')
    } else {
        multiplicacion *= (array[0])
        // console.log(multiplicacion)
        if (array.length === 1) {
            let multiplicacionSave = multiplicacion
            multiplicacion = 1
            console.log ('el resultado es ' + multiplicacionSave)
            return
        }
        multiplicarArreglo(array.slice(1))
    }
}

//ejercicio 11