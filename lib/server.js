var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var getBrowser = require(path.join(process.cwd(), '/lib/getBrowser'));

module.exports = function(port){
  http.createServer(function(req, res){
    getBrowser(req, res, function(browser){
      if(req.method==='GET' && req.url==='/flexbox') {
        request.get('http://caniuse.com/flexbox', function(err, xhr, body) {
          var $ = cheerio.load(body);
          var selector = $(browser.aname).siblings().children();
          console.log(selector);
          // var query = selector.filter(function(li){
          //   console.log(li);
          //   return $(li).text()===browser.avers;
          // })
          // console.log(query);
          res.end($.html(selector));
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





