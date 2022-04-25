/*  -+-Prototype-+- 

El atributo Prototype es inherente a todos los objetos y funciones
cuando accedemos al prototype de un objeto nos referirá a su clase u objeto padre de 
donde heredó sus propiedades.
*/


function Tutor(nombre,apellido){
    this.nombre = nombre
    this.saludar = function(){
        console.log(`Hola a todos soy ${this.nombre}`);
    }

    if(typeof(apellido)!== undefined){
        this.nombre_completo = nombre + " " + apellido;
    }
}

let roko = new Tutor("Roko","Pastrana");

console.log(roko.__proto__) //Hace referencia al objeto padre->Tutor function()

roko.edad = "2 años y 6 meses"; // a la instancia podemos agregarle nuevas propiedades

console.log(roko.edad)

let nemo =  new Tutor("Nemo","Pastrana")

console.log(nemo.edad) //->Undefined, pero estas propiedades NO serán compartidas con otras instancias...


// Para agregar nuevos atributos a un objeto y que sean inherentes a todas sus instancias tenemos que añadirlas al PROTO.
Tutor.prototype.color = this.color //agregamos al proto la propiedad color = negro
roko.color = "negro";
nemo.color = "gris";
console.log(roko.color)
console.log(nemo.color)





