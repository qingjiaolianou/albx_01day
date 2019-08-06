const express = require('express')
// 引入页面返回控制器
const pagesController = require('./controllers/pagesController.js')
var router = express.Router()


// 配置路由

router.get('/', pagesController.getIndexPage)
    
    // res.render('index.ejs')
    // pagesController.getIndexPage(req,res)
  
   
// })

.get('/admin', pagesController.getAdminIndexPage)
//       pagesController.getAdminIndexPage(req.res)
   
  
// })

.get('/admin/categories', pagesController.getAdminCategoriesPage)
.get('/admin/comments', pagesController.getAdminCommentsPage)
.get('/admin/login', pagesController.getAdminLoginPage)
.get('/admin/navMenus', pagesController.getAdminNavMenusPage)
.get('/admin/passwordReset', pagesController.getAdminPasswordResetPage)
.get('/admin/postAdd', pagesController.getAdminPostAddPage)
.get('/admin/posts', pagesController.getAdminPostsPage)
.get('/admin/profile', pagesController.getAdminProfilePage)
.get('/admin/settings', pagesController.getAdminSettingsPage)
.get('/admin/slides', pagesController.getAdminSlidesPage)
.get('/admin/users', pagesController.getAdminUsersPage)

// 暴露
module.exports = router;