window.markerTypes = {
  "family": "marker-fam",
  "gov":    "marker-gov",
  "news":   "marker-news",
  "social": "marker-soc"
};
window.infoTypes = {
  "picture": "info-picture",
  "video":   "info-video",
  "tweet":   "info-tweet"
};

window.mapInfo = [
  {
    "date": "December 18, 2010",
    "lat": 22.2858705, // first lat-long is actually set by sosv (content.json)
    "lng": 114.1541193, // so these aren't used
    "title": "The Beginning: Tunisia",
    "markers": [
      {
        "date": "August 9",
        "lat": 22.2858705,
        "lng": 114.1541193,
        "headline": "Michael Brown Memorial",
        "type": window.markerTypes.family,
        "contentType": window.infoTypes.video,
        "link": "http://youtube.com/here/is/the/video",
        "content": "<iframe width='420' height='315' src='http://www.youtube.com/embed/zUXqPDT8hr4?autoplay=1'></iframe>"
      },
    ]
  },
    {
    "date": "January 29th, 2011",
    "lat": 22.2858705, // first lat-long is actually set by sosv (content.json)
    "lng": 114.1541193, // so these aren't used
    "title": "The Egyptian Crisis Starts",
    "markers": [
      {
        "date": "August 9",
        "lat": 22.2858705,
        "lng": 114.1541193,
        "headline": "Michael Brown Memorial",
        "type": window.markerTypes.family,
        "contentType": window.infoTypes.video,
        "link": "http://youtube.com/here/is/the/video",
        "content": "<iframe width='420' height='315' src='http://www.youtube.com/embed/zUXqPDT8hr4?autoplay=1'></iframe>"
      },
    ]
  }
];
