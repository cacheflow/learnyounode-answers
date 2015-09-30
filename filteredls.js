var fs = require('fs'),
    dir = process.argv[2],
    regex = new RegExp("\\." + process.argv[3] + "$")

fs.readdir(dir, function(err,list) {
  if (err) throw err
  list.forEach(function (file) {
    if (regex.test(file)) {
      console.log(file)
    }
  })
})
