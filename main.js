$(function() {
  new SOSV("data/content.json");
});

/*
function initialize() {
  // error checking
  if (typeof(content) === "undefined" || content === null) {
    console.warn("Unable to load content.");
    return;
  } else if (typeof(content.pages) == undefined || content.pages.length == 0) {
    console.warn("At least one page is required.");
  }

  // configure map
  var startingPos = new google.maps.LatLng(content.pages[0].lat, content.pages[0].lng);
  var mapOptions = {
    center: startingPos,
    zoom: 18,
    streetViewControl: false
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  // set streetview and make visible
  var panorama = map.getStreetView();
  panorama.setPosition(murderLocation );
  panorama.setPov(({
    heading: 265,
    pitch: 0
  }));
  panorama.setVisible(true);

  // add markers
  addMarkers(content.pages[0].markers);
}

function addMarkers(markers) {
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
}

function addMarker(marker) {
}

google.maps.event.addDomListener(window, "load", initialize);
*/
