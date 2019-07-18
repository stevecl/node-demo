var fs = require('fs');
var URL = require('url');
var data = "some data i want to write to a file";

// 写入内容
fs.writeFile('text.txt', data, function(err){
    if(err) throw err;
    // console.log('data:',data)
})
// 读取文件内容
fs.readFile('C:/Users/maytek/Desktop/user.txt', 'utf8', function(err, data){
    if(err) throw err;
    console.log('data:',data)
})
// debugger; repl cont
// 环境变量
// SET SOMETHING = '123456'; // 终端
// var something = process.env.something;
console.log('process.env:', process.env.NVM_HOME)