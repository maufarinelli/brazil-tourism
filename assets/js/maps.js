const defaultMapOptions = {
    zoom: 7,
    scrollwheel: false
};

function initMap() {
    var mapElement = document.getElementById('map'),
        city = mapElement.dataset.map;

    switch(city) {
        case 'rio':
            initRioMap(mapElement);
            break;
        default:
            break;
    }
}

function initRioMap(mapElement) {
    var rioPosition = {lat: -22.90278, lng: -43.2075};
    var map = new google.maps.Map(mapElement, Object.assign({}, defaultMapOptions, {
        center: rioPosition
    }));
    var marker = new google.maps.Marker({
        position: rioPosition,
        map: map
    });
}