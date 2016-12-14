#!/bin/env node
var http = require('http');

http.createServer(function(req, res) {
  console.log('request');
  var request = require('request');
  request('http://apps.cbp.gov/bwt/bwt.xml', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/xml' });
      res.write(body);
      res.end();
    }
  });
}).listen(process.env.OPENSHIFT_NODEJS_PORT || 8080, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
