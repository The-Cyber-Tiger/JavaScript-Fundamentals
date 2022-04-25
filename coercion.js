/*  -+-Coerción-+- 

se refiere a la forma en que JS maneja el tipo de dato,
si tenemos una suma de inputs nos arrojará una concatenación de strings,
sin embargo si los multiplicamos JS los convierte automáticamente a numbers.
Esto es llamado ->Coerción Implícita 
y cuando especificamos el tipo de dato se llama ->Coerción Explícita
*/

const data1 = document.querySelector('#data1')
const data2 = document.querySelector('#data2')
const btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    // console.log('clicked')
    dato = Number(data1.value); //usando la clase 'Number()' convertimos el string a number "C.Explícita"
    dato2 = Number(data2.value);
    let resultado = dato + dato2;
    console.log(`el resultado: ${resultado} y el typeOf: ${typeof(resultado)}`)
})

