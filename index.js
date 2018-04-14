import {hello} from './src/hello.js';

const http = require('http');
hello();

const server = http.createServer((req, res) => {
	hello();
  	// res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);