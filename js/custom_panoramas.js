 window.panorama_data = {
	'entry':
		{
			pano: 'pano_entry.jpg',
			description: "Hackathon Entry",
			latLng: new google.maps.LatLng(25.3211176,51.4366552),
			links: [],
			tiles: {
        tileSize: new google.maps.Size(256, 256), //for debug, 2048x1024 is nice.
        worldSize: new google.maps.Size(2048, 1024),
        centerHeading: 0,
        getTileUrl: '/img/pano_entry.jpg'
     },
      copyright: 'Copyright 2014 (c) Team Street Stories',
     	// The heading at the origin of the panorama tile set.
      centerHeading: 80,
      getTileUrl: '/img/pano_entry.jpg'
      },
	'hallway':
		{
			pano: 'pano_hallway.jpg',
			description: "Convention Center Hallway",
			latLng: new google.maps.LatLng(25.3221176,51.4326552),
			tiles: {
        tileSize: new google.maps.Size(256, 256), //for debug, 2048x1024 is nice.
        worldSize: new google.maps.Size(2048, 1024),
        centerHeading: 0,
        getTileUrl: '/img/pano_hallway.jpg'
     },
			links: [],
			tileSize: new google.maps.Size(4323, 1712),
			worldSize: new google.maps.Size(4323, 1712),
      copyright: 'Copyright 2014 (c) Team Street Stories',
     	// The heading at the origin of the panorama tile set.
      centerHeading: 80,
      getTileUrl: '/img/pano_hallway.jpg'
      }
		};

window.map;
window.panorama;
var initPosPanoID, streetView;

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

// called once the map has been created
function initialize() {
  console.log("runnign initialize")

	$("#overlay").css("display", "none");
  // load map
  setupEnvrionment();
	//google.maps.event.addDomListener(window, 'load', setupEnvrionment);


  if (false) {
    console.log( "add markers for starting location" )
    addMarkers(window.mapInfo[0]);
    
    console.log( "configure dates" )
    populateDateSelector();
    
    console.log( "kill infowindows if the user changes positions" )
    google.maps.event.addListener(window.map, "position_changed", closeInfoWindows);
    
    console.log( "load a sync'd map into mappop" )
    createOverheadMap();
  }
};


