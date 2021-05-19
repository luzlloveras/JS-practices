// funciones como objetos
const saludar = new Function("return 'Hola';");
console.log(saludar()); // Hola
console.log(saludar);   // [Function: anonymous]

// funcion anonima "saludo"
const saludo = function() {
    return "Que tal";
};
console.log(saludo);    // [Function: saludo]
console.log(saludo());  // Que tal