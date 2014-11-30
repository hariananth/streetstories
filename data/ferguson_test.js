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
    "date": "August 9th",
    "lat": 38.738312, // first lat-long is actually set by sosv (content.json)
    "lng": -90.273611, // so these aren't used
    "markers": [
      {
        "date": "August 9",
        "lat": 38.73833,
        "lng": -90.273100,
        "headline": "Michael Brown Memorial",
        "type": window.markerTypes.family,
        "contentType": window.infoTypes.video,
        "link": "http://youtube.com/here/is/the/video",
        "content": "<iframe width='420' height='315' src='http://www.youtube.com/embed/zUXqPDT8hr4?autoplay=1'></iframe>"
      },
      {
        "date": "August 10",
        "lat": 38.73783,
        "lng": -90.273200,
        "headline": "Some guy named Ferguson",
        "type": window.markerTypes.gov,
        "contentType": window.infoTypes.tweet,
        "link": "http://cnn.com/here/is/the/tweet",
        "content": "<blockquote class='twitter-tweet' lang='en'><p>Breaking News: No Indictment of Officer in Ferguson Case&#10;<a href='http://t.co/8f1zBwGHbV'>http://t.co/8f1zBwGHbV</a></p>&mdash; The New York Times (@nytimes) <a href='https://twitter.com/nytimes/status/537070083982753792'>November 25, 2014</a></blockquote><script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script>"
      },
      {
        "date": "August 11",
        "lat": 38.73803,
        "lng": -90.273100,
        "headline": "Michael Brown Memorial",
        "type": window.markerTypes.news,
        "contentType": window.infoTypes.picture,
        "link": "http://bbc.co.uk/here/is/the/story",
        "content": "<img src='https://c2.staticflickr.com/6/5591/14841313420_6d555fdc4c_b.jpg' />"
      },
      {
        "date": "August 12",
        "lat": 38.73753,
        "lng": -90.273100,
        "headline": "Michael Brown Memorial",
        "type": window.markerTypes.social,
        "contentType": window.infoTypes.picture,
        "link": "http://bbc.co.uk/here/is/the/story",
        "content": "<img src='https://c2.staticflickr.com/6/5591/14841313420_6d555fdc4c_b.jpg' />"
      },
    ]
  }
];
