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
    $.post(locationClient.server + '/offer/done', {
        id: offerId
    }, function (data) {
        callback(data);
    });
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

locationClient.sendMessage = function (to, message, callback) {
    $.post(locationClient.server + '/message/send', {
        from: locationClient.user.username,
        to: to,
        content: message
    }, function (data) {
        callback(data);
    });
}

locationClient.inbox = function (callback) {
    $.get(locationClient.server + '/message/inbox', {
        username: 'admin2'// locationClient.user.username
    }, function (data) {
        callback(data);
    }, 'json');
}

locationClient.setMessageRead = function (messageId, callback) {
    $.post(locationClient.server + '/message/read', {
        id: messageId
    }, function (data) {
        callback(data);
    });
}

