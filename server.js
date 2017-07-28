var youtubeStream = require('youtube-audio-stream');
var http = require('http');
var url = require('url');
// var localtunnel = require('localtunnel');

var config = {
  port: 8081,
  subdomain: "vladadystream"
}

var getAudio = function (req, res) {
  var url_parts = url.parse(req.url, true);
  if (typeof url_parts.query.videoID !== "undefined") {
    var videoID = url_parts.query.videoID;
    var requestUrl = 'http://youtube.com/watch?v=' + videoID;

    try {
      youtubeStream(requestUrl).pipe(res);
      console.log("Streaming " + requestUrl);
    } catch (exception) {
      console.log('error');
      res.status(500).send(exception);
    }
  }
}

http.createServer(getAudio).listen(config.port);

/*var tunnel = localtunnel(config.port, {
    subdomain: config.subdomain,
  }, function(err, tunnel) {
    if (err) {
      console.log(err);
    } else {
      console.log("Server started on: " + tunnel.url);
    }


});

tunnel.on('close', function() {
  console.log('close');
});


*/









// var getAudio = function (req, res) {
//   var url_parts = url.parse(req.url, true);
//   if (typeof url_parts.query.videoID !== "undefined") {
//     var videoID = url_parts.query.videoID;
//     var requestUrl = 'http://youtube.com/watch?v=' + videoID;

//     try {
//       youtubeStream(requestUrl).pipe(res);
//       console.log("Streaming " + requestUrl);
//     } catch (exception) {
//       console.log('error');
//       res.status(500).send(exception);
//     }
//   }
// }

// http.createServer(getAudio).listen(3000);




// var fs = require('fs');
// var ytdl = require('ytdl-core');
// var ffmpeg = require('fluent-ffmpeg')

//   var reader = ytdl('https://www.youtube.com/watch?v=nDXkd2NyCCE',
//         { filter: "audioonly" });
//         // .pipe(fs.createWriteStream('test_.mp4'));

//   var writer = ffmpeg('test_.mp4')
//     .format("mp3")
//     .audioBitrate(128)
//     .save("test.mp3");
