//for (let i = 1; i <= 10; i++) 
    //console.log(`5 x ${i} = ${5 * i}`);

let base = 5;

const tabla = (base=5) => {
    let resultado = ''
    console.log(`---Tabla del ${base}-----`);
    for (let i = 1; i <= 10; i++) {
        resultado = resultado + `${base} x ${i} = ${base * i}\n`;
    }
    return resultado
};

console.log(tabla(100));
