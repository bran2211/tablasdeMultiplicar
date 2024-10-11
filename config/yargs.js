/**
 * Parte lógica de yargs, solo se cortó y pegó acá por el momento
 * no tiene ningún cambio la lógica de yargs.js
 */

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false
})
.check((argv, options) => {
    if (isNaN(argv.b)) {
    throw 'La base tiene que ser un número';
    }
    return true;
})
.argv;

// Dando permisos de exportación a todo el programa, por eso se iguala a argv el module.exports
module.exports = argv;
