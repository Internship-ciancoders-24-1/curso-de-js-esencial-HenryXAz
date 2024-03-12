## Strings en javascript

~~~javascript
var nombre = "henry"

// string a mayusculas
var nombeUpper = nombre.toUpperCase()

// string a minusculas
var nombreLower = nombre.toLowerCase()

// obtener un caracter en una posición específica
var caracter = nombre.charAt(0)

// tamaño de cadena
var longitud = nombre.length

// concatenación
var nombreConSaludo = "hola " + nombre

// concatenación con interpolación de texto
var interpolacion = `hola ${nombre}`

// substring
var sub = nombre.substr(1,2)

var ultimaLetra = nombre.charAt(nombre.length - 1)
~~~

## Numeros en javascript
~~~javascript
var edad = 25

// incrementar valor
edad = edad + 1
edad+=1
edad = edad++

// solucionar la precisión de decimales
var precioVino = 200.3
var total = Math.round(preciVino * 100 * 3) / 100

// obtener dos decimales
var totalStr = total.toFixed(2)

// convertir a numero
var total2 = parseFloat(totalStr)

~~~

## Funciones en javascript

~~~javascript
var nombre = "Henry";
var edad = 25;


function imprimirEdad(nombre, edad) {
    console.log(`${nombre} tiene ${edad} años`);
}

imprimirEdad();
~~~

## Objetos de javascript

~~~javascript
var henry = {
    nombre: "Henry",
    apellido: "Xitimul",
    edad: 25,
}

var dario = {
    nombre: "Dario",
    apellido: "Susnisky",
    edad 27,
}

function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

function birthday(persona)
{
    return {
        ...persona,
        edad: persona.edad + 1,
    }
}

~~~

## Comparaciones javascript

~~~javascript
var x = 4
var y = '4'

// comparar valores
x == y // true

// comparar el valor y el tipo
x === y // false

// objetos
var henry = {
    nombre: 'henry'
}

var henry1 = {
    nombre: 'henry'
}

// verifica la refenrencia de objeto
henry == henry1 // false
~~~