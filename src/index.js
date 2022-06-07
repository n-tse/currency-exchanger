//for UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from './currencyExchanger.js';

function clearFields() {
  $('#usdValue').val("");
  $('.showErrors').text("");
  $('.showEquivalent').text("");
}

$(document).ready(function() {
  $('#usdConvert').click(function() {
    let currencyToConvert = $('input:radio[name=currency]:checked').val();
    let usdValue = parseInt($('#usdValue').val());
    clearFields();
    let promise = CurrencyExchanger.getEquivalent(usdValue, currencyToConvert);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showEquivalent').text(`The equivalent of ${usdValue} USD in ${currencyToConvert} is ${body.conversion_result}`);
      // $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
}); 