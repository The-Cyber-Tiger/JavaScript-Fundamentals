/*  -+-Binding-+- 

Es una función que se utiliza para ligar el this al objeto o función, existen 5 tipos:

    1. Lexical Binding (Arrow Functions)
    2. New Binding (Instanciar Objetos)
    3. Explicit Binding (Invocación Indirecta)
    4. Implicit Binding (Invocación de Método)
    5. Default Binding (Invocación Directa)

*/


/* 5. Default Binding  */

const defaultBinding = function(){
    console.log(`Hola, yo soy: `,this)
}

defaultBinding(); //-> Window, this en un contexto global hace referencia al objeto global Window y en modo estricto será: undefined.

/* 4. Implicit Binding */

const familia = {
    nombre: "Roy",
    saludar: function(){
        console.log(`Hola, yo soy ${this.nombre}`);
    },
    doggy: {
        nombre: "Roko",
        saludar: function(){
            console.log(`Y yo soy ${this.nombre}`);
        }
    }
}

familia.saludar();
familia.doggy.saludar();

// Errores comúnes:

const errorThis = {
    nombre: "Roy",
    saludar: function(){
        console.log(`Hola yo soy: ${this.nombre}`)
    }
}

//Queriendo asignar el metodo saludar a una variable el this se pierde

// const saludo = errorThis.saludar;
// saludo();//->"Hola yo soy: undefined" porque no tiene la propiedad nombre por lo tanto no puede asignarlo.

/* 3. Explicit Binding */

const hiBro = {
    nombre: 'Roy',
    saludar: function(gritando, conDespedida){

        const saludoNormal = `Hola me llamo ${this.nombre}`;
        const despedidaNormal = `Bye`;

        const saludo = gritando ?
        saludoNormal.toLocaleUpperCase() : saludoNormal;

        const despedida = gritando ?
        despedidaNormal.toLocaleUpperCase() : despedidaNormal;

        console.log(saludo);

        if(conDespedida){
            console.log(despedida)
        }
    }
}

// hiBro.saludar(true,true)

// // Para aplicarlo a un nuevo objeto y que no pierda el this agregamos un método
// const roko = {nombre: 'Roko'} // <- nuevo método
// roko.saludar = hiBro.saludar

// roko.saludar(true, true);
// console.log(roko)

//Pero tendríamos que hacerlo constantemente, en lugar de eso usamos .call() que es lo mismo que .apply() solo que apply usa un array para los params []

hiBro.saludar.call({nombre: 'pepe'},true,true) //con .call() especificamos el nuevo objeto al que se va a referir this

//Esto esta bien pero seguimos trabajando sobre el objeto original

// Para obtener una nueva función usamos .bind() para enlazarla al objeto original y el this no se pierda
const boundHi = hiBro.saludar.bind({nombre: 'roky'},true,true) 
boundHi()

/* 2. New Binding */

function Human(nombre){ //Clase o función constructora
    this.nombre = nombre
}

const Roy = new Human('Roy'); //Utilizando new se hace un binding a nuestra función constructora, por lo tanto el this sabe siempre su lugar.

/* 1. Lexical Binding */
const Mars = {
    nombre: 'Marx',
    saludar: function(){
        const hola = () => { // Se produce con los caracteres de flecha al usar las Arrow Functions 
            console.log(`Hi from ${this.nombre}`) //El this se enlaza al arrow function
        }
        hola();
    }
}

Mars.saludar()