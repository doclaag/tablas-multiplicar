// Requierds
const argv = require('yargs')
    .option('base', {
        alias: 'b',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('listar', {
        alias: 'l',
        type: 'boolean',
        default: false,
        describe: 'Muestrar la tabla de multiplicar en consola'
    })
    .option('hasta', {
        alias: 'h',
        type: 'number',
        default: 10,
        describe: 'Es el límite de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw `Ingrese un número`;
        }
        return true;
    })
    .check((argv, options) => {
        if (isNaN(argv.hasta)) {
            throw `Ingrese un número`;
        }
        return true;
    })
    .argv;

module.exports = argv;