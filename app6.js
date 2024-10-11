// app6.js

/**
 * Ejercicio - Conversión a función promesa a Async en multiplicar3.js
 * ------------- MEJORANDO EL CÓDIGO OPCIÓN 2 -------------
 * Acá se manda a llamar la desestructuración de multiplicar3.js
 * que ahora ya tiene permisos para importar crearArchivo
 * Se transformó la promesa en una función Async para una función
 * asíncrona para que se ejecute más óptimamente que la promesa.
 * Esta función Async maneja el éxito con el try y el error con catch
 */

const { crearArchivo } = require('./helpers/multiplicar3');

/**
 * Se creó la carpeta helpers para crear toda la lógica
 * de la aplicación en un archivo dentro de esta carpeta llamado
 * multiplicar.js
 */

console.clear();

const base = 222;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

/**
 * El proyecto posterior trata de crear documentación y poder trabajar desde la consola
 * esta aplicación es decir, que por ejemplo en la línea de comandos se ingresa
 * lo siguiente: node app7 --base=9 limit=12, entonces hará las tablas
 * del 9 al 12 por ejemplo. También se puede usar para saber información de la App
 * por ejemplo su versión o banderas que se pueden utilizar en la aplicación.
 */
