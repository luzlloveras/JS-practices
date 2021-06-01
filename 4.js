// Funciones CLAUSURAS
// Clausura: Función incr()
const incr = (function () {
        let num = 0;
        return function () {
          num++;
          return num;
        };
})();

console.log(typeof incr);
console.log(incr()); // 1
console.log(incr()); // 2
console.log(incr()); // 3

// Funciones ARROW
const arrowFunction = () => {
    console.log("Función arrow ejecutada.");
};

console.log(arrowFunction());