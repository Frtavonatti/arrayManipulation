// DECLARACIÓN ARRAY
const matriz = [
    [1,2,3],
    [4,5,6, [[1,2], 3, 5]],
    [7,8,9]
];

// // SOLUCION CON UN FOR LOOP
const newFlat = [];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        if (Array.isArray(element)) {
            for (let k = 0; k < element.length; k++) {
                const subnivel = matriz[i][j][k];
                newFlat.push(subnivel)}
        } else {
            newFlat.push(element)
        }
    }
}

console.log(newFlat)

// SOLUCIÓN CON FLAT
const flat = matriz.flat(3)
flat 
// const flat2 = flat.flat()
// flat2
// const flat3 = flat2.flat()
// console.log(flat3)