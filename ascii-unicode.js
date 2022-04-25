/*  -+-ASCII & UNICODE-+- 

son estándards para la representación del alfabeto en código de caracteres

ASCII: Creado para la lengua Inglesa, se codifica convirtiendo el código a binario (7 bits)

El formato UNICODE es el más usado actualmente y es actualizado por la organización Unicode.

UNICODE: Creado para abarcar distintas lenguas entre ellas el español, tiene más de 100.000 caracteres.
    Existen 3 variantes de UNICODE:
        *.UTF-8: Codificación binaria en 1,2,3 o 4 bytes eficiente con lenguas latinas.
        *.UTF-16: Codificación de plano BMP en 2 bytes y de otros planos en 4 bytes.
        *.UTF-32: Codificación de todos los planos en 4 bytes.

    +El Unicode asigna un código numérico a cada carácter.
    +Los caracteres se agrupan en planos.
        -Cada plano se codifica en 2 bytes.
    +Planos más importantes:
        -BMP(Basic Multilingual Plane) Uitilizado para lenguas actuales.
        -SMP(Suplementary Multilingual Plane) Lenguas antiguas.
        -SIP(Suplementary Ideographic Plane) Para lenguajes Chinos, Japoneses y Koreanos.
*/

//Para representar un caracter Unicode UTF-16 en JS utilizamos(\u) seguido del código:

let cadena = '\u0041';
console.log(cadena) //> A

let hola = '\u0048\u004F\u004C\u0041';
console.log(hola); //> HOLA

//UNICODE + ASCII
console.log(hola + '\u003F'); //>HOLA?

