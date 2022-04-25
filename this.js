/*  -+-This-+- 

En lenguajes orientados a objetos tiene otras consideraciones, 
JS lo maneja de forma parecida al no ser específicamente un lenguaje de POO.*/


//-Contexto Global
console.log(this); //hace referencia directa a Window

//-Contexto Funcion
function mostrarThis(){
    console.log(`this en funcion ${this}`)
}

mostrarThis();// hace referencia al [object Window]

//-Con Use strict
function mostrarThisStrict(){
    'use strict'
    console.log(`This con strict mode: ${this}`)
}
mostrarThisStrict();// Undefined xqe con use strict no se puede acceder a un contexto general

//-Con Objetos
const persona = {
   nombre: 'Manuel',
    saludar: ()=>{
        //nombre = 'Roko'; así si existe la -v nombre
        console.log(`this con objetos: ${this.nombre}`); //this hace referencia nombre dentro de su scope.
    }
}

persona.saludar(); //Undefined xqe nombre existe dentro del objeto, pero no dentro de Saludar.

//-Con Clases

function Persona(n){
    this.nombre = n;
}

Persona.prototype.saludar = function(){
    console.log(`el nombre de la persona es: ${this.nombre}`);
}

const Roko = new Persona('Roko');
Roko.saludar();

const Roky = new Persona('Roky');
Roky.saludar();

console.log(Roko)