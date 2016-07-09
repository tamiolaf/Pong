  var thru = require('through2');
  var http = require('http');

  var server = http.createServer(function (req,res) { 
  	if (req.method === "POST") {
  		req.pipe(thru(function (buf, _, next) {
  			this.push(buf.toString().toUpperCase());
  			next();
  		})).pipe(res);

  	}
  	else res.end('send me a POST\n ');
  });
  server.listen(parseInt(process.argv[2]));