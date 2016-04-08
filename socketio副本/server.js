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
    var username;
    socket.send({username:'系统',content:'请输入用户名'});
    client.push(socket);
    socket.on('message',function(msg){
        var result=msg.match(/^@(.+)\s(.+)$/);
        if(result){
            var toUser=result[1];
            var content=result[2];
            if(client[toUser]){
                console.log(client[toUser]);
               client[toUser].send({username:username,content:'[私聊]'+content});
            }else{
                socket.send({username:'系统',content:'你想私聊的人不在线'});
            }
        }else{
            if(username){
                for(var s in client){
                    client[s].send({username:username,content:msg});
                }
            }else{
                username=msg;
                client[username]=socket;
                socket.send({username:'系统',content:'你的用户名已修改为'+username});
            }
        }


    });
});
server.listen(8080);