function setupEnvrionment() {
 
   console.log('options for the map')

   var mapCenter = new google.maps.LatLng(25.3211176,51.4366552);

   var mapOptions1 = {
      center: window.panorama_data['entry']['latLng'],
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false
   };
   // create a new map object to be shown in the map_canvas1 div elements and with the options that were set
   window.map = new google.maps.Map(document.getElementById("pano"), mapOptions1);
	 window.panorama = window.map.getStreetView();
	 //window.map.setStreetView(window.panorama);
 	

  console.log('Set StreetView provider.')
  var streetViewOptions = {
    zoom: 1,
    panoProvider:  getCustomPanorama,
    center: window.panorama_data['entry']['latLng'],
    pov : {
      heading : 55,
      pitch : 0,
      zoom : 1
    }
  };
  // Add links when it happens "links_change" event.
  //google.maps.event.addListener(streetView, "links_changed", createCustomLinks);
  createCustomLinks('entry');

  // Create a StreetViewService object.
  var streetviewService = new google.maps.StreetViewService();
  
  // Get panorama ID of initPos
  var radius = 50;
  streetviewService.getPanoramaByLocation(mapCenter, radius, function(result, status) {
    if (status == google.maps.StreetViewStatus.OK) {
      initPosPanoID = result.location.pano;
      streetView.setPosition(mapCenter);
    }
  });
	

	// Create a StreetView object.
  var streetViewDiv = document.getElementById('pano');
  streetViewDiv.style.fontSize = "15px";
  streetView = new google.maps.StreetViewPanorama(streetViewDiv, streetViewOptions);
	window.map.setOptions({
  	panoProvider : getCustomPanorama
	});

  /* 
    // Set up the map and enable the Street View control.
    var mapOptions = {
      center: window.panorama_data['entry']['latLng'],
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
	  	centerHeading: 0,
    };
 
    window.panorama = window.map.getStreetView();
    console.log( "Set up Street View and initially set it visible. Register the custom panorama provider function.");
    var panoOptions = {
      pano: 'entry',
      visible: true,
	  	enableCloseButton: false, 
      panoProvider:  getCustomPanorama('entry'),
      pov: {
         heading: 97,
         pitch: +10,
         zoom: 1
      }
    }
    window.panorama.setOptions(panoOptions);
	
		
	// set street view for map
    //map1.setStreetView(panorama);
 
    // We'll monitor the links_changed event to check if the current pano is either
    // a custom pano or our entry pano.        
    google.maps.event.addListener(panorama, 'links_changed', createCustomLinks);
    google.maps.event.addListener(panorama, 'load', createCustomLinks);
	//createCustomLinks();
	*/


	/*
	markerDaytonPlaza = new google.maps.Marker({
      position: daytonPlazaLatLon,
      map: map1,
      title:"Paris visit starts here!"
   });
   google.maps.event.addListener(markerDaytonPlaza, 'click', function() {
      panorama.setPano('daytonPlaza');
      panorama.setPov({heading: 97, pitch: +10, zoom: 1});
	  setBlueIcon(this);
   });
      // on panorama
   var markerDaytonPlazaPano = new google.maps.Marker({
      position: daytonPlazaLatLon,
      map: map,
      title: 'Campus Center'
   });
   
   
   // add cross walk marker on map
   markerCrossWalk = new google.maps.Marker({
      position: crossWalkLatLon,
      map: map1,
      title:"Cross Walk"
   });
   // add listener to change panorama options when the marker is clicked
   google.maps.event.addListener(markerCrossWalk, 'click', function() {
      panorama.setPano('crossWalk');
      panorama.setPov({heading: 140, pitch: +10, zoom: 1});
	  setBlueIcon(this);
   });
      // on panorama
   var markerCrossWalkPano = new google.maps.Marker({
      position: crossWalkLatLon,
      map: map,
      title: 'Cross Walk'
   });
   
    // add ROCK marker on map
   markerRock = new google.maps.Marker({
      position: rockLatLon,
      map: map1,
      title:"Rock"
   });
   // add listener to change panorama options when the marker is clicked
   google.maps.event.addListener(markerRock, 'click', function() {
      panorama.setPano('rock');
      panorama.setPov({heading: 0, pitch: +5, zoom: 1});
	  setBlueIcon(this);
   });
      // on panorama
   var markerRockPano = new google.maps.Marker({
      position: rockLatLon,
      map: map,
      title: 'Notre Dame Cathedral'
   });*/
 
  }
  


  function getCustomPanorama(pano,zoom,tileX,tileY) {
 
    var center;
 		
    return window.panorama_data[pano]
  }
 
  function createCustomLinks() {

  if (entryPanoId) {
    var links = panorama.getLinks();
    var panoId = panorama.getPano();

    switch(panoId) {

      case entryPanoId:
        // Adding a link in the view from the entrance of the building to
        // reception.
        links.push({
          'heading': 180,
          'description' : 'Mac Campus',
          'pano' : 'crossWalk'
        })
        break
      }
  	}
  };


 function createCustomLinks() {
 
    //if (entryPanoId) {
      var links = panorama.getLinks();
      var panoId = panorama.getPano();
 
      switch(panoId) {
 
        case 'entry':
          // Adding a link in the view from the entrance of the building to
          // reception.
          links.push({
            'heading': 180,
            'description' : 'hallway',
            'pano' : 'entry'
          });
           links.push({
            'heading': 90,
            'description' : 'Chairs',
            'pano' : 'chairs_right'
          });
          break;
        case 'hallway':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
         links.push({
            'heading': 190,
            'description' : 'Ent',
            'pano' : 'entery'
          });
          break;
        case 'daytonPlaza':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 20,
            'description' : 'Cross Walk',
            'pano' : 'crossWalk'
          });
          links.push({
            'heading': 190,
            'description' : 'Rock',
            'pano' : 'rock'
          });
          break;
        case 'rock':
          // Adding a link in the view from the entrance of the office
          // with an arrow pointing at 100 degrees, with a text of "Exit"
          // and loading the street entrance of the building pano on click.
          links.push({
            'heading': 10,
            'description' : 'Campus Center',
            'pano' : 'daytonPlaza'
          });
          break;
        default:
          return;
      }
    //}
  }

