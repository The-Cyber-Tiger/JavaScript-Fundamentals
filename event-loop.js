/*  -+-Event Loop-+- 

    _________             3.Scheduled TASK 
    |       |             [ . . . Tareas Asíncronas . . . ]
    |       |             2.Micro TASK Queue  
    | STAK  |             [ . . . Promesas . . . ]
    |  1    |             1.TASK Queue
    |   2   |             [ . . . Tareas . . . ]
    |_______|    EventLoop
                   <--->       
    

STAK: "Zona" dentro del motor de JS que ->Apila las funciones a manera de columna y ejecuta a medida que llegan del Task Queue.

1.TASK Queue: Es la cola de funciones y tareas que enviará al STAK.

2.Micro Task Queue: Promesas

3.Scheduled Task: Tareas asíncronas

Event Loop: Ciclo del motor de JS encargado de preguntar a las Queues en busca de tareas para enviarlas al STAK.

*/



//Ejemplo programa SÍNCRONO:
function saludar(){
    console.log('Hola Mundo');
}

function despedir(){
    console.log('Adios Mundo Cruel');
}

function main(){
    saludar();
    despedir();
}

main();

/* En el sig. codigo JS con su Hoisting primero almacena en el Task Queue: 
    main()->saludar()->despedir()
posteriormente el EventLoop recoge las tareas del Task Queue y las envía al STAK de forma:

    main()
    saludar()
    despedir()

Todo esto es normal pero como luce un programa asíncrono...*/

//Ejemplo de programa ASÍNCRONO:

function saludar2(){
    console.log('Hola Mundo2');
}

function despedir2(){
    console.log('Adios Mundo Cruel2');
}

function main2(){
    saludar2();
    setTimeout(() => {
    despedir2();
        
    }, 2000);
    console.log('Mensaje dentro del Main2');
}

main2();

/*En el programa Asíncrono sucede de la sig. forma, las tareas son almacenadas en la Task Queue:
    main2()->saludar2()->setTimeOut()->console.log() 
El Event Loop recoge las tareas del Task Queue para enviarlas al TASK, pero evalúa que existe un setTimeOut 
que es un callback que sucederá después de 2 segundos por lo que es el setTimeOut es enviado al Scheduled Task
como el Event Loop va recorriendo el 1.Task Queue -> 2.Micro Task Queue -> 3.Sceduled Task, encontrará el setTimeOut después de 2 seg.
para enviarlo al STAK.
*/

//Ejemplo usando PROMESAS:
function saludar3(){
    console.log('Hola Mundo3');
}

function despedir3(){
    console.log('Adios Mundo Cruel3');
}

function main3(){
    saludar3();
    Promise.resolve('mensaje promesa 1').then(msg=> console.log(msg));
    Promise.resolve('mensaje promesa 2').then(msg=> console.log(msg));
    despedir3();
}

main3();

/*En el ejemplo de promesas el Task Queue está conformado por:
    main3()->saludar3()->Promise1()->Promise2()->despedir3()
Posteriormente el Event Loop recoge las tareas main3(),saludar3(),despedir3() y las envía al STAK de ejecución
mientras que Promise1() y Promise2() son envíadas al Micro Task Queue donde serán recogidas una vez sean resueltas y enviadas al STAK
no necesariamente son ejecutadas en orden.
*/