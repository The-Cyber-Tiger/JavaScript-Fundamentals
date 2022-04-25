/*  -+-Generators-+- 

Es una función que nos permite detener la ejecución del bucle en cualquier momento.

Se definen por el uso del -> * asterisco en la función
y de la palabra reservada "yield"
*/

const mostrar = document.getElementById('mostrar');
const generar = document.getElementById('generar');

function * generador(){
    for(let i = 0; i<5; i++){
        yield( mostrar.innerHTML = i) //yield es como un return del estado específico de la función generador.
        if(i == 4){
            i++; //Interesante como con el uso de yield podemos quebrar la condicion del bucle
            console.log('DONE')
            console.log(i) //>5 
        }
    }
}

const g = generador()

generar.addEventListener('click',()=>{
    g.next() //Con .next() le decimos avance un paso más en el bucle
})