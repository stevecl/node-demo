const express = require('express');
const app = express();
let route = require('./routes');

// express.static(root, [options])
// app.use(express.static('public'))
// app.use('/static', express.static('public'))
var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}
app.use(myLogger)


app.get('/', route.index);
app.listen(8888, ()=>console.log('Example app listening on port http://localhost:8888'))