// 1. 引入express
const express = require('express')
// const fs = require('fs')
const router = require('./router.js')


// 2.创建服务器
const app = express()
// 3.添加端口监听
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})

// 6.配置模板引擎,设置当前node服务器使用ehs模板引擎
app.set('view engine','ejs')
// 下面这句代码是进行ejs模板文件查询的默认目录配置，下面这句代码写完之后，以后所有的ejs资源都会云指定的__dirname+"/views"
 app.set('views',__dirname+'/views')



//5.添加静态资源托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))

// 让app使用Router进行路由管理
app.use(router)