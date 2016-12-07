var express = require('express')
var app = express()

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



