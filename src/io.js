let http = require('http');
let urls = ['www.baidu.com'];

function fetchPage(url){
  let start = new Date();
  http.get({host: url}, function(res){
    console.log('res:',res)
    console.log("got response from:" + url);
    console.log("request took:", new Date() - start, 'ms')
  }).on('error', function(e){
    console.log('error: ', e)
  })
}

urls.forEach(url => fetchPage(url));
