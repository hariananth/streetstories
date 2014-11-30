// hold markers so we can always remove them later
window.currentMarkers = [];
window.currentInfoWindows = [];
window.overheadIsUnconfigured = true;

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
  console.log("runnign initialize")

  if (dateIdxIsValid(0)) {
    console.log( "add markers for starting location" )
    addMarkers(window.mapInfo[0]);
    
    console.log( "configure dates" )
    populateDateSelector();
    
    console.log( "kill infowindows if the user changes positions" )
    google.maps.event.addListener(window.map, "position_changed", closeInfoWindows);
    
    console.log( "load a sync'd map into mappop" )
    createOverheadMap();
  }
}

function createOverheadMap() {
  window.overheadMap = new google.maps.Map(document.getElementById("mappop"), {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  $("#mapToggle").removeClass("loading");
}

function ensureOverheadConfigured() {
  if (window.overheadIsUnconfigured === true) {
    window.overheadMap.setStreetView(window.map);
    google.maps.event.trigger(window.overheadMap, "resize");
    window.overheadMap.setCenter(window.map.getPosition());
    window.overheadMap.bindTo("center", window.map, "position");
    window.overheadIsUnconfigured = false;
  }
}

function populateDateSelector() {
  $(document).ready(function(){
    //slideIndex=0;
    $('.timeline').slick({
      slidesToShow: 5, //window.mapInfo.length,
      slidesToScroll: 5,
      arrows: true,
      dots: false,
      focusOnSelect: true,
      draggable: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      onAfterChange: changeDate
    });

    $.each( window.mapInfo, function( index, value ){
      var link_date = 
      '<div><h3 class="text-center slider-tweak">'+value.date+'</h3><p class="text-center slider-headline">'+value.title+'</p></div>';
      $('.timeline').slickAdd(link_date)
    });
 
  });
}

function changeDate() {
  for (var i=0; i<window.mapInfo.length; i++) {
    if (window.mapInfo[i].date == $(".slick-active").children("h3").text()) {
      setDate(i);
    }
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

function addMarker(markerInfo) {
  // create marker
  var markerPos = new google.maps.LatLng(markerInfo.lat, markerInfo.lng);
  var markerImg = "";
  if (markerInfo.type === window.markerTypes.family) {
    markerImg = "img/ribbon.png";
  } else if (markerInfo.type === window.markerTypes.gov) {
    markerImg = "img/govdocs.png";
  } else if (markerInfo.type === window.markerTypes.news) {
    markerImg = "img/news.png";
  } else if (markerInfo.type === window.markerTypes.social) {
    markerImg = "img/protest.png";
  }
  var marker = new google.maps.Marker({
    position: markerPos,
    map: window.map,
    icon: markerImg,
    title: markerInfo.title
  });

  // create associated infowindow
  var contentString = "<div class='ss-info-window' style='padding: 30px !important'><div class='ss-info-headline'>"+markerInfo.headline+"</div><div class='ss-info-content "+markerInfo.contentType+"'>"+markerInfo.content+"</div><div class='ss-info-link'><a href='"+markerInfo.link+"'>Read more...</a></div></div>";
  var markerIW = new google.maps.InfoWindow({
    content: contentString
  });
  google.maps.event.addListener(marker, "click", function() {
    // close open infowindows
    closeInfoWindows();
    // save new infowindow
    window.currentInfoWindows.push(markerIW);
    // show
    markerIW.open(window.map, marker);
    //modifyInfoWindows();
  });

  // save marker and infowindow
  window.currentMarkers.push(marker);
}

function closeInfoWindows() {
  while(window.currentInfoWindows.length > 0) {
    window.currentInfoWindows.pop().close();
  }
}

function modifyInfoWindows() {
  var iterator = document.evaluate("//div[contains(@class, 'ss-info-window')]", document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
  try {
    var thisNode = iterator.iterateNext();
    while (thisNode) {
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
