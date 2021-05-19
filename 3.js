// funciones CALLBACKS

// fB = Funcion B
const fB = function () {
    console.log("Función B ejecutada.");
};

// fA = Funcion A
const fA = function (callback) {
    callback();
};

fA(fB);

// Funciones AUTOEJECUTABLES

// Funcion autoejecutable
(function () {
    console.log("Hola!!");
})();

// Funcion autoejecutable con parametros
(function (name) {
    console.log(`¡Hola, ${name}!`);
})("Luz");