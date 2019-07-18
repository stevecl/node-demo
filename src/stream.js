let fs = require('fs');
// let stream = fs.ReadStream('name.txt');
let readStream = fs.ReadStream('somefile.txt');
let writeStream = fs.WriteStream('newFile.txt');
readStream.pipe(writeStream);

// let file_str = '';
// readStream.setEncoding('utf8');
// readStream.on('data', function(chunk){
//   console.log('read some data',chunk);
//   file_str += chunk;
//   writeStream.write(chunk)
// })
// readStream.on('close', function(){
//   console.log('all the data is read', file_str);
// })