var http = require('http');
var request = require('request');

module.exports = function(req, res, cb) {
    var ua =  req.headers['user-agent'];
    request.get('http://www.useragentstring.com/?uas=' + ua + '&getJSON=all', function(err, xhr, body){
      var data = JSON.parse(body);
      var browser = {};
      browser.aname = '.browser--' + data['agent_name'].toLowerCase();
      browser.avers = data['agent_version'].slice(0,2);
      cb(browser);
    })
}
