const totals = [1,2,3,4]

let sum = 0;

// for (let index = 0; index < totals.length; index++) {
//     const element = totals[index];
//     sum = sum + element;
// }

const reductor = totals.reduce((sum, element) => sum + element, 0) 

reductor