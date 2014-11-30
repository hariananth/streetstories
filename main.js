// load map content via sosv
new SOSV("data/content.json");

// hold markers so we can always remove them later
window.currentMarkers = [];

// Script for showing / hiding the opening text
$(function() {
  $(".intro").click(function() {
    $("#overlay").css("display", "none");
  });
  $("#info-toggle").click(function() {
    $("#overlay").slideToggle();
  });
});

function dateIdxIsValid(idx) {
  if (typeof(window.mapInfo) === "undefined" || window.mapInfo === null) {
    console.error("Unable to load map info.");
    return false;
  } else if (idx >= window.mapInfo.length) {
    console.error("No date for index", idx);
    return false;
  }
  return true
}

function initialize() {
  if (dateIdxIsValid(0)) {
    // add markers for starting location
    addMarkers(window.mapInfo[0]);
    populateDateSelector();
  }

}

function populateDateSelector() {
  $(document).ready(function(){
    //slideIndex=0;
    $('.timeline').slick({
      slidesToShow: window.mapInfo.length,
      arrows: true,
      dots: true,
      focusOnSelect: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });

    $.each( window.mapInfo, function( index, value ){
      console.log(value.date);
      var link_date = '<div><h3>'+value.date+'</h3></div>';
      $('.timeline').slickAdd(link_date)
    });
 
  });
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

  window.currentMarkers.push(marker);
}

// helper function to move map to location of date and add markers
function setDate(dateIdx) {
  if (dateIdxIsValid(dateIdx)) {
    var newInfo = window.mapInfo[dateIdx];
    // remove old markers
    while(window.currentMarkers.length > 0) {
      window.currentMarkers.pop().setMap(null);
    }
    // set new location
    var newCenter = new google.maps.LatLng(newInfo.lat, newInfo.lng);
    window.map.setPosition(newCenter);
    // add new markers
    addMarkers(newInfo);
  }
}
