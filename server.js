var express = require('express');
var app = express();

// app.get('/',function (req, res)
// {
// res.send('Hello Express!');

// });
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function (req, res)
{
res.send('About us!!');

});
app.use(express.static(__dirname + '/public'));

app.listen(3000,function()
{
	console.log('Express server started!');
	});
