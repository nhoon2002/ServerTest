// Instructions:
//
// + Create a website with four routes:
//     - Home
//     - Favorite Food
//     - Favorite Movies
//     - Favorite CSS Frameworks
// + Each route should be triggered by a different URL.
// + Each route should display an HTML page listing your favorite three things of each.
// + Be sure to see fs to serve your HTML files.

// We require/import the HTTP module
var http = require("http");
var url = require('url');
var fs = require('fs');

// =====================================================================

// Then define the ports we want to listen to
var PORTONE = 7000;

// Create our servers
var serverOne = http.createServer(handleRequest);

// Starting our servers
serverOne.listen(PORTONE, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

function handleRequest(request, response) {
  var urlParts = url.parse(request.url);

  function reader(url) {

   fs.readFile(url, function(err,data) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(data);
    });
  }
  console.log("pathname", urlParts.pathname);

  switch (urlParts.pathname) {
    case "/":
      reader("./index.html");
      break;

    case "/favoritefoods":
      reader("." + urlParts.pathname + ".html");
      break;

    case "/favoritemovies":
      reader("." + urlParts.pathname + ".html");
      break;

    case "/favoriteCSS":
      reader("." + urlParts.pathname + ".html");
      break;

    default:
      console.log("404 not found");
      response.end("error");

  }

}
