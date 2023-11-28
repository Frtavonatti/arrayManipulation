const numbers = [1, 30, 49, 29, 10, 13];

// let allElementesArBiggerThan = true;
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if (element >= 1) allElementesArBiggerThan = false;
// }

const allElementesArBiggerThan = numbers.every(item => item <= 40)

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const everyoneIsYoungerThan = team.every(person => person.age <= 15);
  everyoneIsYoungerThan