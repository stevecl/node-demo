var http = require('http');
var https = require('https');

/**
 * GET home page
 */
exports.index = function(req, res){
  let _url = 'https://ys.maytek.cn/I18nWS/queryI18nLanguageByComboList.xyz'
  _url = 'http://nodejs.org/dist/index.json';
  http.get(_url, function(response){
    var body = [];
    response.on('data', chunk => body.push(chunk));
    response.on('end', () => {
      body = Buffer.concat(body);
      // res.end(body.toString(), 'utf8')
      res.write(body.toString());
      res.end()
    });
  }).on('error', e => console.error(`Got error: ${e.message}`));;
}



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