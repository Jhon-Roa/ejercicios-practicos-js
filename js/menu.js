import  {contrasenaValida} from './ejercicio-1.js'
import  {calcularImpuestos} from './ejercicio-2.js'

let op = parseInt(prompt('1'))

switch (op) {
    case 1: {
        console.log (contrasenaValida());
        break;
    }
    case 2: {
        calcularImpuestos();
        break
    }
}