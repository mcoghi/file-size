// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({dest: "uploads/"});


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/upload", upload.single("up-file"), function (request, response) {
  console.log(request.file);
  response.send({size: request.file.size});
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
