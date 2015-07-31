var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var getBrowser = require(path.join(process.cwd(), '/lib/getBrowser'));

module.exports = function(port){
  http.createServer(function(req, res){
    getBrowser(req, res, function(browser){
      if(req.method==='GET' && req.url==='/flexbox') {
        request.get('http://caniuse.com/#tables', function(err, xhr, body) {
          var $ = cheerio.load(body);
          res.end($(body).find('ol').next().hasClass(browser.aname));
          console.log(browser.aname);
          console.log(browser.avers);
        });
      }

      else {
        res.writeHead(403);
        res.end('You do not have permission to access this page!');
      }
    });




  }).listen(port);
}





