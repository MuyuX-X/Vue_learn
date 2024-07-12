// 引入 express

const express=require('express');

//创建应用对象

const app=express();

//3.创建路由规则


app.get('/server',(req,res)=>{
//设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('hello world');
});//设置响应

//4.监听端口

app.listen(8000,()=>{
    console.log('服务器启动成功，8000');
});