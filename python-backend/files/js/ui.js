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
});


function submitOffer() {
  var title = $('#title').value;
  var desc = $('#description').value;
  var ttl = $('#ttl').value;
  var loc = navigator.geolocation.getCurrentPosition(readPosition);

  function readPosition(pos) {
    return [pos.coords.latitude, pos.coords.longditude];
  }

  var location = readPosition(loc);


  if (title && desc && ttl) {

    locationClient.addOffer(title, desc, ttl, location, function (
      return) {
      console.log("addoffer has run");
    });
  }
}
