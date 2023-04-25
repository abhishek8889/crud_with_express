var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.post('/', function(req, res){
   res.send('POST route on things.');
});

// register page 
router.get('/register',function(req,res){
    res.render('register');
});

// app.get('/first_template', function(req, res){
//     res.render('first_view');
//  });
//export this router to use in our index.js
module.exports = router;