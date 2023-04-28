module.exports = reqFilter =(req,resp,next)=>{
    if(req.query.user_status == '1'){
        next();
    }else{
        resp.render('404');
    }
}