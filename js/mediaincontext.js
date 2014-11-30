  function getCustomPanorama(pano,zoom,tileX,tileY) {
 
    var center;
 
    switch(pano) {
 
    case entryPanoId:
    //centerHeading: -20,
    //return {
    //  centerHeading: -20
    //  }
    break;     
    case 'crossWalk':
        center = new google.maps.LatLng(44.939946,-93.167842);
        return {
          location: {
            pano: 'crossWalk',
            description: "Mac Campus Cross Walk",
            latLng: center
          },
          links: [
            ],
          // The text for the copyright control.
          copyright: 'Imagery (c) 2011 Lloyd Cledwyn',
          // The definition of the tiles for this panorama.
          tiles: {
            tileSize: new google.maps.Size(4323, 1712),
            worldSize: new google.maps.Size(4323, 1712),
            // The heading at the origin of the panorama tile set.
            centerHeading: 80,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
        break;
    case 'daytonPlaza':
        center = daytonPlazaLatLon;
        return {
          location: {
            pano: 'daytonPlaza',
            description: "Campus Center - Dayton Plaza",
            latLng: center
          },
          links: [{
            'heading': 20,
            'description' : 'Cross Walk',
            'pano' : 'crossWalk'
          },{
            'heading': 190,
            'description' : 'Rock',
            'pano' : 'rock'
          }
            ],
          // The text for the copyright control.
          copyright: 'Imagery (c) 2011 Lloyd Cledwyn',
          // The definition of the tiles for this panorama.
          tiles: {
            tileSize: new google.maps.Size(4140, 1463),
            worldSize: new google.maps.Size(4140, 1463),
            // The heading at the origin of the panorama tile set.
            centerHeading: 0,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
        break;
    case 'rock':
        center = rockLatLon;
        return {
          location: {
            pano: 'rock',
            description: "Rock",
            latLng: center
          },
          links: [
            ],
          // The text for the copyright control.
          copyright: 'Imagery (c) 2011 Lloyd Cledwyn',
          // The definition of the tiles for this panorama.
          tiles: {
            tileSize: new google.maps.Size(4419, 1524),
            worldSize: new google.maps.Size(4419, 1524),
            // The heading at the origin of the panorama tile set.
            centerHeading: 105,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
        break;
      default:
        return null;
    }
  }
   