var http = require('http');
var cheerio = require('cheerio');

module.exports = function() {
  http.createServer(function(req, res){
    console.log(req.headers['user-agent']);



  }).listen(1337)
}
