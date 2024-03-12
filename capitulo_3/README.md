## Condicionales

~~~javascript
var henry = {
    nombre: "Henry",
    apellido: "Xitimul",
    edad: 25,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
}


function imprimirProfesiones(persona) 
{
    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero) {
        console.log('ingeniero')
    }

    if(persona.cocinero) {
        console.log('cocinero')
    }

    if(persona.cantante) {
        console.log('cantante')
    }

    if(persona.dj) {
        console.log('dj')
    }

    if(persona.guitarrista) {
        console.log('guitarrista')
    }
}

const MAYORIA_EDAD = 18;

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_EDAD;
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })


function imprimirSiEsMayorDeEdad(persona) 
{
    if(esMayorDeEdad(persona.edad)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}
~~~

## Bucles en javascript

~~~javascript
const henry = {
  nombre: "henry",
  edad: 25,
  peso: 65,
}

console.log(`Al inicio del año ${henry.nombre} pesa ${henry.peso}`)

const PESO = 0.2
const DIAS_ANIO = 365

const aumentarPeso  = (persona) => persona.peso += PESO;

const adelgazar = (persona) => persona.peso -= PESO;

// bucle for
for(let i = 1; i<=DIAS_ANIO; i++) {
  var random = Math.random()

  if(random < 0.25) {
    // aumenta de peso
    aumentarPeso(henry);
  } else if(random < 0.50) {
    // disminuye peso
    adelgazar(henry);
  }
}

console.log(`Al final del año ${henry.nombre} pesa ${henry.peso.toFixed(2)}`)

// bucle while
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = henry.peso - 3;
var dias = 0;

while (henry.peso > META) {
  if ( comeMucho() ) {
    aumentarPeso(henry)
  }

  if ( realizaDeporte() ) {
    adelgazar(henry)
  }

  dias++;
}

console.log(`Pasaron ${dias} días y ${henry.nombre} pesa ${henry.peso.toFixed(2)}`)
~~~