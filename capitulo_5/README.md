## Clases en javascript

~~~javascript
// prototipos

function Persona(nombre, apellido, altura) 
{
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function()
{
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function ()
{
  return this.altura >= 1.8
}

var jose = new Persona('jose', 'lopez', 1.85);
jose.saludar()
jose.soyAlto()

var henry = new Persona('henry', 'xitimul', 1.70)
henry.saludar()
henry.soyAlto()


~~~

## Herencia de prototipos

~~~javascript
function heredaDe(prototipoHijo, prototipoPadre)
{
  var fn = function() {
    
  }
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoPadre
}

function Persona(nombre, apellido, altura) 
{
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function()
{
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function ()
{
  return this.altura >= 1.8
}

function Desarrollador(nombre, apellido)
{
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() 
{
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

henry = new Desarrollador('henry', 'xitimul', 1.70)
henry.saludar()
~~~

## Herencia es2015
~~~javascript
class Persona
{
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  
  saludar()
  {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`);
  }
  
  soyAlto()
  {
    return this.altura >= 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura)
  {
      super(nombre, apellido, altura);
  }
  
  saludar()
  {
    console.log(`Hola soy ${this.nombre} y soy desarrollador`)
  }
}
~~~