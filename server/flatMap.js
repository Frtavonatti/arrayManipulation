
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

const flatterMapper = users.flatMap(user => user.attributes)
flatterMapper

//DESAFIO
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  console.log(calendars.primaryCalendar[0].startDate)

//   const startDatesArray1 = calendars.primaryCalendar.flatMap(date => date.startDate)
//   const startDatesArray2 = calendars.secondaryCalendar.flatMap(date => date.startDate)
//   const solution = startDatesArray1.concat(startDatesArray2)
  
//Object.keys: indica los atributos que tiene un objeto ["primaryCalendar", "secondayCalendar"]
//Object.values: devuelve un array de los valores de las propiedades de un objeto.

const solution = Object.values(calendars).flat().map(item => item.startDate);
console.log(solution);

//DESAFIO 2
const array = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]

  console.log(array.length)

  // Objetivo: contar la cantidad de palabra en el array completo
  // 1. Dividir cada string en multiples strings donde cada palabra es uno
  // 2. Contar la cantidad de palabras/strings

  export function countWords(array) {
    // const joiner = array.join(" ")
    // const spliter = joiner.split(" ");
    // return spliter.length

    // flatMap se utiliza aquí para APLANAR EL ARRAY A UNA DIMENSIÓN y manejar casos donde 
    // el array de entrada podría contener subarrays
    const separateByWords =  array.flatMap(item => item.split(" "))
    const ammountOfWords = separateByWords.length;
    return ammountOfWords
  }

  console.log(countWords(array))