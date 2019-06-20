var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('Hello World !!');
});
app.get('/jobs', function(req, res){

});
app.get('/jobs/:id/metadata', function(req, res){
    var jobName = req.params.id;
    if(jobName == "")
    {
        return res.status(404).send({
            success: 'false',
            message: 'job not found'
        })
    }
});
var server=app.listen(3000,function() {});