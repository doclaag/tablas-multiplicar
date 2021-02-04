const { crearArchivo } = require('./helper/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log(argv);

crearArchivo(argv.base, argv.hasta, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.rainbow))
    .catch(err => console.log(err));