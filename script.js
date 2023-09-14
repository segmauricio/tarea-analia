/*var numero = 1;
var texto = "Hi";
var verdadero = true;
var falso = false;
var nulo = null;
var indefinido = undefined;
var array = ['hola', 1, true, 1.5];


console.log(numero + ' ' + typeof numero);
console.log(texto + ' ' + typeof texto);
console.log(verdadero + ' ' + typeof verdadero);
console.log(falso + ' ' + typeof falso);
console.log(nulo + ' ' + typeof nulo);
console.log(indefinido + ' ' + typeof indefinido);
console.log(array + ' ' + typeof array);


let number = prompt('Ingrese un numero: ');
if (number > 10) {
    console.log(number + '  Es mayor a 10')
} else if (number < 10) {
    console.log(number + '  Es menor a 10')
} else if (number === 10) {
    console.log(number + '  Es igual a 10')
}


if (Number.isInteger(number / 2)) {
    console.log(number + " Es numero par")
} else {
    console.log('Es impar')
}


let letra = prompt('Ingrese una letra')
if (letra === 'a') {
    console.log(letra + ' Es una vocal')
} else if (letra === 'e') {
    console.log(letra + ' Es una vocal')
} else if (letra === 'i') {
    console.log(letra + ' Es una vocal')
} else if (letra === 'o') {
    console.log(letra + ' Es una vocal')
} else if (letra === 'u') {
    console.log(letra + ' Es una vocal')
} else console.log(letra + ' Es una consonante')


let edad = prompt('Ingrese su edad')
if (edad > 18 || edad == 18) {
    console.log('Tienes ' + edad + ' ya eres mayor de edad');
} else console.log('Tienes ' + edad + ' aun eres menor de edad');


let week = prompt('Ingrese un numero de la semana (1 al 7');

if (week == 1) {
    console.log('El numero ' + week + ' corresponde al dia Domingo')
} else if (week == 2) {
    console.log('El numero ' + week + ' corresponde al dia Lunes')
} else if (week == 3) {
    console.log('El numero ' + week + ' corresponde al dia Martes')

} else if (week == 4) {
    console.log('El numero ' + week + ' corresponde al dia Miercoles')

} else if (week == 5) {
    console.log('El numero ' + week + ' corresponde al dia Jueves')

} else if (week == 6) {
    console.log('El numero ' + week + ' corresponde al dia Viernes')

} else if (week == 7) {
    console.log('El numero ' + week + ' corresponde al dia Sabado')

} else console.log('El numero ingresado no corresponde a ningun dia de la semana');




let number1 = prompt('Ingrese un numero');
let number2 = prompt('Ingrese otro numero');

function suma(number1, number2) {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let resultado = num1 + num2;
    console.log('La suma de ambos numeros es: ' + resultado);
    return resultado;

}
console.log(suma(number1, number2));




let number = prompt('Ingrese un numero');

function parImpar(number) {
    let num1 = parseFloat(number);
    if (Number.isInteger(num1 / 2)) {
        console.log(num1 + " Es numero par")
    } else {
        console.log('Es impar')
    }

    return number;
}

console.log(parImpar(number));




function sumaArray(num) {
    let suma = 0;

    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }
    return suma;
}

const array = [10, 8, 6];
const res = sumaArray(array);
console.log('La suma del array es: ', res);




function foundElement(array1, array2) {
    const elementosComunes = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                elementosComunes.push(array1[i]);
                break;
            }
        }
    }

    return elementosComunes;
}

const arrayA = [10, 20, 50, 14, 5];
const arrayB = [3, 4, 5, 6, 7];

const elementosComunes = foundElement(arrayA, arrayB);
console.log(elementosComunes);




const array2 = ["hola", "mundo", "javascript"];

function convMayus(array) {

    const arrayMayusculas = [];

    for (let i = 0; i < array.length; i++) {
        const convertido = array[i].toUpperCase();
        arrayMayusculas.push(convertido);
    }

    return arrayMayusculas;
}

const array = convMayus(array2);
console.log(array);




const array2 = [10, 20, 30, 40, 50];

function suma(array) {
    const arraysuma = [];
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
        arraysuma.push(suma);
    }

    return arraysuma;
}

const arraysuma = suma(array2);
console.log(arraysuma);



for (let i = 1; i <= 10; i++) {
    console.log(i);
}




let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}



const num = [1, 2, 3, 4, 5];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}



function suma(n) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    return suma;
}

const num = 5; // Puedes cambiar este número por el que desees calcular.
const res = suma(num);

console.log(`La suma del 1 al ${num} es: ${res}`);



function suma(vector) {
    let suma = 0;
    let i = 0;

    while (i < vector.length) {
        suma += vector[i];
        i++;
    }

    return suma;
}

const array = [1, 20, 3, 45, 5];
const res = suma(array);

console.log(`La suma es: ${res}`);*/




//DOM y eventos
const boton = document.getElementById('botoncito');
const div = document.getElementById('contenedor');


boton.addEventListener('click', function() {
    div.textContent = 'Mensaje';
})


function cambiarColorFondoARojo() {
    div.style.backgroundColor = 'red';
}

div.addEventListener('mouseover', cambiarColorFondoARojo);

div.addEventListener('mouseout', function() {
    div.style.backgroundColor = '';
})

boton.addEventListener('click', function() {
    div.style.backgroundColor = '';
})

function fontSize(event) {
    const tamanoNuevo = 24;

    if (event.keyCode === 13) {
        div.style.fontSize = `${tamanoNuevo}px`;
    }
}


document.addEventListener("keydown", fontSize);

function cambiarContenido() {

    div.innerHTML = 'Nuevo mensaje';
}

div.addEventListener('dblclick', cambiarContenido);

function cambiarImagenDeFondo() {
    const body = document.body;
    body.style.backgroundImage = "url('https://img.freepik.com/vector-gratis/fondo-invierno-hojas-pinceles-color-pastel_220290-42.jpg?w=740&t=st=1694525923~exp=1694526523~hmac=2efa52ecabd712838085eb7b2df6cebcace4445bb7b5206195f19e363cc105f8')";
    document.body.style.backgroundSize = "cover";

}


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(cambiarImagenDeFondo, 3000);
});