var http = require('http'),
    url = process.argv[2]

var request = http.get(url, function(res) {
  res.setEncoding('utf8')
  res.on('data', console.log)
  res.on('error', console.log)
})


