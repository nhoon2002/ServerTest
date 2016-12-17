var url = require('url');
var http = require('http');



function displayRoot(url, request, response) {
  var urlParts = url.parse(request.url);

  switch (urlParts.pathname) {
    case "/":
      displayRoot(urlParts.pathname, request, response);
      break;

    case "/portfolio":
      displayRoot(urlParts.pathname, request, response);
      break;

    case "/edit":
      displayRoot(urlParts.pathname, request, response);
      break;

    default:
      console.log("404 not found");

  }
}


function displayRoot(url, request, response) {
  var myHTML = "<html>";
  myHTML += "<body><h1>Home Page</h1>";


}
