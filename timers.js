/*  -+-Timers-+- 

Son funciones que son implementadas por el Browser y no son propias de JS, sin embargo
son implementadas de manera global por lo que son accesibles en todo el código.

Son High-Order-Functions que pueden ser usadas para postergar o repetir la ejecucion de
otras funciones*/

//Delaying the execution:
setTimeout(() => {
    console.log('Hello despues de 4 segundos');
}, 4000);

//Que pasa si necesitamos ejecutar una función cada 4 segundos, por siempre...
setInterval(() => {
    console.log('Hello cada 4 segundos');
}, 4000);

//Cancelando los Timers...
// como los timers programan una acción futura es posible cancelarla con su ID:

const miTimer = setTimeout(() => {
    console.log('No verás este mensaje ni en 0seg')
}, 0);

clearTimeout(miTimer)

// -Los timers no son una garantía de que serán ejecutados, puesto que si la CPU está MUY ocupada
// ignorará la ejecución de nuestro timer