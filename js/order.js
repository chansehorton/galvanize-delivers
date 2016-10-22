'use strict';
var itemArray = [
  {
    id: '#burger',
    price: '$8.99',
    img: 'img/burger.jpg',
    name: 'Royale with Cheese'
  },
  {
    id: '#pizza',
    price: '$11.99',
    img: 'img/pizza.jpg',
    name: 'Arugula Pie'
  },
  {
    id: '#ribs',
    price: '$14.99',
    img: 'img/ribs.jpg',
    name: 'Smoked Swine'
  },
  {
    id: '#ice_cream',
    price: '$7.99',
    img: 'img/ice_cream.jpg',
    name: 'Ice Cream Biscuit'
  }
];

$( document ).ready(function() {
  for (var i=0;i<itemArray.length;i++) {
    console.log($(itemArray[i].id).children);
  };
});
