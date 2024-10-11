const { crearArchivo } = require('./helpers/multiplicar3');

console.clear();

// const base = 2

// crearArchivo(base)
// .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
// .catch(err => console.log(err))

console.log('process.argv:  ' ,process.argv); // Imprime los procesos que vienen de la consola

const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');

console.log(base); // Se puede comprobar sin argumentos node app7

/**
 * El proyecto posterior trata de crear documentación y poder trabajar desde la consola
 * de esta aplicación es decir, que por ejemplo en la línea de comandos se ingresa
 * lo siguiente: node app7 --base=9 limit=12, entonces hará las tablas 
 * del 9 al 12 por ejemplo. También se puede usar para saber información de la App
 * por ejemplo su versión o banderas que se pueden utilizar en la aplicación.
 */
