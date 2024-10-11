const { crearArchivo } = require('./helpers/multiplicar5');
const colors = require('colors');
const argv = require('./config/yargs3');
const fs = require('fs');
const path = require('path');

console.clear();

// Función para centrar texto
const centerText = (text, width = 40) => {
    const textLength = text.replace(/\x1B\[[0-9;]*m/g, '').length; // Eliminar los códigos de colores
    if (textLength >= width) {
        return text;
    }
    const totalPadding = width - textLength;
    const paddingLeft = Math.floor(totalPadding / 2);
    const paddingRight = totalPadding - paddingLeft;
    return ' '.repeat(paddingLeft) + text + ' '.repeat(paddingRight);
};

// Función para crear títulos con un fondo más varonil
const title = (text) => {
    return colors.bgBlue.black(centerText(text, 40)); // Azul oscuro
};

// Encabezado inicial mejorado
console.log(colors.rainbow('='.repeat(40)));
console.log(centerText('Bienvenido a la App de Branly'.bold.cyan));
console.log(centerText('Generador de Tablas de Multiplicar'.bold.blue));
console.log(colors.rainbow('='.repeat(40)));

// Mostrar argumentos de entrada
console.log(argv);

// Crear archivo con las tablas
crearArchivo(argv.b, argv.h, argv.limite, argv.l)
    .then(nombreArchivo => {
        console.log(colors.rainbow('='.repeat(40)));
        console.log(centerText(`${nombreArchivo} creado exitosamente en la carpeta "salida"`.green.bold));
        console.log(colors.rainbow('='.repeat(40)));

        const folderPath = path.join(__dirname, 'salida');
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }
    })
    .catch(err => console.log(err));
