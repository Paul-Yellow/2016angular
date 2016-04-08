/**
 * Created by shijie on 16/4/8.
 */
var express=require('express');
var path=require('path');
var app=express();
app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./index.html'));
});

var server=require('http').createServer(app);
var io=require('socket.io')(server);
var client=[];
io.on('connection',function(socket){
    client.push(socket);
    socket.on('message',function(msg){
        client.forEach(function(client){
            client.send(msg);
        })
    });
});
server.listen(8080);





