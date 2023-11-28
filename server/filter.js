const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];
// for (let index = 0; index < words.length; index++) {
//     const element = words[index];
//     if (element.length >= 6)
//     console.log(element);
// }

const answer = words.filter(item => item.length >= 6);
console.log(answer);

console.log("newArray: ", answer);
console.log("originalArray: ", words);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

//   const deliveredOrders = orders.filter(item => item.delivered == true);
//   const respuesta = deliveredOrders.forEach(item => console.log(item.customerName))

// el método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
  const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
  }

  console.log(search("Nico"))