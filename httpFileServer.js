var http = require('http')
var fs = require('fs')
var port = Number(process.argv[2]);
var server = http.createServer(function (req, response) {
  fs.createReadStream(process.argv[3]).pipe(response)
})
server.listen(port);
