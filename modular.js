var myModule = require('./filteredls-module'),
    dir = process.argv[2],
    filter = process.argv[3]

myModule(dir, filter, function (err, list) {
  if (err) {
     return console.log("Poop! %s", err)
  }
  list.forEach(function (file) {
    console.log(file)
  })
})
