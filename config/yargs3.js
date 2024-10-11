const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Indica hasta qué número de tabla se debe calcular'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('limite', {
        alias: 'lim',
        type: 'number',
        default: 10,
        describe: 'Límite hasta donde calcular cada tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.h) || isNaN(argv.limite)) {
            throw 'Los valores de base, hasta y limite deben ser números';
        }
        return true;
    })
    .argv;

module.exports = argv;
