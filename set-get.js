/*  -+-Set y Get-+- 

Es una forma de añadir y consultar los atributos de un objeto de una manera más refinada,
pudiendo agregar validaciones en las funciones set y get.

El uso de Get y Set varía un poco de acuerdo al ES.
*/


// Forma más rudimentaria de hacerlo
const persona = {
    nombre: '',
    edad: ''
}

const roko = persona;
roko.nombre = 'Roko';
roko.edad = '2.5';

console.log(roko.nombre);

//Usando get & set < ES5
const amigo = {
    nombre: '',
    edad: '',
    getNombre: ()=>{
        return this.nombre
    },
    setNombre: (n)=>{
        this.nombre = n
    }
}

const Roko = amigo;
Roko.setNombre('Rok0');
console.log(Roko.getNombre())

//Usando get & set en ES6
const friends = {
    nombre: '',
    edad: '',
    get nombre(){
        return this.nombre_value
    },
    set nombre(n){
        this.nombre_value = n
    }
}

const twinky = friends;
twinky.nombre = 'Twinky';
console.log(twinky.nombre)
console.log(twinky)