var http = require('http');
var fs = require('fs');


var html;
fs.readFile(__dirname+'\\src\\obfuscator.html', function(err, data) {
    if (err){
        console.log(err);
        response.writeHead(404, {'Content-Type': 'text/html'});
    }
    html = data;
});



var css;
fs.readFile(__dirname+'\\src\\style.css', function(err, data) {
    if (err){
        console.log(err);
        response.writeHead(404, {'Content-Type': 'text/html'});
    }
    css = data;
});



var js;
fs.readFile(__dirname+'\\src\\obfuscator.js', function(err, data) {
    if (err){
        console.log(err);
        response.writeHead(404, {'Content-Type': 'text/html'});
    }
    js = data;
});



var server = http.createServer(function (request, response) {
    switch (request.url) {
        case "/style.css" :
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(css);
            break;
        case "/obfuscator.js" :
            response.writeHead(200, {"Content-Type": "text/javascript"});
            response.write(js);
            break;
        default :    
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
    };
    response.end();
})
server.listen(4000);
console.log('server is listening at 4000');