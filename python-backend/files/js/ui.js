window.data = {};
function switchView(view_name) {
  hideAllViews();
  $('#app-view-' + view_name).show();
  if (view_name == "finding") {
    console.log("finding");
    google.maps.event.trigger(window.map, 'resize');
    drawPins();
    console.log("resized");
  }

};

function hideAllViews() {
  $('.app-view').hide();
};

$(document).ready(function() {
  hideAllViews();
  switchView("landing");

  renderOffers();
  renderMessages();
  console.log("readu");
  $("#Make_offer").submit(
    function(e) {
      submitOffer();
      e.preventDefault();
      return false;

    }
  );

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

  var location = [51.5333, 0.0837];



  if (title && desc && ttl && location) {

    locationClient.addOffer(title, desc, ttl, location, function() {
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
  locationClient.getOfferNearMe(locationClient.currentLocation, function(offers) {

    // When writing these, I recommend you use console.log(data), where data is whatever you called that callback function parameter
    // then use dev console to look at the object parameters

    window.data.offers = offers
    var offerspanehtml = '';

    // For (each) offer in offers
    offers.forEach(function(offer) {
      //console.log("iter offer");
      if (!offer.description) {
        offer.description = "";
      }

      // Construct the HTML as a JS String
      offerspanehtml += '<div class="offer row">';
      offerspanehtml += '  <div class="offer-title col-md-4"><h1>' + offer.title + '</h1></div';
      offerspanehtml += '  <div class="offer-description col-md-4"><p>' + offer.description + '</p> </div';
      offerspanehtml += offer.location;
      offerspanehtml += '  <div class="offer-image col-md-4">' + '<img src="http://lorempixel.com/400/200/food/ " />' /* PUT SOME NICE PLACEHOLDERS IN HERE */ + '</div';
      //var pos = new google.maps.LatLng(offer.location[0],offer.location[1]);
      drawPins();

      offerspanehtml += '</div>';
      console.log(offer.location);
      //Add a marker
      console.log("setmarker");
    });

    // Replace the HTML of anything with the class .show-offers with our constructed template
    $('.show-offers').html(offerspanehtml);

  });
}

function sendMessage(){
  console.log("sendMesage");

}

function renderMessages() {
  locationClient.inbox(function(messages){
  console.log(messages);
  //Assemble the html for the inbox
  inboxContent = '';
  var arrayLength = messages.length;
    for (var i = 0; i < arrayLength; i++) {
      inboxContent+= '<ul>';
      inboxContent += "<li>To: "+messages[i].to+"</li>";
      inboxContent += "<li>From: "+messages[i].from+"</li>";
      inboxContent +="<li>Content: "+messages[i].content+"</li>";
      inboxContent+= "</ul>";

}
    $("#messages-inbox").html(inboxContent);
  });


}

function drawPins () {
  window.data.offers.forEach(function(offer) {
    var pos = new google.maps.LatLng(offer.location[0], offer.location[1]);
    var marker = new google.maps.Marker({
      position: pos,
      map: window.map,
      title: offer.title
    });
    marker.setMap(window.map);
  })
}
