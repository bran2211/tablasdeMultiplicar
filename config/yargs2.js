/**
 * Se agrega un describe para que en la ayuda del uso de la app con help
 * describa de mejor forma la aplicación.
 */

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    // default: false, se quita ya que está por default en la app principal
    describe: 'Muestra la tabla en consola'
})
.check((argv, options) => {
    if (isNaN(argv.b)) {
    throw 'La base tiene que ser un número';
    }
    return true;
})
.argv;

module.exports = argv;
