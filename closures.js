/*  -+-Clousures-+- 

O Encapsulación, se refiere a la manera en que podemos encerrar una variable dentro de un scope
para que no pueda ser accedida de forma global. La función es autoejecutable y devuelve un return con las funciones "privadas".


 */

// Antes se hacía uso del IIFE
// IIFE - Inmediatily.Invoque.Function.Expression
// Se declaraba una función que se autoinvocaba a sí misma y que encapsulaba el acceso a la variable
(function(){//*función anónima
    var edad = 37
    console.log(edad)
})()//*con el último->() se ejecutaba inmediatamente la función previa.



/* Con la llegada de ES 6 con las variables let y const el uso del IIFE se descontinúa.*/
function CrearUsuario(n){
    let nombre = n;
    return {
        setNombre: function(n){
            nombre = n
        },
        getNombre: function(){
            console.log(nombre)
        }
    }
}

let usuario1 = CrearUsuario('Roko');
usuario1.setNombre('Roy')
usuario1.getNombre();

//Otro Ejemplo de Closure

const miContador = (function(){
    let _contador = 0;

    function incrementar(){
        return _contador++;
    }

    function restar(){
        return _contador--;
    }

    function resultado(){
        return _contador;
    }

    return {
        incrementar: incrementar,
        restar: restar,
        resultado
    }

})();

miContador;
miContador.valor();
miContador.valor();
miContador.restar();
miContador.resultado();
