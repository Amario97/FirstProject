const fs = require('fs')
const http = require('http')
const port = 3000 // Port number
let directory = 'index.html'
  
// Create a server object:
const server = http.createServer(function (req, res) {
  
    //Removing the forward slash from the request url name
    let testUrl = (req.url).substring(1, (req.url).length)

    if (testUrl != '') {
        directory = testUrl
    }
    else {
        directory = 'index.html'
    }

    res.writeHead(200, {'Content-Type': 'text/html'})

    fs.readFile(directory, function(error, data) {
        if(error) {
            res.writeHead(404)
        }
        else {
            res.write(data)
        }
        console.log(req.url)
        res.end()
    })

})
  
// Set up of server to listen on port 3000
server.listen(port, function (error) {
  
    // Checking for error while listening on port
    if (error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log('Server is listening on port' + port);
    }
})