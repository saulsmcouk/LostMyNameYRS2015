function switchView(view_name) {
  hideAllViews();
  $('#app-view-' + view_name).show();


};

function hideAllViews() {
  $('.app-view').hide();
};

$(document).ready(function () {
  hideAllViews();
  switchView("landing");

  renderOffers();

});


function submitOffer() {
  console.log("so");
  var title = $('#title').val();
  var desc = $('#description').val();
  var ttl = $('#ttl').val();

  // I hardcoded location for now, but you could have a location field
  // that uses locationClient.latLngtoArray
  // Perhaps you would want to put a load of demo locations in env_setup.py
  // and then only add the one in code for your demo
  // That way you would only need one placeholder location like the one below.

  var location = [50.6002,0.9];



  if (title && desc && ttl && location) {

    locationClient.addOffer(title, desc, ttl, location, function () {
      console.log("addoffer has run");
      switchView('landing');
    });

  }
}

// btw this only currently is run on first load, so you have to reload for an updated list
// so if it doesn't look like it submitted, reload the page
// also make sure it's within 1 degree lat and lng
function renderOffers() {
  // Get offers, as an object (comes from API).
  // function (offers) is the callback function. It runs once the AJAX request is made.
  locationClient.getOfferNearMe(locationClient.currentLocation, function (offers) {

    // When writing these, I recommend you use console.log(data), where data is whatever you called that callback function parameter
    // then use dev console to look at the object parameters

    var offerspanehtml = '';

    // For (each) offer in offers
    offers.forEach(function (offer) {

      if (!offer.description) {
        offer.description = "";
      }

      // Construct the HTML as a JS String
      offerspanehtml += '<div class="offer">';
      offerspanehtml += '  <div class="offer-title">' + offer.title + '</div';
      offerspanehtml += '  <div class="offer-description">' + offer.description + '</div';
      offerspanehtml += '  <div class="offer-image">' + '<img src="http://placehold.it/300/300" />' /* PUT SOME NICE PLACEHOLDERS IN HERE */ + '</div';
      offerspanehtml += '</div>';

    });

    // Replace the HTML of anything with the class .show-offers with our constructed template
    $('.show-offers').html(offerspanehtml);

  });
}
