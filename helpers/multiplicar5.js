const fs = require('fs');
const colors = require('colors');
const PDFDocument = require('pdfkit');
const path = require('path');

// Función para centrar texto
const centerText = (text, width = 40) => {
    const textLength = text.replace(/\x1B\[[0-9;]*m/g, '').length; // Eliminar códigos de color
    if (textLength >= width) {
        return text;
    }
    const totalPadding = width - textLength;
    const paddingLeft = Math.floor(totalPadding / 2);
    const paddingRight = totalPadding - paddingLeft;
    return ' '.repeat(paddingLeft) + text + ' '.repeat(paddingRight);
};

// Función principal para crear archivo de tabla de multiplicar
const crearArchivo = async(base = 5, hasta = 10, limite = 10, listar = false) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = base; i <= hasta; i++) {
            let tabla = '';
            
            // Título de cada tabla centrado
            const tituloTabla = centerText(`Tabla del ${i}`, 40);
            tabla += tituloTabla + '\n';
            tabla += '========================================\n'.green;

            consola += colors.bgBlue.black(`\n${centerText(`Tabla del ${i}`, 40)}\n`);
            consola += '========================================\n'.green;

            for (let j = 1; j <= limite; j++) {
                const linea = `${i} ${'x'.green} ${j} ${'='.green} ${i * j}\n`;
                tabla += linea;
                consola += linea;
            }

            tabla += '========================================\n\n';
            consola += '========================================\n'.green;
            salida += tabla;
        }

        if (listar) {
            console.log(colors.rainbow('='.repeat(40)));
            console.log(centerText(`TABLAS DEL ${base} AL ${hasta}`.bold.blue, 40));
            console.log(colors.rainbow('='.repeat(40)));
            console.log(consola);
        }

        // Crear archivo PDF
        const folderPath = path.join(__dirname, '..', 'salida');
        const filePath = path.join(folderPath, `tabla-${base}-al-${hasta}.pdf`);
        const doc = new PDFDocument();
        
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        doc.pipe(fs.createWriteStream(filePath));

        doc.fontSize(20).text(centerText(`Tablas del ${base} al ${hasta}`, 40), { align: 'center' });
        doc.moveDown();

        for (let i = base; i <= hasta; i++) {
            doc.fontSize(16).text(`Tabla del ${i}`, { align: 'center' });
            doc.moveDown();

            for (let j = 1; j <= limite; j++) {
                doc.fontSize(12).text(`${i} x ${j} = ${i * j}`, { align: 'center' });
            }

            doc.moveDown(2);
        }
       // Mensaje al final del PDF
       doc.moveDown(2);
       doc.fontSize(10).fillColor('gray').text('Creado por la App Branly de Tablas de Multiplicar', { align: 'center' });

        
        doc.end();


        return `tabla-${base}-al-${hasta}.pdf`;

    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
