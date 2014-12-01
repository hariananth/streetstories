
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
  var streetViewDiv = document.getElementById('streetview_canvas');
  streetViewDiv.style.fontSize = "15px";
  var streetView = new google.maps.StreetViewPanorama(streetViewDiv, streetViewOptions);
}

function getCustomPanoramaTileUrl(panoID, zoom, tileX, tileY) {
  // Return a pano image given the panoID.
  return "/img/pano_hallway.jpg";
}

function getCustomPanorama(panoID) {
  var streetViewPanoramaData = {
    links: [],
    copyright: 'StreetStories',
    zoom: 1,
    pov: {
      heading : 255,
      pitch : 0,
      zoom : 1 },
    tiles: {
        tileSize: new google.maps.Size(2048, 1024),
        worldSize: new google.maps.Size(2048, 1024),
        centerHeading: 180,
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

google.maps.event.addDomListener(window, 'load', code3_2);