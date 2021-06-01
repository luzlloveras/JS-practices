// ARRAYS
// Forma tradicional
const array = new Array("a", "b", "c");

console.log(array[1]); // b

// Mediante literales 
const arreglo = ["a", "b", "c"]; // Array con 3 elementos
const empty = []; // Array vacío (0 elementos)
const mixto = ["a", 5, true]; // Array mixto (string, number, boolean)

console.log(arreglo[0]); // a 
console.log(empty[0]); // undefined
console.log(mixto[2]); // true

// Añadir elementos
array.push("d");
console.log(array[3]); // d

// Eliminar elementos
array.pop();
console.log(array[3]); // undefined

// Añadir elemento en posicion inicial
array.unshift('Z'); // Z
console.log(array[0]);

// Eliminar elemento en posicion inicial
array.shift();
console.log(array[0]); // a