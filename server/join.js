const elements = ['Fire', 'Air', 'Water'];

const unir = elements.join("--")
console.log(unir)

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    elements.push("++")
    console.log(elements);
}

console.log(elements);

