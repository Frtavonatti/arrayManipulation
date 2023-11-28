const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const busqueda = products.find(item => item.id === "🌭")
const searchIndex = products.findIndex(item => item.id === "🌭")

searchIndex
console.log(products[searchIndex].name); 

