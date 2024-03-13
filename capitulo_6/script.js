const API_URL = 'https://swapi.py4e.com/api/';

const PEOPLE_URL = 'people/:id';

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

const opts = {
    crossDomain: true,
}

const onResponse = function(persona) {
    console.log(`Hola soy ${persona.name}`);
}

async function obtenerPersonajes()
{
    var ids = [1,2,3,4,5,6,7]
    var promises = ids.map(id => obtenerPersonaje(id));

    try {
        var personajes = await Promise.all(promises)
        console.log(personajes);
    } catch (id) {
        console.log(id);
    }
}

obtenerPersonaje()

function obtenerPersonaje(id)
{
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, opts, function(data) {
            resolve(data);
        }).fail(() => reject(id));
    })
}

obtenerPersonajes()

// var ids = [1,2,3,4,5,6,7]
// var promises = ids.map(id => obtenerPersonaje(id));
// Promise.all(promises)
//     .then(personajes => {
//         console.log(personajes)
//     })
//     .catch(id => console.log(id))



// obtenerPersonaje(1)
// .then(function(personaje) {
//     console.log(`Hola soy ${personaje.name}`);
//     return obtenerPersonaje(2)
// })
// .then((personaje) => { 
//     console.log(`Hola soy ${personaje.name}`);
//     return obtenerPersonaje(3)
// })
// .then((personaje) => {
//     console.log(`Hola soy ${personaje.name}`);
// })
// .catch(function(id) {
//     console.log(`sucedio un error al obtener ${id}`)
// })



// function obtenerPersonaje(id, callback)
// {
//     const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

//     $.get(url, opts, callback).fail(function() {
//         console.log(`No se pudo obtener el personaje ${id}`);
//     });

   
// }

// $.get(lukeUrl, {crossDomain: true}, onResponse);
// obtenerPersonaje(1, function(personaje){
//     console.log(`Hola soy ${personaje.name}`)
//     obtenerPersonaje(2, function(personaje) {
//         console.log(`Hola soy ${personaje.name}`)
//         obtenerPersonaje(3, function(personaje) {
//             console.log(`Hola soy ${personaje.name}`)
//         });
//     });
// });
