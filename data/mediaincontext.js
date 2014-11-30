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
    "date": "Hackathon",
    "lat": 25.321422, // first lat-long is actually set by sosv (content.json)
    "lng": 51.437429, // so these aren't used

    "markers": [
      {
        "date": "August 9, 2014",
        "lat": 25.321422,
        "lng": 51.437429,
        "headline": "On August 9th, 18-year-old Michael Brown was shot and killed",
        "type": window.markerTypes.news,
        "contentType": window.infoTypes.video,
        "link": "",
        "content": "6SGkD6CN0mk"
      },
        {
          "date": "August 10, 2014",
          "lat": 38.743812,
          "lng": -90.279095,
          "headline": "",
          "type": window.markerTypes.family,
          "contentType": window.infoTypes.picture,
          "link": "",
          "content": "http://scontent-a-ams.cdninstagram.com/hphotos-xpf1/l/t51.2885-15/1738085_692070914213393_1197767717_n.jpg"
      }
    ]
  }
];
