const express = require('express');
const app = express();


// to access css and js files
app.use(express.static('public'))

// homepage get
app.get("/" , function( req , res ){
    res.sendFile(__dirname + '/index.html');
});


// server init
app.listen(process.env.PORT || 3000  , function(){
    console.log('server listening on port 3000');
});