const express = require('express');
const path = require('path');
const app = express();

app.use(express.static( dirname + '/dist/myapp'));

app.get('/*', function(req, res){
    res.sendFile(path.join( dirname + '/dist/myapp/index.html'));
});

app.listen(process.env.PORT || 3000);