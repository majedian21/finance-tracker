var init_stock_lookup;

init_stock_lookup = function() {
  $('#stock-lookup-form').on('ajax:before', function(event, data, status) {
    show_spinner();
  });

  $('#stock-lookup-form').on('ajax:after', function(event, data, status) {
    hide_spinner();
  });

  console.log("Init stock lookup called");
  $('#stock-lookup-form').on('ajax:success', function(event, data, status){
    $('#stock-lookup').replaceWith(data);
    init_stock_lookup();
  });

  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error) {
    hide_spinner();
    $('#stock-lookup-results').replaceWith(' ');
    $('#stock-lookup-errors').replaceWith('Stock was not found.');
  });
}

$(document).ready(function() {
  console.log("Document ready function");
  init_stock_lookup();
})