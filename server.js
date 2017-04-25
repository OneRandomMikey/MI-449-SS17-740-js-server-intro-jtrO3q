// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' +
      '<p>Hello!Welcome to my site!<p>' +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">'
    )
  } else if (request.url === '/random-joke') {
    var randomNum = Math.random()
    if (randomNum < 0.4) {
      response.end(
        '<h1></h1>' +
        '<a href="/">Home Page</a>' +
        '<h1>Can a kangaroo jump higher than a house? Of course, a house doesn\'t jump at all.</h1>'
      )
    } else if (randomNum > 0.7) {
      response.end(
        '<h1></h1>' +
        '<a href="/">Home Page</a>' +
        '<h1>Anton, do you think I\'m a bad mother?</h1>' +
        '<h1>My name is Paul.</h1>'
      )
    } else {
      response.end(
        '<h1></h1>' +
        '<a href="/">Home Page</a>' +
        '<h1>Do not go to the bathroom in a dream. It\'s a trap!</h1>'
      )
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1></h1>' +
      '<a href="/">Home Page</a>' +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">'
    )
  } else {
    response.end(
      '<h1>404.That\'s an error</h1>' +
      '<p>The requested URL' + request.url + '</p>' +
      '<p>was not found on this server.That\'s all we know</p>' +
      '<a href="/">Home Page</a>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
