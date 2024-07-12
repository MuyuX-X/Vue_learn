// 引入 express

const express = require("express");

//创建应用对象

const app = express();

//3.创建路由规则

//IE缓存
app.get("/ie", (req, res) => {
  //设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  res.send("hello IE-2");
});
//延时响应
//IE缓存
app.get("/delay", (req, res) => {
  //设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  //加入定时器
  setTimeout(() => {
    res.send("延时响应");
  }, 3000);
});

//4.监听端口
app.all("/server", (req, res) => {
  //设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  res.send("bye AJAX");
});
//设置响应

app.all("/Jquery-server", (req, res) => {
  //设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //响应一个数据
  const data = { name: "小王" };
  setTimeout(() => {
    res.send(JSON.stringify(data));
  }, 1000);
});
//axios
app.all("/axios-server", (req, res) => {
  //设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //响应一个数据
  const data = { name: "小王" };
  res.send(JSON.stringify(data));
});
//Fetch
app.all("/fetch-server", (req, res) => {
  //设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //响应一个数据
  const data = { name: "小王" };
  res.send(JSON.stringify(data));
});
//JSONP
app.all("/jsonp-server", (req, res) => {
    //设置响应头，设置允许跨域
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Headers", "*");
    //响应一个数据
    const data = {
        name: 'xiaownag12313666'
    };
    let str = JSON.stringify(data);
    //返回结果
    // res.end();
    //返回结果是函数调用
    res.send(`handle(${str})`);
  });
  //用户名检测是否存在
  app.all("/check-username", (req, res) => {
    //设置响应头，设置允许跨域
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Headers", "*");
    //响应一个数据
    const data = {
        name: 'xiaownag12313666',
        msg: '3用户名已经存在'
    };
    let str = JSON.stringify(data);
    //返回结果
    // res.end();
    //返回结果是函数调用
    res.send(`handle(${str})`);
  });
  
  app.all("/jquery-jsonp", (req, res) => {
    //设置响应头，设置允许跨域
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Headers", "*");
    //响应一个数据
    const data = {
        name: 'xiaownag12313666',
        msg: '456455',
        city: ['西安','陕西']
    };
    let str = JSON.stringify(data);
    //返回结果
    // res.end();
    //接受 callback参数
    let cb = req.query.callback;
    //返回结果是函数调用
    res.send(`${cb}(${str})`);
  });
  app.all("/cors", (req, res) => {
    //设置响应头，设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Method", "*");
    res.send('hello');
  });
app.listen(8000, () => {
  console.log("服务器启动成功,8000");
});
