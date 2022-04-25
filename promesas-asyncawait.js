/*  -+-Promesas & Async Await-+- 

Una Promesa es una función que mantiene un estado de pendiente hasta que se cumple,
al crear una Promesa debemos especificar los 2 estados siguientes (resolve y reject) que son las
funciones que devolvera en caso de que sea resuelta o rechazada. Para recibir el resultado de estos estados
utilizamos la función .then() y .catch() respectivamente.

Las promesas pueden encadenarse (Promise chaining) y lucen algo así .then().then().then()

Con la llegada de ES6 surgió Async Await que trabaja con las Promesas de una forma más refinada
con esto evitamos el estado pendiente de las promesas, simplemente tenemos que especificar la funcion con async
y dentro de ella el await para 'esperar' por su respuesta.

para capturar el resultado utilizamos el try { } en caso de que todo salga bien y catch { } para capturar el error.

Luce de esta forma:
    async miFuncion(){
    try { await hacemosAlgo()}
    catch { console.log(error)}
}

*/

//Generamos algunos datos para recibirlos

const DATOS = [
    {
        id: 'Roko',
        fecha: '21/03/21'
    },
    {
        id: 'Twinky',
        fecha: '21/03/21'
    },
    {
        id: 'Nemo',
        fecha: '21/03/21'
    }
]

// const getDatos = ()=>{
//     setTimeout(() => {
//         return DATOS;
//     }, 1500);
// }

// console.log(getDatos()); // ->Undefined porque se ejecuta el console.log pero los datos no están listos

/* Para evitar lo anterior utilizamos las Promesas */

const getDatos = () => {
    return new Promise((resolve, reject)=>{
        if(DATOS.length === 0){
            reject( new Error('No hay data'))
        }else{
            setTimeout(() => {
                resolve(DATOS)
            }, 1500);
        }
    })
}


// console.log(
//     getDatos()
//     .then(respuesta =>console.log(respuesta))
//     .catch(error=>console.log(error))
//     );

/* La situación con las promesas es que mientras se resuelve produce un estado (Pending...) */

/* Con ES6 llegó Async Await que simplifica todo esto...*/
// Una función async() debe englobar el await 

const getData = async() =>{
    try  { // en caso de que todo salga bien...
        const data = await getDatos();
        console.log(data)
    }
    catch { // si no capturamos el error...
        console.log(e)
    }

}

getData();