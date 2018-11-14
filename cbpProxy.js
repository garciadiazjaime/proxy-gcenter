var request = require('request');

exports.handler = (event, context, callback) => {
  request('http://apps.cbp.gov/bwt/bwt.xml', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(null, body);
    } else {
      callback(error, null);
    }
  });
};
