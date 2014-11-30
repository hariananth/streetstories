// load map content via sosv
new SOSV("data/content.json");

// hold markers so we can always remove them later
window.currentMarkers = [];
window.currentInfoWindows = [];

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

// called once the map has been created
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
      draggable: true,
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

function addMarker(markerInfo) {
  // create marker
  var markerPos = new google.maps.LatLng(markerInfo.lat, markerInfo.lng);
  var marker = new google.maps.Marker({
    position: markerPos,
    map: window.map,
    icon: markerInfo.img,
    title: markerInfo.title
  });

  // create associated infowindow
  var contentString = "<div class='ss-info-window "+markerInfo.type+"'>"+markerInfo.content+"</div>";
  var markerIW = new google.maps.InfoWindow({
    content: contentString
  });
  google.maps.event.addListener(marker, "click", function() {
    // close open infowindows
    while(window.currentInfoWindows.length > 0) {
      window.currentInfoWindows.pop().close();
    }
    // save new infowindow
    window.currentInfoWindows.push(markerIW);
    // show
    markerIW.open(window.map, marker);
    //modifyInfoWindows();
  });

  // save marker and infowindow
  window.currentMarkers.push(marker);
}

function modifyInfoWindows() {
  var iterator = document.evaluate("//div[contains(@class, 'ss-info-window')]", document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
  try {
    var thisNode = iterator.iterateNext();
    while (thisNode) {
      console.log(thisNode);
      thisNode = iterator.iterateNext();
    }
  } catch (e) {
    dump( 'Error: Document tree modified during iteration ' + e );
  }
}

// remove old markers, move map to location of (date), add markers
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
