var http = require('http');
var request = require('request');
var cheerio = require('cheerio');

module.exports = function() {
  http.createServer(function(req, res) {
    var ua =  req.headers['user-agent'];
    request.get('http://www.useragentstring.com/?uas=' + ua + '&getJSON=all', function(err, xhr, body){
      var data = JSON.parse(body);
      aname = data['agent_name'];
      avers = data['agent_version'];
    })

    if(req.method==='GET' && req.url==='/flexbox') {
      request.get('http://caniuse.com/#tables', function(err, xhr, body) {
        var $ = cheerio.load(body);
        res.end($(body).find('ol').next().hasClass(aname));
        console.log(aname);
      });
    }

    else {
      res.writeHead(403);
      res.end('You do not have permission to access this page!');
    }

  }).listen(1337)
}
