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

function subtotalMath() {
  var subtotal = 0;
  var tableRows = $('#order_table').children('tbody').children();

  for (var i=0;i<tableRows.length;i++) {
    var currentRow = $(tableRows[i]).children()[1];
    subtotal += parseFloat(currentRow.innerText.slice(1));
  };

  return subtotal;
};

function taxMath(subtotal) {
  return (subtotal * (.07));
};

$( document ).ready(function() {
  for (let i=0;i<itemArray.length;i++) {
    var itemLinkArray = $(itemArray[i].id).children().children();

    $(itemLinkArray[3]).on('click', function(e) {
      e.preventDefault();

      $('#order_table').children('tbody:last-child').append('<tr><td class="right-align">' + itemArray[i].name + '</td><td class="right-align">' + itemArray[i].price + '</td></tr>');

      var subtotalFloat = subtotalMath();
      var taxFloat = taxMath(subtotalFloat);
      var totalFloat = subtotalFloat + taxFloat;
      console.log(typeof subtotalFloat);

      $('#order_subtotal').html("$" +  subtotalFloat.toFixed(2));
      $('#order_tax').html("$" + taxFloat.toFixed(2));

      $('#order_total').html("$" + (subtotalFloat + taxFloat).toFixed(2));
    });
  };
});
