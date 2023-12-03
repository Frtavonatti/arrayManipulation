// ARRAY A TRABAJAR EN AMBOS EJEMPLOS
const elements = ['Fire', 'Air', 'Water'];

// SOLUCION CON JOIN ()
const unir = elements.join("--")
console.log(unir)

// Se declara una variable llamada joiner e inicializada como una cadena vacía. 
// Esta variable se utilizará para almacenar la concatenación de los elementos del array.

// Si declaras la variable joiner dentro del bucle for, cada vez que se itere, la variable se reiniciará a una cadena vacía.
// Esto significa que no acumularías los valores de los elementos del array y el separador en una cadena continua, sino que obtendrías una cadena diferente en cada iteración

// SOLUCION CON UN FOR LOOP
// const elements = ['Fire', 'Air', 'Water'];
let joiner = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
    const element = elements[index]; 
    if (index === elements.length - 1) {
        joiner = joiner + element;
    }
    else joiner = joiner + element + separator;
}

console.log(joiner)


// EXPLICACIÓN DE SPLIT
const title = "Curso de manipulación de arrays"
const spliter = title.toLowerCase().split(" ")
const unificator = spliter.join("*-*")
console.log(spliter)
console.log(unificator)