/** TODO add firebase */
// import { db } from "services/firebase/config";

// export const getProductsList = () => {
//   const products = db.ref("products")
//   return products.once("value").then(snapshot => snapshot.val());
// };

export const getProductsList = () => (
  [
    {
      id: 0,
      name: 'Маринара',
      price: 90,
      currency: 'грн',
      description: 'помидорами, чесноком, оливковым маслом, оливками и орегано.',
      img: 'image/marinara.jpg',
      category: [2]
    },
    {
      id: 1,
      name: 'Маргарита',
      price: 95,
      currency: 'грн',
      description: 'помидорами, моцареллой, пармезаном, оливковым маслом и базиликом.',
      img: 'image/margherita.jpg',
      category: [2]
    },
    {
      id: 2,
      name: 'Каприччоза',
      price: 110,
      currency: 'грн',
      description: 'помидорами, моцареллой, грибами, артишоками, чёрными оливками.',
      img: 'image/capricciosa.jpg',
      category: [1, 2]
    },
    {
      id: 3,
      name: 'Четыре сыра',
      price: 105,
      currency: 'грн',
      description: 'томатным и четырьмя различными сортами сыра.',
      img: 'image/four_chizz.jpg',
      category: [1, 2]
    },
    {
      id: 4,
      name: 'Четыре сезона',
      price: 120,
      currency: 'грн',
      description: 'оливки, артишоки, салями, чёрный перец, помидоры, моцарелла, грибы, варёные яйца.',
      img: 'image/four_seasons.jpg',
      category: [2]
    },
    {
      id: 5,
      name: 'Фунги',
      price: 110,
      currency: 'грн',
      description: 'с моцареллой, грибами, сосисками, с помидорами.',
      img: 'image/funghi.jpeg',
      category: [2]
    },
    {
      id: 6,
      name: 'Диабола',
      price: 100,
      currency: 'грн',
      description: 'пицца с салями и острым перцем',
      img: 'image/diablo.jpg',
      category: [1, 2]
    },
    {
      id: 7,
      name: 'Гавайская',
      price: 105,
      currency: 'грн',
      description: 'с ветчиной и ананасом.',
      img: 'image/hawaii.jpg',
      category: [2]
    },
  ]
);

export const getFilterList = () => (
  [{
    name: 'Популярное',
    category: 1
  },
  {
    name: 'Пицца',
    category: 2
  },
  {
    name: 'Десерты',
    category: 3
  },
  {
    name: 'Напитки',
    category: 4
  },
  ]
);

export const getNavList = () => {
  console.log('here');
  return [{
    name: 'О нас',
    category: 'about'
  },
  {
    name: 'Контакты',
    category: 'contacts'
  }
  ]
};

export const extrasTypes = () => (
  [{
    id: 0,
    name: "Стандарт",
    price: 0
  },
  {
    id: 1,
    name: "Сырный",
    price: 30
  },
  ]
);

export const sizeTypes = () => (
  [{
    id: 0,
    name: "Маленькая",
    price: 0
  },
  {
    id: 1,
    name: "Средня",
    price: 25
  },
  {
    id: 2,
    name: "Большая",
    price: 50
  },
  ]
);

export const getOrderList = () =>
  localStorage.getItem('orderList') ? JSON.parse(localStorage.getItem('orderList')) : [];

export const addItem = ({
  productId,
  extraId,
  sizeId
}) => {
  let order = localStorage.getItem('orderList') || [];
  if (order.length > 0) {
    order = JSON.parse(order);
  }
  const newOrderList = [
    ...order,
    createOrder({
      id: order.length,
      productId,
      extraId,
      sizeId
    })
  ];
  const result = JSON.stringify(newOrderList);
  localStorage.setItem('orderList', result);
  return newOrderList;
};

export const dropItem = (orderId) => {
  let order = localStorage.getItem('orderList') || [];
  if (order.length > 0) {
    order = JSON.parse(order);
  }
  const newOrdersList = order.filter(item => item.id !== orderId);
  const result = JSON.stringify(newOrdersList);
  localStorage.setItem('orderList', result);
  return newOrdersList;
}

const createOrder = ({
  id,
  productId,
  extraId,
  sizeId
}) => {
  const product = getProductsList().find(data => data.id === productId);
  const extras = extrasTypes().find(data => data.id === extraId);
  const size = sizeTypes().find(data => data.id === sizeId);
  return {
    id,
    img: product.img,
    price: product.price + extras.price + size.price,
    pname: product.name,
    ename: extras.name,
    sname: size.name,
    currency: product.currency,
    description: product.description,
  }
};