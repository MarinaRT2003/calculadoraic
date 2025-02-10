// calculadora.js

// function suma(a, b) {
//     return a + b;
// }
  
// function resta(a, b) {
//     return a - b;
// }

// function multiplica(a, b) {
//     return a * b;
// }

// function dividi(a, b) {
//     return a / b;
// }   

// function raizCuadrada(a) {
//     return Math.sqrt(a);
// }
  
// module.exports = { suma, resta, multiplica, dividi, raizCuadrada };

function suma(a, b) {
    return a + b;
   }
   function resta(a, b) {
    return a - b;
   }
   function multiplicar(a, b) {
    return a * b;
   }
   function dividir(a, b) {
    if (b === 0) {
    throw new Error("No se puede dividir por cero");
    }
    return a / b;
   }

   function pasarAKelvin(a){
    return a + 273;
   }

   module.exports = { suma, resta, multiplicar, dividir, pasarAKelvin };

   // Hacer las funciones accesibles en el navegador
//    window.suma = suma;
//    window.resta = resta;
//    window.multiplicar = multip;
//    window.pasarAKelvin = pasarAKelvin;