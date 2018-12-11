/*
-----------------------------------------------
Theme: myWeddingDay - Coming Soon HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. GALLERY LIGHTBOX
    3. GOOGLE MAPS
    4. COUNTDOWN START
-----------------------------------------------*/


/* ***************** start document load **********************/
$(document).ready(function() {
    "use strict";

/* Preloader js */
$(window).on('load', function() {
    "use strict";
    $('.status').fadeOut();
    $('#preloader').delay(50).fadeOut('slow');
});
/* END Preloader js */

    var content = $("body"),
        navbar = $(".navbar"),
        col = $(".col-transform");

    $(".show-info").on('click', function() {
        if (window.innerWidth > 990) {
            if (content.hasClass('show-content')) {
                content.removeClass('show-content');
                navbar.removeClass('navbar-open');
            } else {
                content.addClass('show-content');
                navbar.addClass('navbar-open');
            }
        }
    });

    // Gallery Lightbox
    $(".bearr-gallery-item a").simpleLightbox();

    $('.love-story-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //Google maps
    //Map
    var map;
    var odessa = new google.maps.LatLng(16.1858992, 81.0956998);

    var MY_MAPTYPE_ID = 'custom_style';

    function initialize() {
        //Start options
        var featureOpts = [{
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "stylers": [{
                        "hue": "#00aaff"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 2.15
                    },
                    {
                        "lightness": 12
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "lightness": 24
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": 57
                }]
            }
        ];
        //END options

        //END maps options
        var mapOptions = {
            zoom: 10,
            center: odessa,
            disableDefaultUI: true,
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            },
            mapTypeId: MY_MAPTYPE_ID
        };
        //END maps options

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var styledMapOptions = {
            name: 'Custom Style'
        };
        var customMapType_church = new google.maps.StyledMapType(styledMapOptions);
        map.mapTypes.set(MY_MAPTYPE_ID, customMapType_church);

        //marker church
        //sasas
        var image_church = new google.maps.MarkerImage("static/img/marker-church.png", null, null, null, new google.maps.Size(33, 50));
        var positionpin_church = new google.maps.LatLng(16.1898382, 81.1362668);
        var marker_church = new google.maps.Marker({
            position: positionpin_church,
            icon: image_church,
            map: map,
            flat: true,
            title: ''
        });
        var boxText_church = document.createElement("div");
        boxText_church.innerHTML = '<div class="grid grid_6 percentage border-white"><div class="block-focus center"></div></div><div class="grid grid_6 percentage border-white"><img class="block-focus border-white" src="static/img/map-church.jpg"></div>';
        var marker_church_options = {
            content: boxText_church,
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-127, -160),
            zIndex: null,
            boxStyle: {
                opacity: 1,
                width: "250px",
                background: "#fff",
            },
            closeBoxMargin: "10px",
            closeBoxURL: "static/img/map-close.png",
            infoBoxClearance: new google.maps.Size(1, 1),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };
        var info_box_church = new InfoBox(marker_church_options);
        google.maps.event.addListener(marker_church, 'click', function() {
            info_box_church.open(map, marker_church);
        });
        info_box_church.open(map, marker_church);
        //end marker church
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    //END GOOGLE MAPS
    /*========== Countdown start ================*/
    var end_date = +new Date("December 26, 2018 12:00 GMT");
    var date_now = new Date();
    var seconds = Math.floor((end_date - (date_now)) / 1000);
    $('.countdown').final_countdown({
        'start': null,
        'end': seconds,
        'now': null
    });
    /*========== Countdown end ================*/
});
