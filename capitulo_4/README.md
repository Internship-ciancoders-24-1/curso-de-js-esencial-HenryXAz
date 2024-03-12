
## iterar colecciones en javascript

~~~javascript
var henry = {
  nombre: "henry",
  apellido: "xitimul",
  altura: 1.70,
}

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
}

var martin = {
  nombre: "martin",
  apellido: "gonzalez",
  altura: 1.85,
}

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
}

var personas = [henry, vicky, martin, paula]

// recorrer array
personas.forEach(persona => {
  console.log(`${persona.nombre}  mide ${persona.altura} mts`)
})

const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => altura < 1.7;

//filtrar array
personasAltas = personas.filter(esAlta)
personasBajas = personas.filter(esBaja)

// map 
const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100,
})
var personaCms = personas.map(pasarAlturaACms)

// acumular alturas
var acum = (acc, { altura }) => acc += altura
var acumulacionAlturas = personaCms.reduce(acum, 0)
acumulacionAlturas

~~~