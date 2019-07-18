/**
 * GET home page
 */
exports.index = function(req, res){
  // res.render('index', {title: 'Express'})
  res.end({title: 'Express'})
}



// var fs = require('fs');
// // index page
// let html = '';
// fs.readFile('test.html', 'utf8', function(err, data){
//     if(err) throw err;
//     // res.render(data)
//     // console.log('data:',data)
//     html = data;
//     // res.type('html');
//     // res.send(data)
// })
// let index = (req, res) => {
//     let obj = {
//         title: 'index page',
//         status: 1
//     }
//     // res.set('Content-Type', 'text/html');
//     // res.send(new Buffer('<p>some html</p>'));
//     // res.type('html');
//     res.send(html);
//     // res.status(504).end();
//     // res.jsonp(obj);
//     // res.status(200).jsonp(obj);
//     // res.send(obj);
// }

// module.exports = {
//     index
// }
// // exports.index = function(req, res){

// // }