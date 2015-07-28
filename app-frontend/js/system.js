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

locationClient.getOfferById = function (offerId, callback) {

    $.get(locationClient.server + '/offer/get/id', {
        id: offerId
    }, function (data) {
        callback(data);
    });

}

locationClient.getOfferNearMe = function (latLng, callback) {

    lat = latLng[0];
    lng = latLng[1];

    $.get(locationClient.server + '/offer/get/near_me/' + lat + ',' + lng, function (data) {
        callback(data);
    }, 'json');
}

locationClient.setOfferDone = function (offerId, callback) {

}

locationClient.addOffer = function (title, desc, ttl, location, callback) {

}

locationClient.sendMessage = function (username, message, callback) {

}

locationClient.inbox = function (callback) {

}

locationClient.setMessageRead = function (messageId, callback) {

}

