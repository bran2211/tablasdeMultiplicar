# Generador de Tablas de Multiplicar

Este proyecto permite generar tablas de multiplicar desde una base hasta un número especificado, mostrando el resultado en consola o exportándolo como un archivo PDF con diseño estético.

## Opciones del comando

- **`-b, --base <number>`**: Especifica la base de la tabla de multiplicar (obligatorio).
- **`-h, --hasta <number>`**: Indica hasta qué tabla debe imprimir (opcional, por defecto es 10).
- **`--limite <number>`**: Define hasta dónde debe calcular cada tabla (opcional, por defecto es hasta 10).
- **`-l, --listar`**: Muestra las tablas en consola (opcional, por defecto no se listan).

## Ejemplo de uso

```bash
node app16 -l  -b 5 -h 10 --limite 12

