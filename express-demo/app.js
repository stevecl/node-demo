var express = require('express');
var app = express();

var routes = require('./routes');
// express.static(root, [options])
// app.use(express.static('public'))
// app.use('/static', express.static('public'))
// var myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
// }
  
// app.use(myLogger)


app.get('/', routes.index)
// app.route('/user')
//     .get(function(req, res){
//         console.log('req.params:',req.query)
//         res.send('get a user info:'+req.params.toString())
//     })
//     .post(function(req, res){
//         res.send('post a user info')
//     })
//     .put(function(req, res){
//         res.send('put a user info')
//     });
// // app.use(express.static('img'));
// app.get('/3', function(req, res){
//     console.log('req：',req)
//     console.log('res：',res)
//     var obj = {
//         name: '张三',
//         age: 30,
//         phone: 88888888
//     }
//     res.send(obj)
// })

var server = app.listen(7777, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Server running at http://localhost:${port}`);
})


// var http = require('http'),
//     url = require('url');

// http.createServer((req, res) => {
//     var pathname = url.parse(req.url).pathname;
//     if(pathname === '/'){
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         });
//         res.end('Home page');
//     }else if(pathname === '/about'){
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         })
//         res.end('about page')
//     }else if(pathname === '/redirect'){
//         res.writeHead(301, {
//             'Location': '/'
//         })
//         res.end();
//     }else{
//         res.writeHead(404, {
//             'Content-Type': 'text/plain'
//         })
//         res.end('404 not found')
//     }
// }).listen('888', 'clouddev');
// console.log('Server running at http://clouddev:888');