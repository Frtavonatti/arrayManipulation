// let includeInArray = false;
// const variableSearch = (query) => {
//     for (let index = 0; index < pets.length; index++) {
//         const element = pets[index];
//         if (element === query) {
//             return includeInArray = true;
//         } else 
//         return includeInArray = false
//     }
// };

// console.log(variableSearch("cat"));
// console.log(variableSearch("miau"));

const pets = ["cat", "dog", "bat"]
const includeInArray = (query) => pets.includes(query)

// console.log(includeInArray("cat"));
// console.log(includeInArray("miau"));



// DESAFIO
const names = ["ana","santi","nico","anastasia"];


  export function filterByTerm(array, term) {
    const lowerCaseTerm = term.toLowerCase();
    return array.filter(item => item.includes(lowerCaseTerm))
  }

console.log(filterByTerm(names, "ANA"))


// const filteredArray = [];
// ESTO FUE UN INTENTO FALLIDO
// export function filterByTerm(array, term) {
//     if (array.includes(term)) {
//        filteredArray.push(array.filter(item => item === term))
//        return filteredArray;
//     } else return filteredArray;
//   }
// console.log(filterByTerm(names, "anas"))


