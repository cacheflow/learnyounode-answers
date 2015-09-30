var http = require('http')

var url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4],
    urls = [url1, url2, url3],
    count = 0

function fetch(url)
{
    http.get(url, function(response) {
        response.setEncoding('utf8');

        var allData = '';
        response.on('data', function(data) {
            allData += data;
        })

        response.on('end', function() {
            console.log(allData);
            if(count < 2) {
                count++
                fetch(urls[count]);
            }
        })

        response.on('error', console.error);

    }).on('error', console.error)
}

fetch(url1);
