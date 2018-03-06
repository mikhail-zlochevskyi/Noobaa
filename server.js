var http = require('http');
var fs = require('fs');

var port = 8080;  

fs.readFile('config.js', 'utf8', function(err, content) {
    if (content) {
    	console.log("New port is: " + content + "; Old one is: " + port);
    	port = content;
    } else {
    	console.log("Used default port: " + port);
    }     
});


http.createServer(function (request, response) {
  if (request.method === 'GET' && request.url === '/hello') {
    response.write("world");
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(port);