



// LocationClient namespace
var locationClient = {};

locationClient.server = window.location.origin; //Change for heroku, etc

// User object
locationClient.user = {};

// Default username
locationClient.user.username = 'admin';

// Current location latLng

// I had to put this in a try/catch as it wasn't working, and input a placeholder location
// Do fix it if you can, but tbh you might just want to hardcode some locations
try {
  loc = navigator.geolocation.getCurrentPosition(readPosition);

  function readPosition(pos) {
    return [pos.coords.latitude, pos.coords.longditude];
  }

  myLocation = readPosition(loc);

  locationClient.currentLocation = myLocation;

} catch (e) {
  // hackney
  locationClient.currentLocation = [52.4786556, -1.9102102];
}



// General functions

locationClient.latLngtoString = function (latLng) {
  return latLng[0] + ',' + latLng[1];
};

locationClient.latLngtoArray = function (latLng) {
  return latLng.split(',');
};

// API Calls
locationClient.getOfferById = function (offerId, callback) {

  $.get(locationClient.server + '/offer/get/id', {
    id: offerId
  }, function (data) {
    callback(data);
  });

};

locationClient.getOfferNearMe = function (latLng, callback) {

  latLng = locationClient.latLngtoString(latLng);

  $.get(locationClient.server + '/offer/get/near_me/' + latLng, function (data) {
    callback(data);
  }, 'json');
};

locationClient.setOfferDone = function (offerId, callback) {
  $.post(locationClient.server + '/offer/done', {
    id: offerId
  }, function (data) {
    callback(data);

  });

};



locationClient.addOffer = function (title, desc, ttl, location, callback) {
  $.post(locationClient.server + '/offer/add', {
    username: locationClient.user.username,
    title: title,
    description: desc,
    ttl: ttl,
    location: locationClient.latLngtoString(location)
  }, function (data) {
    callback(data);
  });
};

locationClient.sendMessage = function (to, message, callback) {
  $.post(locationClient.server + '/message/send', {
    from: locationClient.user.username,
    to: to,
    content: message
  }, function (data) {
    callback(data);
  });
};

locationClient.inbox = function (callback) {
  $.get(locationClient.server + '/message/inbox', {
    username: locationClient.user.username // locationClient.user.username
  }, function (data) {
    callback(data);
  }, 'json');
};

locationClient.setMessageRead = function (messageId, callback) {
  $.post(locationClient.server + '/message/read', {
    id: messageId
  }, function (data) {
    callback(data);
  });
};


