$(document).ready(function() {

});

// LocationClient namespace
var locationClient = {};

locationClient.server = 'http://local:5000';

// User object
locationClient.user = {};

// Default username
locationClient.user.username = 'admin';

// Current location latLng
locationClient.currentLocation = [51.48,0];

// General functions

locationClient.latLngtoString = function (latLng) {
    return latLng[0] + ',' + latLng[1]
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

}

locationClient.getOfferNearMe = function (latLng, callback) {

    latLng = locationClient.latLngtoString(latLng);

    $.get(locationClient.server + '/offer/get/near_me/' + latLng, function (data) {
        callback(data);
    }, 'json');
}

locationClient.setOfferDone = function (offerId, callback) {

}

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
}

locationClient.sendMessage = function (username, message, callback) {

}

locationClient.inbox = function (callback) {

}

locationClient.setMessageRead = function (messageId, callback) {

}

