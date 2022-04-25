/*  -+-Scope-+-

se refiere al alcance en memoria de una variable (local, global)*/

let nombre = 'Roko'; //Scope Global xq es accesible desde cualquier parte de mi código

const saludar = () =>{

    let apellido = 'Van Buuren';  //Scope Local solo es accesible dentro de la función
    console.log(`nombre: ${nombre} | apellido: ${apellido}`);
}

saludar();

// console.log(apellido) error porque 'apellido' no esta definido

const funcion1 = () => {
    let saludo = 'Hola desde funcion 1'; //Herencia de Scope
    const funcion2 = ()=>{
        console.log(saludo) 
    }
    return funcion2()
}

funcion1();