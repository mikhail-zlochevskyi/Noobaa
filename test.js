var fs = require('fs');
var request = require('request');
var node_ssh = require('node-ssh')

const configFile = 'config.js';
const newPort = '8095';

ssh = new node_ssh();
 
ssh.connect({
  host: 'localhost',
  username: 'NoobaaUser',
  privateKey: '/home/steel/.ssh/id_rsa'
});

eraseConfigFile(configFile);

var validRequest = makeRequest('http://localhost:8080/hello');
//check that code response 200 and body == 'world'
var invalidRequest1 = makeRequest('http://localhost:8080');
var invalidRequest2 = makeRequest('http://localhost:8080/hell');
//check for both that response code is 404

updatePort(newPort);

var newValidRequest = makeRequest('http://localhost:' + newPort + '/hello')
//check that code response 200 and body == 'world'
var newInvalidRequest1 = makeRequest('http://localhost:' + newPort);
var newInvalidRequest2 = makeRequest('http://localhost:' + newPort + '/hell');
//check for both that response code is 404

function makeRequest (url) {
return request(url, function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body); 
});
}

function updatePort (port) {
fs.writeFile(configFile, port, function (err) {
  if (err) throw err;
  console.log('New port is: ' + port);
});
}

function eraseConfigFile (configFile) {
fs.open(configFile, 'w', function (err) {
  if (err) throw err;
  console.log(configFile + ' - has been erased!');
});
}