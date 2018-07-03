var express = require('express')
var router = express.Router()

var post_api = require('../api/post_api')
var user_api = require('../api/user_api')

router.get('/', post_api.index)
router.post('/login', user_api.login_post)

module.exports = router