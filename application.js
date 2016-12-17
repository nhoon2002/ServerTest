var http = require('http'); // Import http module

var PORT = 8080; // AVOID port 3306 because its reserved for SQL


// Create generic function to andle requests and responses
function handleRequest(request, response) {
    response.end("It works!! Path Hit: " + request.url);
}
// Using Node http package to create our server
var server = http.createServer(handleRequest); // Passing in the handleRequest function to provide functionality to process a request

server.listen(PORT, function() {
  console.log("Server is listening on http://localhost:%s", PORT);
});
