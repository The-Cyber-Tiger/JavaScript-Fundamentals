/*  -+-Regular Expressions-+- 

Son una serie de caracteres para realizar búsquedas de patrones en Strings.

Cada bandera o Flag representa un formato de búsqueda determinado.
*/


// Tenemos una cadena de texto
let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at quae voluptatem modi iusto, tenetur totam perspiciatis optio enim est quos molestiae itaque mollitia magni corporis asperiores et, tempora ipsa?";

// Y definimos nuestra regex para analizarla, existen 2 maneras de definirlas:
let regEx =  new RegExp("Lorem","") //(1)

let regEx2 = /lorem/ //(2)

// Y para probar nuestras regex usamos el método .test()
console.log(regEx.test(cadena)); //>True xqe la palabra "Lorem" existe en el texto.

// el método .exec() nos devuelve un array con la info de la búsqueda
console.log(regEx.exec(cadena)); //>True xqe la palabra "Lorem" existe en el texto.
