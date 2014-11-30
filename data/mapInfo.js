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
    "date": "08/09/2014",
    "lat": 38.738312, // first lat-long is actually set by sosv (content.json)
    "lng": -90.273611, // so these aren't used
    "markers": [
      {
        "img": "http://photos-g.ak.instagram.com/hphotos-ak-xpa1/10755974_611923265600446_759100302_n.jpg",
        "lat": 38.73833,
        "lng": -90.273100,
        "title": "Michael Brown Memorial",
        "mtype": window.markerTypes.gov,
        "itype": window.infoTypes.video,
        "content": "<iframe width='420' height='315' src='http://www.youtube.com/embed/zUXqPDT8hr4?autoplay=1'></iframe>"
      },
      {
        "img": "http://photos-g.ak.instagram.com/hphotos-ak-xpa1/10755974_611923265600446_759100302_n.jpg",
        "lat": 38.73783,
        "lng": -90.273200,
        "title": "Some guy named Ferguson",
        "mtype": window.markerTypes.social,
        "itype": window.infoTypes.tweet,
        "content": "<blockquote class='twitter-tweet' lang='en'><p>Breaking News: No Indictment of Officer in Ferguson Case&#10;<a href='http://t.co/8f1zBwGHbV'>http://t.co/8f1zBwGHbV</a></p>&mdash; The New York Times (@nytimes) <a href='https://twitter.com/nytimes/status/537070083982753792'>November 25, 2014</a></blockquote><script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script>"
      },
      {
        "img": "http://photos-g.ak.instagram.com/hphotos-ak-xpa1/10755974_611923265600446_759100302_n.jpg",
        "lat": 38.73803,
        "lng": -90.273100,
        "title": "Michael Brown Memorial",
        "mtype": window.markerTypes.fam,
        "itype": window.infoTypes.picture,
        "content": "<img src='https://c2.staticflickr.com/6/5591/14841313420_6d555fdc4c_b.jpg' />"
      }
    ]
  },
  {
    "date": "08/10/2014",
    "lat": 38.73857,
    "lng": -90.27387,
    "markers": [
    ]
  }
];
