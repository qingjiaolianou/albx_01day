// 这个控制器完成所有与用户相关的业务操作
const userModel = require('../models/userModel.js')
// 用户登录验证
exports.login = (req,res) => {
    // 接受参数
    var obj = req.body
    // 业务处理--调用数据模块
    userModel.login(obj.emali,(err,data)=>{
        if(err){
            // send实现类型转换
            // json:可以直接将js对象转换json格式字符串并返回
            res.json({code:400,msg:'服务器异常'})
        }else{
            // 判断有没有查询到结果集
            if(data){
                // 再判断密码是否正确
                if(data.password == obj.password){
                    // 使用session写入登录状态
                    req.session.isLogin = 'true'
                    // 将当前用户对象存储到Session
                    req.session.currentUser = data;

                    res.end(JSON.stringify({code:200,msg:'登录成功'}))
                }else{
                    res.json({code:400,msg:'密码输入错误'})
                }
            }else{
                res.json({code:400,msg:'邮箱输入错误'})
            }
        }
    })
}