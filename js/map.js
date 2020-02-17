ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [57.00056473426234,40.974852811244155],
            zoom: 15,
            controls: ['zoomControl', 'geolocationControl']
        });
        var myPlacemark = new ymaps.Placemark([57.00056473426234,40.974852811244155],{} , {
            iconImageSize : [32, 40]
        });

        myMap.balloon.open([57.00, 40.97], 'Тут центр города', {
            closeButton: false
        })

        myMap.geoObjects.add(myPlacemark);
    } 