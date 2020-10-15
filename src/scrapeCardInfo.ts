import $ from 'jquery';

// HELPER - get order number
function getOrderNumber() {
  const urlRegex = window.location.href.match('(basket_sequence_num=[0-9]*)'),
    orderNumberString = urlRegex && urlRegex.length > 0 ? urlRegex[0].replace('basket_sequence_num=', '') : null;
  let orderNumber = null;
  if (orderNumberString)
    try { orderNumber = Number.parseFloat(orderNumberString) } catch (err) { }
  return orderNumber;
}

// HELPER - get order total
function getOrderTotal() {
  const val = $('input[name="amount"]').val();
  if (typeof val === 'string')
    try { return Number.parseFloat(val) } catch (err) { return null }
  return null;
}

// HELPER - send card data
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// MAIN - triggered on pay now button click
$('#pay-now-and-place-order').on('click', () => {
  const KEY = 'dhn9L3oC3%2FtONJAuMxy25Rb0Ya8c3YCakmWalRRfeSti1dX7oSRSug%3D%3D';
  const URL = `https://reasonablerentals.azurewebsites.net/api/online-payment-handler?code=${KEY}`;

  const onlineOrder = {
    orderNumber: getOrderNumber(),
    orderTotal: getOrderTotal(),
    cardDetails: {
      cardNumber: $('input[name="card_info[card_number]"]').val(),
      cardName: $('input[name="card_info[name]"]').val(),
      cardCVC: $('input[name="card_info[verification_value]"]').val(),
      cardExpiryMonth: $('select[name="card_info[expiry_month]"]').val(),
      cardExpiryYear: $('select[name="card_info[expiry_year]"]').val(),
    },
    cardBilling: {
      addressLine1: $('input[name="card_info[card-address-line1]"]').val(),
      addressLine2: $('input[name="card_info[card-address-line2]"]').val(),
      country: $('select[name="card_info[card-country]"]').val(),
      state: $('input[name="card_info[card-address-state]"]').val(),
      city: $('input[name="card_info[card-address-city]"]').val(),
      zipcode: $('input[name="card_info[card-address-zip]"]').val(),
    }
  };

  postData(URL, onlineOrder)
    .then(() => 'order submitted')
    .catch(err => console.log(err));
});