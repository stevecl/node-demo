let http = require('http');
http.createServer(function(req, res){
  // res.writeHead(200, {
  //   'Content-Type': 'text/plain'
  // })
  res.writeHead(301, {
    'Location': 'https://ys.maytek.cn'
  })

  // res.end('hello world');
  res.end()
}).listen(2000, "localhost");
console.log('Server running at http://localhost:2000')

// url module
// let _url = require('url');
// _url.parse('').hostname
// _url.parse('').port
// _url.parse('').parhname
