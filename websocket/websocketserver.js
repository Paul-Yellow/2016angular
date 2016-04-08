/**
 * Created by shijie on 16/4/8.
 */
var Server=require('ws').Server;
//创建服务器的实例
var wss=new Server({
    port:8080
});
wss.on('connection',function(ws){
    ws.on('message',function(message){
        console.log('received:%s',message);
        ws.send("server sayhello"+message);
    })
})





