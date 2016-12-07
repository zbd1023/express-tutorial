var express = require('express')
var app = express()

app.use('/api', api);
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



