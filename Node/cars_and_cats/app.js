// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    //---------------------this loads the root route or the homepage-----------------//
    if (request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    //---------------------this loads the page for the cars-----------------//
    else if (request.url === "/cars") {     //this will load the cars.html page, but then there needs to be a different route for each image you want to load on this html page
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    //---------------------this route is for each image-----------------//
    else if (request.url === '/images/Mercedes_GLC.png') { //this must match src in image tag on html 
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Mercedes_GLC.png', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/mercedes_glc_red.jpg') { //this must match src in image tag on html - it can be whatever you want it to be
        // notice we won't include the utf8 encoding
        fs.readFile('./images/mercedes_glc_red.jpg', function (errors, contents) { //this path must be the path to the image
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    //---------------------this route is for each css-----------------//
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        })
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
