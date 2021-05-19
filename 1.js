//Creacion de funciones

// Funcion por declaracion
function saludar() {
    return "Hola";
}
console.log(saludar()); // Hola
console.log(typeof saludar); // function

// Funcion por expresión
const saludo = function saludar() {
    return "hola";
};
console.log(saludo()); // hola

