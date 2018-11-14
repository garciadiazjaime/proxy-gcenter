const http         = require('http'),
      env          = process.env;
const request = require('request');

const server = http.createServer(function (req, res) {
  const url = req.url;
  if (url == '/health') {
    res.writeHead(200);
    res.end();
  } else {
    request('http://apps.cbp.gov/bwt/bwt.xml', function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.write(body);
        res.end();
      }
    });
  }
});

server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
