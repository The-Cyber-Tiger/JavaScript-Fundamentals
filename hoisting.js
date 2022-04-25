/*  -+-Hoisting-+-

se refiere a la capacidad de JS de ejecutar una función antes de ser declarada
y sucede porque JS almacena en memoria todas las declaraciones de variables antes de ejecutar
cualquier otro segmento de código. */


// estructura tradicional (orden en el que son llamadas las funciones)

let nombre = 'Roko';

function Saludar(nombre){ //-primero se declaran y después se llaman 
    console.log(nombre)
}

Saludar(nombre);

// Gracias al Hoisting podemos hacer esto

let namex = 'Twinky';

Hello(namex) //Llamar a la función y después definirla

function Hello(name){
    console.log(name);
}

// El Hoisting no aplica en Variables