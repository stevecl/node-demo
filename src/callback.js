let fs = require('fs');

fs.readFile('somefile.txt', function(err, data){
  if(err) throw err;
  console.log('data:', data)
})