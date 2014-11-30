// load map content via sosv
new SOSV("data/content.json");

// Script for showing / hiding the opening text
$(function(){
  $('.intro').click(function(){
    $('#overlay').css('display', 'none');
  });
  $('.info-toggle').click(function(){
    //$('#overlay').slideToggle();
    $('#overlay').css('display', 'block');
  });
});

function initialize() {
  // error checking
  if (typeof(mapInfo) === "undefined" || mapInfo === null) {
    console.error("Unable to load map info.");
    return;
  } else if (mapInfo.length == 0) {
    console.warn("No dates provided.");
  } else {
    // we don't need to set the location, just add the markers
    addMarkers(mapInfo[0]);
  }
}

function addMarkers(info) {
  if (window.map !== null &&
      typeof(info.markers) !== undefined &&
      info.markers !== null &&
      info.markers.length > 0) {
    for (var i=0; i<info.markers.length; i++) {
      addMarker(info.markers[i]);
    }
  }
}

function addMarker(marker) {
  var markerInfo = new google.maps.InfoWindow({
    content: marker.content
  });
  var markerPos = new google.maps.LatLng(marker.lat, marker.lng);

  // Setup the markers on the map
  var marker = new google.maps.Marker({
    position: markerPos,
    map: window.map,
    icon: marker.img,
    title: marker.title
  });

  google.maps.event.addListener(marker, "click", function() {
    markerInfo.open(window.map, marker);
    //map.setCenter(marker.getPosition());
  });
}
