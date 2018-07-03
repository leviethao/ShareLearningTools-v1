exports.login_post = function (req, res) {
  res.send('chuc mung user: ' + req.body.username)
  console.log('chuc mung user: ' + req.body.username)
}