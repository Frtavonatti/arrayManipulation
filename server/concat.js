// DECLARACIÓN ARRAYS
const array1 = [1, 2, 3, 4,];
const array2 = [5, 6, 7, 8,];

//DECLARACIÓN SPREAD OPERATION
// de esta manera no hacamos referencia en memoria a array1 (no modificamos el array original)
const newArray1 = [...array1]

// SOLUCION CON UN FOR LOOP
for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    newArray1.push(element)
}
console.log(newArray1)

// EXPLICACIÓN CONCAT
// concat() es inmutable, no es necesario crear un spread operator
const concater = array1.concat(array2);
console.log(concater)