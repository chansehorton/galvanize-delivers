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

      $('#order_subtotal').html("$" +  subtotalFloat.toFixed(2));
      $('#order_tax').html("$" + taxFloat.toFixed(2));

      $('#order_total').html("$" + (subtotalFloat + taxFloat).toFixed(2));
    });
  };

  $('#order_button').on('click', function(e) {
    e.preventDefault();

    if ($('#order_table tbody').children().length < 1) {
      Materialize.toast('Please select at least one item', 4000);
    } else if ($('#name_input').val() === '' || $('#phone_input').val() === '' || $('#address_input').val() === '') {
      Materialize.toast('Please completely fill out the customer info section', 4000);
    } else {
      Materialize.toast('Your order is on its way!', 4000);
      $('#name_input').val('');
      $('#phone_input').val('');
      $('#address_input').val('');
      $('#order_total').html('$0.00');
      $('#order_subtotal').html('$0.00');
      $('#order_tax').html('$0.00');
      $('#order_table tbody').children().remove();
    };
  });
});
