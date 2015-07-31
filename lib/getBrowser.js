var http = require('http');
var request = require('request');

module.exports = function(req, res, cb) {
    var ua =  req.headers['user-agent'];
    request.get('http://www.useragentstring.com/?uas=' + ua + '&getJSON=all', function(err, xhr, body){
      var data = JSON.parse(body);
      var browser = {};
      browser.aname = data['agent_name'];
      browser.avers = data['agent_version'];
      cb(browser);
    })
}
