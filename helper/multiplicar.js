// Requierds
const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } ${ 'X'.america } ${ i } ${ '='.red} ${ base * i }`.green);
    }
};

const crearArchivo = async(base, limite = 10, listar = false) => {

    try {
        if (!Number(base)) {
            reject(`El valor ingresado "${base}" no es número`.bgBrightRed);
            return;
        }

        let data = '';
        let consola = '';

        for (let i = 1; i <= limite; i++) {
            if (i < limite) {
                data += `${base} X ${i} = ${base * i}\n`;
                consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
            } else {
                data += `${base} X ${i} = ${base * i}`;
                consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}`;
            }
        }

        if (listar == true) {

            console.log(consola);

        }

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, data);

        return `\ntabla-${base}.txt`.rainbow;

    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo,
    listarTabla
};