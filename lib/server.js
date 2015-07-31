var http = require('http');
var cheerio = require('cheerio');
var request = require('request');

module.exports = function() {
  http.createServer(function(req, res){
    var ua =  req.headers['user-agent']
    request.put('http://www.useragentstring.com/?uas=' + ua + '&getJSON=all', function(err, xhr, body){
      var data = JSON.parse(body)
      var aname = data['agent_name']
      var avers = data['agent_version']
      console.log(aname, avers)
      })
  }).listen(1337)
}
