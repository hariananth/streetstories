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
    addMarkers(mapInfo[0]);
  }
}

function addMarkers(info) {
  console.log("adding markers for info:");
  console.log(info);
  /*
  var contentString = ""+
    "<iframe width='420' height='315'"+
      "src='http://www.youtube.com/embed/XGSy3_Czz8k'>"+
    "</iframe>";

  var memorialInfo = new google.maps.InfoWindow({
    content: contentString
  });

  var memorial = new google.maps.LatLng(38.73833,-90.273545);

  // Setup the markers on the map
  var memorialMarker = new google.maps.Marker({
    position: memorial,
    map: map,
    icon: "http://photos-g.ak.instagram.com/hphotos-ak-xpa1/10755974_611923265600446_759100302_n.jpg",
    title: "Michael Brown Memorial"
  });

  google.maps.event.addListener(memorialMarker, "click", function() {
    memorialInfo.open(map.getStreetView(), memorialMarker);
    //map.setCenter(marker.getPosition());
  });
  */
}

function addMarker(marker) {
}
