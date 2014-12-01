
function initialize(){
  code3_2();
}

function code3_2() {
  // Set StreetView provider.
  var streetViewOptions = {
    zoom: 1,
    pano : "visitor_center",
    panoProvider:  getCustomPanorama //('visitor_center')
  };
  // Create a StreetView object.
  var streetViewDiv = document.getElementById('pano');
  streetViewDiv.style.fontSize = "15px";
  var streetView = new google.maps.StreetViewPanorama(streetViewDiv, streetViewOptions);
}


function getCustomPanorama(panoID) {
  var streetViewPanoramaData = {
    links: [],
    copyright: 'StreetStories',
    zoom: 1,
    pov: {
      heading : 0,
      pitch : 0,
      zoom : 1 },
    tiles: {
        tileSize: new google.maps.Size(1024, 512),
        worldSize: new google.maps.Size(3000, 1500),
        centerHeading: 10,
        getTileUrl: getCustomPanoramaTileUrl
     }
  };
  switch(panoID) {
    case "visitor_center":
      streetViewPanoramaData["location"] = {
        pano: 'visitor_center',
        description: "Qatar Convention Center",
        latLng: new google.maps.LatLng(37.556429,-122.050745)
      };
      return streetViewPanoramaData;
  }
}

// Script for showing / hiding the opening text
$(function() {
  $("#overlay").click(function(){
    $("#overlay").css("display", "none");
  })
  $("#infoReturn").click(function(){
    $("#overlay").slideToggle();
  });
  $("#mapToggle").click(function(){
    $("#mappop").slideToggle();
    // hacky af but this is a prototype... right?
    setTimeout(function() {
      ensureOverheadConfigured();
    }, 500);
  })
  $(".name").click(function(){
    $(".about").slideToggle();
  })
  $(".about").click(function(){
    $(".about").slideToggle();
  })
});

google.maps.event.addDomListener(window, 'load', code3_2);