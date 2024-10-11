//libreria interna
const fs = require('fs');

const base = 500;
let salida = '';

console.clear();
console.log('========================');
console.log(`   Tabla del: ${base}`);
console.log('========================');

for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;  
}

console.log(salida);

// Escribir la tabla en un archivo de texto
fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`tabla-${base}.txt creado con writeFile`);  
});