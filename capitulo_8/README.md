
## Extras

~~~javascript

function diasEntreFechas(fecha1, fecha2)
{
    const unDia = 1000 * 60 * 60 * 24;
    const diferencia = Math.abs(fecha1 - fecha2);


    return Math.floor(diferencia / unDia); 
}

const hoy = new Date();
const nacimiento = new Date(1998, 10, 8);

dif = diasEntreFechas(hoy, nacimiento) / 365
~~~

### Recursividad
~~~javascript
 function divisionEntera(dividendo, divisor)
{
  if(dividendo < divisor) {
    return 0;
  }
  
  return 1 + divisionEntera(dividendo - divisor, divisor);
}


divisionEntera(30,3)

~~~


### Memoizacion

~~~javascript
function factorial(n)
{
  if (!this.cache) {
    this.cache = {}
  }
  
  if (this.cache[n]) {
    return this.cache[n];
  }
  
  if(n === 1) {
    return 1;
  }
  
  this.cache[n] = n * factorial(n - 1);
  return this.cache[n];
}

~~~

### Closures
~~~javascript
function crearSaludo(finalFrase)
{
  return function(nombre)
  {
    return `Hola ${nombre} ${finalFrase}`;
  }
}

const buenosDias = crearSaludo('buenos días');
const buenasTardes = crearSaludo('buenas tardes');
const buenasNoches = crearSaludo('buenas noches');

console.log(buenosDias('henry'))
console.log(buenasTardes('jose'))
console.log(buenasNoches('maria'))
~~~

### Cuando usar punto y coma
El punto y coma es opcional en javascript salvo casos excepcionales, estos casos son:

* Cuando la siguiente línea empieza con array
* Cuando la siguiente línea empieza con commillas invertidas

Es importante mencionar que cuando se retorna el valor de una función, es necesario que no se haga un salto de línea, es necesario que el valor que se retorna vaya en la misma línea que la palabra reservada **return**, o al menos que inicie en la misma línea.
