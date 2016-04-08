/**
 * Created by shijie on 16/4/8.
 */
var mongoose=require('mongoose');
mongoose.connect('mongodb://123.57.143.189:27017/shijie');
module.exports=mongoose.model('todo',mongoose.Schema(
    {
        text:String
    }
));




