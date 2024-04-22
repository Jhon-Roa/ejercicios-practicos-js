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

function removerCeros(array) {
    notZero = []

    for (item of array) {
        if (item != 0) {
            notZero.push(item)
        }
    }

    console.log(notZero)
}

//ejercicio 12

function transcribir(cadena) {
    let cadenaS = String(cadena)
    let arn = ''

    for (letra of cadenaS) {
        switch (letra) {
            case 'G': {
                arn = arn.concat('C');
                break;
            }
            case 'C': {
                arn = arn.concat('G');
                break;
            }
            case 'T': {
                arn = arn.concat('A');
                break;
            }
            case 'A': {
                arn = arn.concat('U');
                break;
            }
        }
    }

    console.log (arn)
}

//ejercicio 13

function capitalizar(palabra) {
    let capitalizacion = String(palabra).charAt(0).toUpperCase() + String(palabra.slice(1))

    console.log(capitalizacion)
}

//ejercicio 14

function max(array) {
    let mayor = 0

    for (item of array) {
        if (item > mayor) {
            mayor = item
        }
    }

    console.log('el numero mayor es ' + mayor)
}

//ejercicio 15

function pares(array) {
    let pares = []

    for (item of array) {
        if (item % 2 === 0) {
            pares.push(item)
        }
    }

    console.log(pares)
}

//ejercicio 16

function password(cadena) {
    let cadenaS = String(cadena)
    let contraseña = ''

    for (letra of cadenaS) {
        letraLower= letra.toLowerCase()
        if (letraLower === 'a' || letraLower === 'e' || letraLower === 'i' || letraLower === 'o' ) {
            switch (letraLower) {
                case 'a': {
                    contraseña = contraseña.concat('4');
                    break;
                }
                case 'e': {
                    contraseña = contraseña.concat('3');
                    break;
                }
                case 'i': {
                    contraseña = contraseña.concat('1');
                    break;
                }
                case 'o': {
                    contraseña = contraseña.concat('0');
                    break;
                }
            }
        }else if (letraLower === ' '){
            continue
        }else {
            contraseña = contraseña.concat(letraLower)
        }
    }

    console.log (contraseña)
}